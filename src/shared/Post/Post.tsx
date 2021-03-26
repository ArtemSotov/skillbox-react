import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { generateId } from "../../utils/react/generateRandomIndex";
import { CommentList, IComment } from "../CommentForm/CommentList";
import { CommentFormSmart } from "../CommentFormSmart";
import styles from "./post.css";

interface IPost {
	onClose?: () => void;
}

const commentList: IComment[] = [
	{
		author: "author 1",
		text: "comment 1",
		child: [
			{
				author: "author 1-1",
				text: "child 1-1",
				child: [
					{
						author: "author 1-1-1",
						text: "child 1-1-1",
					},
					{
						author: "author 1-1-2",
						text: "child 1-1-2",
					},
				].map(generateId),
			},
			{
				author: "author 1-2",
				text: "child 1-2",
			},
		].map(generateId),
	},
	{
		author: "author 2",
		text: "comment 2",
	},
].map(generateId);

export function Post(props: IPost) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (
				event.target instanceof Node &&
				!ref.current?.contains(event.target)
			) {
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
			<h2>
				Следует отметить, что новая модель организационной деятельности поможет
			</h2>

			<div className={styles.content}>
				<p>Есть над чем задуматься</p>
				<p>Есть над чем задуматься</p>
				<p>Есть над чем задуматься</p>
			</div>
			<CommentFormSmart />
			<hr />
			{/* <CommentList list={commentList} /> */}
		</div>,
		node
	);
}
