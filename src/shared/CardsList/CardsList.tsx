import React, { useContext } from "react";
import { generateId } from "../../utils/react/generateRandomIndex";
import { postsContext } from "../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";

export function CardsList() {
	const cardsList = useContext(postsContext);

	return (
		<ul className={styles.cardsList}>
			{cardsList.map((p) => (
				<Card preview={p.preview?.replace("&amp;", "&")} title={p.title} author={p.author} url={p.url} key={p.id} />
			))}
		</ul>
	);
}
