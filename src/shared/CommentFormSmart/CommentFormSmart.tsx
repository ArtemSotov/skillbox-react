import React, { ChangeEvent, FormEvent, useState } from "react";
import { useStore } from "react-redux";
import styles from "./commentformsmart.css";

export function CommentFormSmart() {
	const [value, setValue] = useState("");
	const [valueTouched, setValueTouched] = useState(false);
	const [valueError, setValueError] = useState("");

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
	}

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setValue(event?.target.value);
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea
				className={styles.input}
				value={value}
				onChange={handleChange}
				aria-invalid={valueError ? "true" : undefined}
			/>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	);
}
