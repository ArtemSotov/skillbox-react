import React from "react";
import ReactDOM from "react-dom";
import styles from "./post.css";

export function Post() {
	const node = document.querySelector("#modal_root");
	if (!node) return null;

	return ReactDOM.createPortal(
		<div className={styles.modal}>
			<h2>
				Следует отметить, что новая модель организационной деятельности поможет
			</h2>

			<div className={styles.content}>
				<p>Есть над чем задуматься</p>
				<p>Есть над чем задуматься</p>
				<p>Есть над чем задуматься</p>
			</div>
		</div>,
		node
	);
}