import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePostsData } from "../../hooks/usePostsData";
import { thunkSaveToken } from "../../store/token/actions";

export interface IPostContextData {
	author?: string;
	title?: string;
	url?: string;
	permalink?: string;
	preview?: string;
	id?: string;
}

export const postsContext = React.createContext<IPostContextData[]>([]);

export function PostsContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(thunkSaveToken());
	}, []);

	const [data] = usePostsData();
	return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
