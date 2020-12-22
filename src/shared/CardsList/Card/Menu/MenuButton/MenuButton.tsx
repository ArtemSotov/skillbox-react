import React from 'react';
import { MenuIcon } from '../../../../Icons';
import styles from './menubutton.css';

export function MenuButton() {
	return (
		<button className={styles.menuButton}>
			<MenuIcon />
		</button>
	);
}
