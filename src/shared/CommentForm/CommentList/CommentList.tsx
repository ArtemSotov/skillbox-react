import React from "react";
import { generateId } from "../../../utils/react/generateRandomIndex";
import { KarmaCounter } from "../../CardsList/Card/Controls/KarmaCounter";
import { CommentItem } from "./CommentItem";
import styles from "./commentlist.css";

export interface IComment {
	author: string;
	text: string;
	valueKarma?: number;
	child?: IComment[];
	id?: string;
}

interface ICommentListProps {
	list: IComment[];
}

export function CommentList({ list }: ICommentListProps) {
	return (
		<>
			{list.map((item) => (
				<div key={item.id}>
					<CommentItem author={item.author} text={item.text} valueKarma={item.valueKarma} child={item.child} />
				</div>
			))}
		</>
	);
}
