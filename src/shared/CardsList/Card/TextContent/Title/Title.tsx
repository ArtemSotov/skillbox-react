import React from "react";
import styles from "./title.css";
import { Link } from "react-router-dom";

interface ITitleProps {
	title?: string;
	id?: string;
}

export function Title({ title, id }: ITitleProps) {
	const link = "/posts/" + id;
	return (
		<h2 className={styles.title}>
			<Link to={link} className={styles.postLink}>
				{title}
			</Link>
		</h2>
	);
}
