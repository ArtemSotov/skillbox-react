import React from "react";
import { Text } from "../../../Text";
import { AuthorInfo } from "./AuthorInfo";
import styles from "./textcontent.css";
import { Title } from "./Title";

interface ITextContentProps {
	title?: string;
	author?: string;
	url?: string;
	idCard?: string;
}

export function TextContent(props: ITextContentProps) {
	const { title, author, url, idCard } = props;
	return (
		<div className={styles.textContent}>
			<AuthorInfo author={author} />
			<br />
			<Title title={title} id={idCard} />
		</div>
	);
}
