// yo react-ts-component-dir
// https://www.figma.com/file/STABzVueKL3brf4aOgkvW2/Rd-(Mirror)?node-id=94%3A3575
// Документация к Reddit Api: reddit.com/dev/api/oauth

import React, { useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { commentContext } from "./shared/context/commentContext";
// import { usePostsData } from "./hooks/usePostsData";
// import axios from "axios";

function AppComponent() {
	const [token] = useToken();
	const [commentValue, setCommentValue] = useState("");
	const { Provider } = tokenContext;
	const CommentProvider = commentContext.Provider;
	return (
		<CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
			<tokenContext.Provider value={token}>
				<UserContextProvider>
					<PostsContextProvider>
						<Layout>
							<Header />
							<Content>
								<CardsList />
							</Content>
						</Layout>
					</PostsContextProvider>
				</UserContextProvider>
			</tokenContext.Provider>
		</CommentProvider>
	);
}

export const App = hot(() => <AppComponent />);
