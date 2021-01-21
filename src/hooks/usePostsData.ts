import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";



export function usePostsData() {
	//const [data, setData] = useState<IUserData>({});
	const token = useContext(tokenContext);
	useEffect(() => {
		axios
			.get("https://oauth.reddit.com/best", {
				headers: { Authorization: `bearer ${token}` },
			})
			.then(console.log)
			.catch(console.log);
	}, [token]);
	//return [data];
}