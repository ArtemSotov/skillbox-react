import React from "react";
import { generateId } from "../../../utils/react/generateRandomIndex";
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
	const listWithId = list.map(generateId);
	return (
		<>
			{listWithId.map((item) => (
				<div key={item.id}>
					<CommentItem
						text={item.text}
						valueKarma={item.valueKarma}
						child={item.child}
					/>
				</div>
			))}
		</>
	);
}
