import React from "react";
import { EIcons, Icon } from "../../../../Icon";
import styles from "./menubutton.css";

export function MenuButton() {
	return (
		<button className={styles.menuButton}>
			<Icon name={EIcons.menu} />
		</button>
	);
}
