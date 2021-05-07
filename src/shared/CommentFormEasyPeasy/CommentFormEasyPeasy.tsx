// пример использования EasyPeasy, ничего лишнего

import React, { ChangeEvent, FormEvent } from "react";
import styles from "./commentformeasypeasy.css";

import { State, useStoreState, useStoreActions, Actions } from "easy-peasy";
import { EasyStoreModel } from "../../store/easyStore";

export function CommentFormEasyPeasy() {
	const commentValue = useStoreState(
		(state: State<EasyStoreModel>) => state.commentValue
	);

	const changeValue = useStoreActions(
		(actions: Actions<EasyStoreModel>) => actions.changeValue
	);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		changeValue(event.target.value);
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log("Новый комментарий: ", commentValue);
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea
				className={styles.input}
				value={commentValue}
				onChange={handleChange}
			/>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	);
}
