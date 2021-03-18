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
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
	const [token] = useToken();
	const TokenProvider = tokenContext.Provider;
	return (
		<Provider store={store}>
			<TokenProvider value={token}>
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
			</TokenProvider>
		</Provider>
	);
}

export const App = hot(() => <AppComponent />);
