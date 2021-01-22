import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";



export function usePostsData() {
	//const [data, setData] = useState<IUserData>({});
	const token = useContext(tokenContext);
	useEffect(() => {
		axios
			.get("https://oauth.reddit.com/api/v1/me", {
				headers: { Authorization: `bearer ${token}` },
			})
			.then((resp) => {
				const userData = resp.data;
				console.log('userData: ',userData);
			})
			.catch(console.log);
	}, [token]);
	//return [data];
}