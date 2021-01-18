// yo react-ts-component-dir
// https://www.figma.com/file/STABzVueKL3brf4aOgkvW2/Rd-(Mirror)?node-id=94%3A3575
// Документация к Reddit Api: reddit.com/dev/api/oauth

import React, { Component, useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";

function AppComponent() {
	const [token] = useToken();

	return (
		<Layout>
			<Header token={token} />
			<Content>
				<CardsList />
			</Content>
		</Layout>
	);
}

export const App = hot(() => <AppComponent />);
