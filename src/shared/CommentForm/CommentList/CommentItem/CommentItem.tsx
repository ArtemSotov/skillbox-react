import React, { useContext } from "react";
import { CommentForm } from "../..";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { KarmaCounter } from "../../../CardsList/Card/Controls/KarmaCounter";
import { AuthorInfo } from "../../../CardsList/Card/TextContent/AuthorInfo";
import { commentContext } from "../../../context/commentContext";
import { CommentList, IComment } from "../CommentList";
import { CommentMenu } from "../CommentMenu";
import styles from "./commentitem.css";

export function CommentItem({ author, text, valueKarma, child, id }: IComment) {
	const { itemId } = useContext(commentContext);
	return (
		<div className={styles.commentMain}>
			<div className={styles.leftBorder}>
				<div className={styles.divKarma}>
					<KarmaCounter value={valueKarma} />
				</div>

				<div className={styles.divBorder} />
			</div>
			<div className={styles.commentGroup}>
				<div className={styles.commentItem}>
					<AuthorInfo author={author} />
					<br />
					<div>
						<span className={styles.commentText}>{text}</span>
					</div>
					<span>{id}</span>
					<CommentMenu author={author} id={id} />
					{id === itemId && <CommentForm />}
				</div>
				{!!child && (
					<div className={styles.commentChild}>
						<CommentList list={child} />
					</div>
				)}
			</div>
		</div>
	);
}
