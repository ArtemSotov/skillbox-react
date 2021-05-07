import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styles from "./commentformformik.css";

export function CommentFormFormik() {
	type TValues = {
		comment: string;
	};
	type TErrors = Partial<TValues>;

	const initialValues: TValues = {
		comment: "",
	};

	const onSubmit = (values: TValues) => {
		console.log("Введен комментарий ", values.comment);
		alert("Форма отправлена");
	};

	const validate = (values: TValues): TErrors => {
		let errors: TErrors = {};
		if (values.comment.length <= 3) {
			errors.comment = "Введите больше 3х символов";
		}
		return errors;
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validate={validate}
			validateOnBlur={false}
			validateOnChange={false}
		>
			<Form className={styles.form}>
				<Field name="comment" as="textarea" className={styles.input} />
				<ErrorMessage name="comment" />
				<button type="submit" className={styles.button}>
					Комментировать
				</button>
			</Form>
		</Formik>
	);
}
