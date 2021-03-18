import React, { useContext } from "react";
import styles from "./commentmenu.css";
import classNames from "classnames";
import { Icon, EIcons } from "../../../Icon";
import { EColor, Text } from "../../../Text";
import { Break } from "../../../Break";
import { useDispatch, useSelector } from "react-redux";
import {
	RootState,
	updateComment,
	updateCommentItemId,
} from "../../../../store";

interface ICommentMenuProps {
	author?: string;
	id: string;
}

export function CommentMenu({ author, id }: ICommentMenuProps) {
	const itemId = useSelector<RootState, string>((state) => state.commentItemId);
	const dispatch = useDispatch();

	const handleAnswer = () => {
		if (itemId !== id) {
			dispatch(updateCommentItemId(id));
			dispatch(updateComment(""));
		} else {
			dispatch(updateCommentItemId(""));
		}
	};

	return (
		<ul className={styles.menuItemsList}>
			<li
				className={classNames(styles.menuItem, styles.hidden_mobile)}
				onClick={handleAnswer}
			>
				<Icon name={EIcons.comment} />
				<Break inline={true} size={6} />
				<Text mobileSize={12} size={14} color={EColor.grey99}>
					Ответить
				</Text>
			</li>
			<li className={classNames(styles.menuItem, styles.hidden_mobile)}>
				<Icon name={EIcons.share} />
				<Break inline={true} size={6} />
				<Text mobileSize={12} size={14} color={EColor.grey99}>
					Поделиться
				</Text>
			</li>
			<li className={classNames(styles.menuItem)}>
				<Icon name={EIcons.complain} />
				<Break inline={true} size={6} />
				<Text mobileSize={12} size={14} color={EColor.grey99}>
					Пожаловаться
				</Text>
			</li>
		</ul>
	);
}
