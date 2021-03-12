import React, { useEffect, useState } from "react";
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
					console.log("open from Title");

					setIsModelOpened(true);
				}}
			>
				{title}
			</a>

			{isModalOpened && (
				<Post
					onClose={() => {
						console.log("close from Title");

						setIsModelOpened(false);
					}}
				/>
			)}
		</h2>
	);
}
