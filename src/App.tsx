// yo react-ts-component-dir
// https://www.figma.com/file/STABzVueKL3brf4aOgkvW2/Rd-(Mirror)?node-id=94%3A3575
// Документация к Reddit Api: reddit.com/dev/api/oauth

import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { PostsContextProvider } from "./shared/context/postsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Post } from "./shared/Post";
import { PageNotFound } from "./shared/PageNotFound";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Provider store={store}>
			{mounted && (
				<BrowserRouter>
					<PostsContextProvider>
						<Layout>
							<Header />
							<Content>
								<Switch>
									<Redirect exact from="/" to="/posts" />
									<Redirect from="/auth" to="/posts" />

									<Route path="/posts">
										<CardsList />
										<Route path="/posts/:id">
											<Post />
										</Route>
									</Route>
									<Route path="*">
										<PageNotFound />
									</Route>
								</Switch>
							</Content>
						</Layout>
					</PostsContextProvider>
				</BrowserRouter>
			)}
		</Provider>
	);
}

export const App = hot(() => <AppComponent />);
