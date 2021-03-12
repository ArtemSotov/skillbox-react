import React, {
	ChangeEvent,
	FormEvent,
	useContext,
	useRef,
	useState,
} from "react";
import { commentContext } from "../context/commentContext";
import styles from "./commentform.css";

export function CommentForm() {
	const { value, onChange } = useContext(commentContext);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		// console.log("tatata:", event.target.value);
		onChange(event.target.value);
	}

	function handleSubmit(event: FormEvent) {
		console.log("run handleSubmit from CommentForm");

		event.preventDefault();
		console.log("Новый комментарий: ", value);
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea
				className={styles.input}
				value={value}
				onChange={handleChange}
			/>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	);
}
