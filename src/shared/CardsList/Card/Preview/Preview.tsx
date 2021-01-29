import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
	previewUrl?: string;
}

export function Preview(props: IPreviewProps) {
	const { previewUrl = "" } = props;
	return (
		<div className={styles.preview}>
			<img className={styles.previewImg} src={previewUrl} />
			<br />
		</div>
	);
}
