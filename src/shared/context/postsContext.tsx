import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

export interface IPostContextData {
	author?: string;
	title?: string;
	url?: string;
	permalink?: string;
	preview?: string;
	id?: string;
}

export const postsContext = React.createContext<IPostContextData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
	const [data] = usePostsData();
	return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
