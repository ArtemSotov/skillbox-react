import React from "react";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { KarmaCounter } from "../../../CardsList/Card/Controls/KarmaCounter";
import { AuthorInfo } from "../../../CardsList/Card/TextContent/AuthorInfo";
import { CommentList, IComment } from "../CommentList";
import { CommentMenu } from "../CommentMenu";
import styles from "./commentitem.css";

export function CommentItem({ text, valueKarma, child }: IComment) {
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
					<AuthorInfo author="Михаил Рогов" />
					<br />
					<div>
						<span className={styles.commentText}>{text}</span>
					</div>
					<CommentMenu />
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
