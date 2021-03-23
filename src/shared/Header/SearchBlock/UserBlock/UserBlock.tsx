import React from "react";
import { Break } from "../../../Break";
import { EIcons, Icon } from "../../../Icon";
import { EColor, Text } from "../../../Text";
import styles from "./userblock.css";

interface IUserBlockProps {
	avatarSrc?: string;
	username?: string;
	loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
	//const url = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.client_id}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`;
	const url = `https://www.reddit.com/api/v1/authorize?client_id=XE2-sAxcBzewcw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`;
	return (
		<a href={url} className={styles.userBox}>
			<div className={styles.avatarBox}>
				{avatarSrc ? (
					<img
						src={avatarSrc}
						alt="user avatar"
						className={styles.avatarImage}
					/>
				) : (
					<Icon name={EIcons.anonim} />
				)}
			</div>

			<div className={styles.username}>
				<Break size={12} />
				{loading ? (
					<Text size={20} color={EColor.grey99}>
						Загрузка...
					</Text>
				) : (
					<Text size={20} color={username ? EColor.black : EColor.grey99}>
						{username || "Аноним"}
					</Text>
				)}
			</div>
		</a>
	);
}
