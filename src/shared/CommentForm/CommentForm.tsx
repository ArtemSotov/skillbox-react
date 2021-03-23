import React, {
	ChangeEvent,
	FormEvent,
	useEffect,
	useRef,
	useState,
} from "react";
import { useUserData } from "../../hooks/useUserData";
import styles from "./commentform.css";

type ICommentFormProps = {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit: (event: FormEvent) => void;
};

export function CommentForm({ value, onChange, onSubmit }: ICommentFormProps) {
	const { data } = useUserData();

	const [placeHolder, setPlaceHolder] = useState("");

	useEffect(() => {
		setPlaceHolder(
			`${!!data.name ? data.name : "Аноним"}, оставьте ваш комментарий`
		);
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
