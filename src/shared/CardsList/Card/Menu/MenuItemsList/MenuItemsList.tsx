import React from "react";
import { EIcons, Icon } from "../../../../Icon";
import { EColor, Text } from "../../../../Text";
import styles from "./menuitemslist.css";

interface IMenuItemsListProps {
	postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
	return (
		<ul className={styles.menuItemsList}>
			<li className={styles.menuItem}>
				<Icon name={EIcons.comment} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Комментарии
				</Text>
			</li>
			<li className={styles.divider} />
			<li className={styles.menuItem}>
				<Icon name={EIcons.share} />
				<Text
					mobileSize={12}
					size={14}
					color={EColor.grey66}
					colorHover={EColor.orange}
				>
					Поделиться
				</Text>
			</li>
			<li className={styles.divider} />
			<li className={styles.menuItem}>
				<Icon name={EIcons.hidden} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Скрыть
				</Text>
			</li>
			<li className={styles.divider} />
			<li className={styles.menuItem}>
				<Icon name={EIcons.save} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Сохранить
				</Text>
			</li>
			<li className={styles.divider} />
			<li className={styles.menuItem}>
				<Icon name={EIcons.complain} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Пожаловаться
				</Text>
			</li>
		</ul>
	);
}
