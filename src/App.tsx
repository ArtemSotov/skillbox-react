// yo react-ts-component-dir
// https://www.figma.com/file/STABzVueKL3brf4aOgkvW2/Rd-(Mirror)?node-id=94%3A3575

import React, { Component } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import {
	generateId,
	generateRandomString,
} from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";
import { EColor, Text } from "./shared/Text";
import { Break } from "./shared/Break";
import { Icon } from "./shared/Icon";

// const LIST = [
// 	{
// 		text: 'some',
// 		onClick: () => { console.log('1'); }
// 	},
// 	// { text: 'other some' },
// 	// { text: 'some' }
// ].map(generateId);

function AppComponent() {
	// const [list, setList] = React.useState(LIST);
	// const handleItemClick = (id: string) => {
	// 	setList(list.filter((item) => item.id !== id));
	// }
	// const handleAdd = () => {
	// 	setList(list.concat(generateId({ text: generateRandomString() })))
	// }

	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
				{/* <div style={{ padding: 20 }}>
					<br />
					<Dropdown
						onClose={() => console.log('closed')}
						onOpen={() => console.log('opened')}
						isOpen={false}
						button={<button>Test</button>}
					>
						<GenericList list={LIST} />
					</Dropdown>
				</div> */}
				{/* <Text size={20} mobileSize={10} color={EColor.green}>
					Labe11
				</Text>
				<Break size={8} tabletSize={16} top />
				<Text size={20} tabletSize={10} bold>
					Label2
				</Text>
				<Break size={20} inline />
				<Text size={20} desktopSize={10}>
					Label3
				</Text> */}
				<Icon />
			</Content>
		</Layout>
	);
}

export const App = hot(() => <AppComponent />);
