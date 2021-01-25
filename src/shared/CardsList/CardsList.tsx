import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";
import axios from "axios";
import { useToken } from "../../hooks/useToken";

interface IPostsData {
	text?: string;
}

export function CardsList() {
	const [token] = useToken();
	const [data, setData] = useState<IPostsData>({});
	useEffect(() => {
		axios
			.get("https://oauth.reddit.com/best.json", {
				headers: { Authorization: `bearer ${token}` },
			})
			.then((resp) => {
				console.log("resp: ", resp);
				const postsData = resp.data;
				console.log("postsData: ", postsData);
				setData({ text: "lalala" });
			})
			.catch(console.log);
	}, []);
	return (
		<ul className={styles.cardsList}>
			<Card />
		</ul>
	);
}
