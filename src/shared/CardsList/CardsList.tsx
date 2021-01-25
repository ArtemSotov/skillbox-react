import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";
import axios from "axios";
import { useToken } from "../../hooks/useToken";

interface IPostData {
	author?: string;
	title?: string;
	url?: string;
	permalink?: string;
	preview?: string;
}

export function CardsList() {
	const [token] = useToken();
	const [data, setData] = useState<IPostData[]>([]);
	useEffect(() => {
		axios
			.get("https://oauth.reddit.com/best.json", {
				headers: { Authorization: `bearer ${token}` },
			})
			.then((resp) => {
				const respList: any[] = resp.data.data.children;
				console.log("respList: ", respList);

				const dataList: IPostData[] = [];
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
	return (
		<ul className={styles.cardsList}>
			<Card />
		</ul>
	);
}
