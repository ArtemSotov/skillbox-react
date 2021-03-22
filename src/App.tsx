// yo react-ts-component-dir
// https://www.figma.com/file/STABzVueKL3brf4aOgkvW2/Rd-(Mirror)?node-id=94%3A3575
// Документация к Reddit Api: reddit.com/dev/api/oauth

import React, { useEffect } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { Action, applyMiddleware, createStore, Middleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState, setToken } from "./store";
import thunk, { ThunkAction } from "redux-thunk";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

const timeout = (
	ms: number
): ThunkAction<void, RootState, unknown, Action<string>> => (
	dispatch,
	_getState
) => {
	dispatch({ type: "START" });
	setTimeout(() => {
		dispatch({ type: "FINISH" });
	}, ms);
};

function AppComponent() {
	useEffect(() => {
		if (window.__token__) {
			store.dispatch(setToken(window.__token__));
		}
		//@ts-ignore
		store.dispatch(timeout(3000));
	}, []);

	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export const App = hot(() => <AppComponent />);
