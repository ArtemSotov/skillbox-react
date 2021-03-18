import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { KarmaCounter } from "../../../CardsList/Card/Controls/KarmaCounter";
import { AuthorInfo } from "../../../CardsList/Card/TextContent/AuthorInfo";
import { CommentFormContainer } from "../../../CommentFormContainer";
import { CommentList, IComment } from "../CommentList";
import { CommentMenu } from "../CommentMenu";
import styles from "./commentitem.css";

export function CommentItem({ author, text, valueKarma, child, id }: IComment) {
	const itemId = useSelector<RootState, string>((state) => state.commentItemId);

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
					<CommentMenu author={author} id={id} />
					{id === itemId && <CommentFormContainer />}
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
