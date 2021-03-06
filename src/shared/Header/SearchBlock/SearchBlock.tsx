import React, { useContext } from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";
import { useUserData } from "../../../hooks/useUserData";

export function SearchBlock() {
	const { data, loading } = useUserData();
	return (
		<div className={styles.searchBlock}>
			<UserBlock
				username={data.name}
				avatarSrc={data.iconImg}
				loading={loading}
			/>
		</div>
	);
}
