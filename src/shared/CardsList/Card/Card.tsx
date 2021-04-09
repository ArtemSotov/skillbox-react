import React from "react";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface IPostProps {
	author?: string;
	title?: string;
	url?: string;
	permalink?: string;
	preview?: string;
	idCard?: string;
}

export function Card(props: IPostProps) {
	//const url = "https://external-preview.redd.it/ZbrXwT5ECy9xffhOTtByNZIWoasL7lvhdKmUat87yKc.jpg?auto=webp&s=ecad8d62f6627429630d2a34f8dbef394aea47b0";
	const { author, title, url, permalink, preview = "", idCard } = props;

	return (
		<li className={styles.card}>
			<TextContent title={title} url={url} author={author} idCard={idCard} />
			<Preview previewUrl={preview} />
			<Menu />
			<Controls />
		</li>
	);
}
