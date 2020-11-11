import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { generateId } from "./utils/react/generateRandomIndex";
import { MyList } from "./shared/GenericList";

const LIST = [
	{ value: 'some' },
	{ value: 'other some' },
	{ value: 'some' }
].map(generateId);

function AppComponent() {
	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
				{/* <MyList list={LIST} onClick={console.log} /> */}
				<MyList list={LIST.map((item) => ({
					...item,
					onClick: () => {
						console.log(item.id);
					}
				}))} />
			</Content>
		</Layout>
	);
}

export const App = hot(AppComponent);
