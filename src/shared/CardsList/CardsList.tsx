import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";
import axios from "axios";
import { useToken } from "../../hooks/useToken";

interface IPost {
	author?: string;
	title?: string;
	url?: string;
	permalink?: string;
	preview?: string;
}

export function CardsList() {
	const [token] = useToken();
	const [data, setData] = useState<IPost[]>([]);
	useEffect(() => {
		axios
			.get("https://oauth.reddit.com/best.json", {
				headers: { Authorization: `bearer ${token}` },
			})
			.then((resp) => {
				const respList: any[] = resp.data.data.children;
				console.log("respList: ", respList);

				const dataList: IPost[] = [];
				for (let i = 0; i < respList.length; i++) {
					dataList.push({
						author: respList[i].data.author,
						title: respList[i].data.title,
						url: respList[i].data.url,
						permalink: respList[i].data.permalink,
						preview: respList[i].data?.preview?.images[0]?.source?.url,
					});
				}
				console.log("dataList: ", dataList);

				setData(dataList);
			})
			.catch(console.log);
	}, []);
	const url =
		"https://external-preview.redd.it/ZbrXwT5ECy9xffhOTtByNZIWoasL7lvhdKmUat87yKc.jpg?auto=webp&s=ecad8d62f6627429630d2a34f8dbef394aea47b0";
	console.log("data: ", data);
	const dt: IPost[] = [{ title: "123" }, { title: "456" }];
	console.log("dt: ", dt);

	return (
		<ul className={styles.cardsList}>
			{dt.map((p) => (
				<li>{p.title}</li>
			))}
		</ul>
	);
}
