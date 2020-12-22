import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../Icons';
import styles from './menuitemslist.css';


interface IMenuItemsListProps{
	postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
	return (
	<ul className={styles.menuItemsList}>
		<li className={styles.menuItem}>
			<BlockIcon />
			Скрыть
		</li>
		<li className={styles.menuItem}>
			<WarningIcon />
			Пожаловаться
		</li>
	</ul>
  );
}
