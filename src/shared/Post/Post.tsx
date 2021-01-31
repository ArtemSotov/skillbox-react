import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CommentForm } from "../CommentForm";
import styles from "./post.css";

interface IPost {
	onClose?: () => void;
}

export function Post(props: IPost) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				props.onClose?.();
			}
		}
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	const node = document.querySelector("#modal_root");
	if (!node) return null;

	return ReactDOM.createPortal(
		<div className={styles.modal} ref={ref}>
			<h2>Следует отметить, что новая модель организационной деятельности поможет</h2>

			<div className={styles.content}>
				<p>Есть над чем задуматься</p>
				<p>Есть над чем задуматься</p>
				<p>Есть над чем задуматься</p>
			</div>

			<CommentForm />
		</div>,
		node
	);
}
