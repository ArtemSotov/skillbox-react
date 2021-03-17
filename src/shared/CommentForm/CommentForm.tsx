import React, {
	ChangeEvent,
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { userContext } from "../context/userContext";
import styles from "./commentform.css";

type ICommentFormProps = {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (event: FormEvent) => void;
};

export function CommentForm({ value, onChange, onSubmit }: ICommentFormProps) {
	const { name } = useContext(userContext);

	const [placeHolder, setPlaceHolder] = useState("");

	useEffect(() => {
		setPlaceHolder(`${!!name ? name : "Аноним"}, оставьте ваш комментарий`);
	}, [name]);

	const ref = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<textarea
				className={styles.input}
				value={value}
				onChange={onChange}
				placeholder={placeHolder}
				ref={ref}
			/>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	);
}
