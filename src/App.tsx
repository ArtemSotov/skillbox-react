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
import { PostsContextProvider } from "./shared/context/postsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	store.dispatch(tokenThunk());
	// }, []);

	return (
		<Provider store={store}>
			<PostsContextProvider>
				<Layout>
					<Header />
					<Content>
						<CardsList />
					</Content>
				</Layout>
			</PostsContextProvider>
		</Provider>
	);
}

export const App = hot(() => <AppComponent />);
