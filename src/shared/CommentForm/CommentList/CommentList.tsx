import React from "react";
import { KarmaCounter } from "../../CardsList/Card/Controls/KarmaCounter";
import { CommentItem } from "./CommentItem";
import styles from "./commentlist.css";

export interface IComment {
	text: string;
	valueKarma?: number;
	child?: IComment[];
}

interface ICommentListProps {
	list: IComment[];
}

export function CommentList({ list }: ICommentListProps) {
	console.log("list: ", list);
	return (
		<>
			{list.map((item) => (
				<div className={styles.commentText1}>
					<CommentItem
						text={item.text}
						valueKarma={item.valueKarma}
						child={item.child}
					/>
					{/* {!!child && (
						<div className={styles.commentChild}>
							<CommentList list={child} />
						</div>
					)} */}
				</div>
			))}
		</>
	);
}
