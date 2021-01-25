// yo react-ts-component-dir
// https://www.figma.com/file/STABzVueKL3brf4aOgkvW2/Rd-(Mirror)?node-id=94%3A3575
// Документация к Reddit Api: reddit.com/dev/api/oauth

import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
// import { usePostsData } from "./hooks/usePostsData";
// import axios from "axios";

function AppComponent() {
	const [token] = useToken();
	// axios
	// 	.get("https://www.reddit.com/dev/api/#GET_best", {
	// 		headers: { Authorization: `bearer ${token}` },
	// 	})
	// 	.then(console.log);
	const { Provider } = tokenContext;
	return (
		<tokenContext.Provider value={token}>
			<UserContextProvider>
				<Layout>
					<Header />
					<Content>
						<CardsList />
					</Content>
				</Layout>
			</UserContextProvider>
		</tokenContext.Provider>
	);
}

export const App = hot(() => <AppComponent />);
