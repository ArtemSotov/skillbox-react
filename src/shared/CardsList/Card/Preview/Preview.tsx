import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
	previewUrl?: string;
}

export function Preview(props: IPreviewProps) {
	const { previewUrl = "" } = props;
	console.log("Preview previewUrl: ", previewUrl);
	return (
		<div className={styles.preview}>
			<img className={styles.previewImg} src={previewUrl} />
			<br />
		</div>
	);
}
