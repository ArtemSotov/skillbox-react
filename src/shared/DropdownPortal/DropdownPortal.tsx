import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { getOffsetSum } from "../../utils/js/coord";
import { noop } from "../../utils/js/noop";
import { preventDefault } from "../../utils/react/preventDefault";
import styles from "./dropdownportal.css";

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	parent: React.RefObject<HTMLDivElement>;
}

export function DropdownPortal({ button, children, isOpen, onClose = noop, onOpen = noop, parent }: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
	React.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);
	const handleOpen = () => {
		//	if (isOpen === undefined || isOpen === false) {
		setIsDropdownOpen(!isDropdownOpen);
		//	}
	};

	// const ref = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	function handleClick(event: MouseEvent) {
	// 		// if (event.target instanceof Node && !ref.current?.contains(event.target)) {
	// 		// 	// setIsDropdownOpen(false);

	// 		// }
	// 		console.log(isDropdownOpen);
	// 	}
	// 	document.addEventListener("click", handleClick);
	// 	return () => {
	// 		document.removeEventListener("click", handleClick);
	// 	};
	// }, []);

	const node = document.querySelector("#modal_dropdownList");
	if (!node) return null;

	const [style, setStyle] = useState<React.CSSProperties>();

	useEffect(() => {
		const coord = getOffsetSum(parent.current);
		setStyle({
			position: "absolute",
			top: coord.top + "px",
			left: coord.left + "px",
		});
	}, []);

	return ReactDOM.createPortal(
		<div className={styles.container} style={style}>
			<div onClick={handleOpen}>{button}</div>
			{isDropdownOpen && (
				<div className={styles.listContainer}>
					<div className={styles.list} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
						{children}
					</div>
				</div>
			)}
		</div>,
		node
	);
}
