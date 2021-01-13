import React from "react";
import { EIcons, Icon } from "../../../../Icon";
import { EColor, Text } from "../../../../Text";
import styles from "./menuitemslist.css";
import classNames from "classnames";

interface IMenuItemsListProps {
	postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
	return (
		<ul className={styles.menuItemsList}>
			<li className={classNames(styles.menuItem, styles.hidden_mobile)}>
				<Icon name={EIcons.comment} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Комментарии
				</Text>
			</li>
			<li className={classNames(styles.divider, styles.hidden_mobile)} />
			<li className={classNames(styles.menuItem, styles.hidden_mobile)}>
				<Icon name={EIcons.share} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Поделиться
				</Text>
			</li>
			<li className={classNames(styles.divider, styles.hidden_mobile)} />
			<li className={classNames(styles.menuItem)}>
				<Icon name={EIcons.hidden} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Скрыть
				</Text>
			</li>
			<li className={classNames(styles.divider)} />
			<li className={classNames(styles.menuItem, styles.hidden_mobile)}>
				<Icon name={EIcons.save} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Сохранить
				</Text>
			</li>
			<li className={classNames(styles.divider, styles.hidden_mobile)} />
			<li className={classNames(styles.menuItem)}>
				<Icon name={EIcons.complain} />
				<Text mobileSize={12} size={14} color={EColor.grey66}>
					Пожаловаться
				</Text>
			</li>
		</ul>
	);
}
