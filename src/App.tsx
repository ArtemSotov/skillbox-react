import React, { Component } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";

const LIST = [
	{ text: 'some' },
	{ text: 'other some' },
	{ text: 'some' }
].map(generateId);

function AppComponent() {
	const [list, setList] = React.useState(LIST);
	const handleItemClick = (id: string) => {
		setList(list.filter((item) => item.id !== id));
	}
	const handleAdd = () => {
		setList(list.concat(generateId({ text: generateRandomString() })))
	}

	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
				<div style={{ padding: 20 }}>
					<br />
					<Dropdown
						onClose={() => console.log('closed')}
						onOpen={() => console.log('opened')}
						isOpen={false}
						button={<button>Test</button>}
					>
						<ul><li>1</li></ul>
					</Dropdown>
				</div>
			</Content>
		</Layout >
	);
}

export const App = hot(() => <AppComponent />);
