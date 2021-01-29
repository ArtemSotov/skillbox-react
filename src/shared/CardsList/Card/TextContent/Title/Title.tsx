import React, { useState } from "react";
import { Post } from "../../../../Post";
import styles from "./title.css";

interface ITitleProps {
	title?: string;
}

export function Title({ title }: ITitleProps) {
	const [isModalOpened, setIsModelOpened] = useState(false);

	return (
		<h2 className={styles.title}>
			<a
				href="#post-url"
				className={styles.postLink}
				onClick={() => {
					setIsModelOpened(true);
				}}
			>
				{title}
			</a>

			{isModalOpened && (
				<Post
					onClose={() => {
						setIsModelOpened(false);
					}}
				/>
			)}
		</h2>
	);
}
