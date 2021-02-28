import React from "react";
import { Text } from "../../../Text";
import { AuthorInfo } from "./AuthorInfo";
import styles from "./textcontent.css";
import { Title } from "./Title";

interface ITextContentProps {
	title?: string;
	author?: string;
	url?: string;
}

export function TextContent(props: ITextContentProps) {
	const { title, author, url } = props;
	return (
		<div className={styles.textContent}>
			<AuthorInfo author={author} />
			<br />
			<Title title={title} />
		</div>
	);
}
