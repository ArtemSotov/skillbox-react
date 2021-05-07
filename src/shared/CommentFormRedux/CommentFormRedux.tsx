// пример использования Redux, ничего лишнего

import React, {
	ChangeEvent,
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, updateComment } from "../../store/reducer";
import styles from "./commentformredux.css";

export function CommentFormRedux() {
	const value = useSelector<RootState, string>((state) => state.commentText);
	const dispatch = useDispatch();

	const [placeHolder, setPlaceHolder] = useState("");

	useEffect(() => {
		setPlaceHolder(`Привет от Redux`);
	}, [name]);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		//onChange(event.target.value);
		dispatch(updateComment(event.target.value));
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log("Новый комментарий: ", value);
	}

	const ref = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea
				className={styles.input}
				value={value}
				onChange={handleChange}
				placeholder={placeHolder}
				ref={ref}
			/>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	);
}
