import React from "react";
import styles from "./commentlist.css";

export interface IComment {
	text: string;
	child?: IComment[];
}

interface ICommentListProps {
	list: IComment[];
}

export function CommentList({ list }: ICommentListProps) {
	console.log("list: ", list);
	return (
		<>
			{list.map(({ text, child }) => (
				<div className={styles.commentText}>
					{text}
					{!!child && (
						<div className={styles.commentChild}>
							<CommentList list={child} />
						</div>
					)}
				</div>
			))}
		</>
	);
}
