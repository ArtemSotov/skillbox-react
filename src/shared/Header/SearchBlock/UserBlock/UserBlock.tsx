import React from "react";
import { Break } from "../../../Break";
import { IconAnon } from "../../../Icons";
import { EColor, Text } from "../../../Text";
import styles from "./userblock.css";

interface IUserBlockProps {
	avatarSrc?: string;
	username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
	return (
		<a
			href="https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&duration=DURATION&scope=SCOPE_STRING"
			className={styles.userBox}
		>
			<div className={styles.avatarBox}>
				{avatarSrc ? (
					<img
						src={avatarSrc}
						alt="user avatar"
						className={styles.avatarImage}
					/>
				) : (
					<IconAnon />
				)}
			</div>

			<div className={styles.username}>
				<Break size={12} />
				<Text size={20} color={EColor.black}>
					{username}
				</Text>
			</div>
		</a>
	);
}
