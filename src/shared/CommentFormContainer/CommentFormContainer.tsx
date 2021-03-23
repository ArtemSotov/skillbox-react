import React, {
	ChangeEvent,
	FormEvent,
	useEffect,
	useRef,
	useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	RootState,
	updateComment,
	updateCommentItemId,
} from "../../store/reducer";
import { CommentForm } from "../CommentForm";
import { useUserData } from "../../hooks/useUserData";

export function CommentFormContainer() {
	// долгий путь
	// const store = useStore<RootState>();
	// const value = store.getState().commentText;

	// короткий путь, следующая строка аналогичен предыдущим двум строчкам
	const value = useSelector<RootState, string>((state) => state.commentText);
	const dispatch = useDispatch();

	const { data } = useUserData();

	const [placeHolder, setPlaceHolder] = useState("");

	useEffect(() => {
		setPlaceHolder(
			`${!!data.name ? data.name : "Аноним"}, оставьте ваш комментарий`
		);
	}, [data.name]);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		//onChange(event.target.value);
		dispatch(updateComment(event.target.value));
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log("Новый комментарий: ", value);
		dispatch(updateCommentItemId(""));
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
