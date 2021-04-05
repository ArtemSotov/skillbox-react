import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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

	useEffect(() => {
		// if (!token) return;

		async function load() {
			setLoading(true);
			setErrorLoading("");

			try {
				const {
					data: {
						data: { children },
					},
				} = await axios.get("https://oauth.reddit.com/rising.json", {
					headers: { Authorization: `bearer ${token}` },
				});
				// console.log("children: ", children);

				setPosts(children);
			} catch (error) {
				setErrorLoading(String(error));
			}
			setLoading(false);
		}

		load();
	}, []);

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
			{/* {cardsList.map((p) => (
				<Card preview={p.preview?.replace("&amp;", "&")} title={p.title} author={p.author} url={p.url} key={p.id} />
			))} */}
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
		</ul>
	);
}
