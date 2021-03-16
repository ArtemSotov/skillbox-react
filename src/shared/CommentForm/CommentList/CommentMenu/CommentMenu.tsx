import React, { useContext } from "react";
import styles from "./commentmenu.css";
import classNames from "classnames";
import { Icon, EIcons } from "../../../Icon";
import { EColor, Text } from "../../../Text";
import { Break } from "../../../Break";
import { commentContext } from "../../../context/commentContext";

interface ICommentMenuProps {
	author?: string;
	id: string;
}

export function CommentMenu({ author, id }: ICommentMenuProps) {
	const { value, onChange, itemId, setItemId } = useContext(commentContext);

	const handleAnswer = () => {
		//console.log("author: ", author);
		onChange("author: " + author);
		if (itemId !== id) {
			setItemId(id);
		} else {
			setItemId("");
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
