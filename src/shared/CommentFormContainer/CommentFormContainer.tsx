import React, {
	ChangeEvent,
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { commentContext } from "../context/commentContext";
import { userContext } from "../context/userContext";
import styles from "./commentform.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, updateComment } from "../../store";
import { CommentForm } from "../CommentForm";

export function CommentFormContainer() {
	// долгий путь
	// const store = useStore<RootState>();
	// const value = store.getState().commentText;

	// короткий путь, следующая строка аналогичен предыдущим двум строчкам
	const value = useSelector<RootState, string>((state) => state.commentText);
	const dispatch = useDispatch();

	const { name } = useContext(userContext);
	const { setItemId } = useContext(commentContext);

	const [placeHolder, setPlaceHolder] = useState("");

	useEffect(() => {
		setPlaceHolder(`${!!name ? name : "Аноним"}, оставьте ваш комментарий`);
	}, [name]);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		//onChange(event.target.value);
		dispatch(updateComment(event.target.value));
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log("Новый комментарий: ", value);
		setItemId("");
	}

	const ref = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<CommentForm
			value={value}
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
	);
}
