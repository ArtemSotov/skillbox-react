import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./commentformformik.css";

export function CommentFormFormik() {
	// const [value, setValue] = useState("");
	// const [touched, setTouched] = useState(false);
	// const [valueError, setValueError] = useState("");

	// function handleSubmit(event: FormEvent) {
	// 	event.preventDefault();
	// 	setTouched(true);

	// 	setValueError(validateValue());

	// 	const isFormValid = !validateValue();

	// 	if (!isFormValid) return;
	// 	alert("Форма отправлена");
	// }

	// function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
	// 	setValue(event?.target.value);
	// }

	// function validateValue() {
	// 	//if (value.length <= 3) return "Ошибка. Введите больше 3х символов";
	// 	return "";
	// }

	const formik = useFormik({
		initialValues: {
			comment: "",
		},
		onSubmit: () => {
			alert("Форма отправлена");
		},
	});

	console.log("Form values: ", formik.values);

	return (
		<form className={styles.form} onSubmit={formik.handleSubmit}>
			<textarea
				name="comment"
				className={styles.input}
				value={formik.values.comment}
				onChange={formik.handleChange}
			/>

			{/* {touched && valueError && <div>{valueError}</div>} */}
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	);
}
