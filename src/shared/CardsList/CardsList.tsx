import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { RootState } from "../../store/reducer";
import { generateId } from "../../utils/react/generateRandomIndex";
import { postsContext } from "../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";

export function CardsList() {
	//const cardsList = useContext(postsContext);

	// пишем новый загрузчик постов из списка rising
	const token = useSelector<RootState, string>((state) => state.token.value);
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorLoading, setErrorLoading] = useState("");
	const [nextAfter, setNextAfter] = useState("");
	const [count, setCount] = useState(0);

	const bottomOfList = useRef<HTMLDivElement>(null);

	// для бесконечного списка
	useEffect(() => {
		async function load() {
			setLoading(true);
			setErrorLoading("");

			try {
				const {
					data: {
						data: { after, children },
					},
				} = await axios.get("https://oauth.reddit.com/rising.json", {
					headers: { Authorization: `bearer ${token}` },
					params: {
						limit: 10,
						after: nextAfter,
					},
				});
				setPosts((prevChildren) => prevChildren.concat(...children));
				setNextAfter(after);
				setCount((prevCount) => prevCount + 1);
			} catch (error) {
				setErrorLoading(String(error));
			}
			setLoading(false);
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					if (!loading && count < 3) {
						load();
					}
				}
			},
			{
				rootMargin: "10px",
			}
		);

		if (bottomOfList.current) {
			observer.observe(bottomOfList.current);
		}

		return () => {
			if (bottomOfList.current) {
				observer.unobserve(bottomOfList.current);
			}
		};
	}, [bottomOfList.current, nextAfter, token, loading, count]);

	const handleLoadNext = () => {
		setCount(0);
	};

	return (
		<ul className={styles.cardsList}>
			{posts.length === 0 && !loading && !errorLoading && (
				<div role="alert" style={{ textAlign: "center" }}>
					Нет ни одного поста
				</div>
			)}

			{posts.map((post) => (
				<Card
					key={post.data.id}
					preview={post.data?.preview?.images[0]?.source?.url?.replace(
						"&amp;",
						"&"
					)}
					title={post.data.title}
					author={post.data.author}
					url={post.data.url}
				/>
			))}

			<div ref={bottomOfList} />

			{loading && (
				<div role="alert" style={{ textAlign: "center" }}>
					Загрузка...
				</div>
			)}
			{errorLoading && (
				<div role="alert" style={{ textAlign: "center" }}>
					{errorLoading}
				</div>
			)}
			{count === 3 && (
				<div style={{ textAlign: "center" }}>
					<input type="button" value="Загрузить еще" onClick={handleLoadNext} />
				</div>
			)}
		</ul>
	);
}
