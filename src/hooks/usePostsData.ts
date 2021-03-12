import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IPost {
	author?: string;
	title?: string;
	url?: string;
	permalink?: string;
	preview?: string;
}

export function usePostsData() {
	const [data, setData] = useState<IPost[]>([]);
	const token = useContext(tokenContext);
	useEffect(() => {
		axios
			.get("https://oauth.reddit.com/best.json?limit=1", {
				headers: { Authorization: `bearer ${token}` },
			})
			.then((resp) => {
				const respList: any[] = resp.data.data.children;
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
				
				setData(dataList);
			})
			.catch(console.log);
	}, [token]);
	return [data];
}