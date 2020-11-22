// занятие 5.1

import React from "react";
import { getChecked, getValue, pickFromSyntheticEvent } from "../utils/react/pickFromSyntheticEvent";

// const withIdKey = withKey('id');

// function Feed(props: { blocks: IBlockProps[] }) {
// 	return (
// 		<div>
// 			{props.blocks.map(withIdKey(Block))}
// 		</div>
// 	)
// }

interface IBlockProps {
	title: string;
	id: string;
}

function Block(props: IBlockProps) {
	return (
		<div>{props.title}</div>
	)
}

// function withKey(key?: string) {
// 	return <E, T extends React.ComponentType<E>>(component: T) =>
// 		(props: E, index: number) =>
// 			React.createElement(
// 				component,
// 				{ ...props, key: key ? props[key as keyof E] : index },
// 				[],
// 			);
// }

////

//function Input(props: {onChange: (value: string) => void, value: string}) {
function Input({ onChange, value }: { onChange: (value: string) => void, value: string }) {
	return (
		//<input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
		<input value={value} onChange={getValue(onChange)} />
	)
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
	return (
		// <input type="checkbox" value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
		<input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
	)
}




