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
			{/* <img
				className={styles.previewImg}
				//src="https://cdn.dribbble.com/users/44324/screenshots/14489730/media/830a3276fe1e07c8f23f5e112c72c5fb.png"
				//src="https://external-preview.redd.it/ZbrXwT5ECy9xffhOTtByNZIWoasL7lvhdKmUat87yKc.jpg?auto=webp&amp;s=ecad8d62f6627429630d2a34f8dbef394aea47b0"
				src={previewUrl}
			/>
			<br /> */}
			<img className={styles.previewImg} src="https://external-preview.redd.it/ZbrXwT5ECy9xffhOTtByNZIWoasL7lvhdKmUat87yKc.jpg?auto=webp&amp;s=ecad8d62f6627429630d2a34f8dbef394aea47b0" />
		</div>
	);
}
