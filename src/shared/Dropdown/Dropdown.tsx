import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { noop } from "../../utils/js/noop";
import { preventDefault } from "../../utils/react/preventDefault";
import styles from "./dropdown.css";

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
}

export function Dropdown({
	button,
	children,
	isOpen,
	onClose = noop,
	onOpen = noop,
}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
	React.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [
		isDropdownOpen,
	]);
	const handleOpen = () => {
		//	if (isOpen === undefined || isOpen === false) {
		setIsDropdownOpen(!isDropdownOpen);
		//	}
	};

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			const tmp =
				event.target instanceof Node && !ref.current?.contains(event.target);
			console.log("tmp: ", tmp);

			// if (
			// 	event.target instanceof Node &&
			// 	!ref.current?.contains(event.target)
			// ) {
			// 	//props.onClose?.();
			// 	console.log("clicked");
			// }
		}
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	// const node = document.querySelector("#modal_dropdownList");
	// if (!node) return null;
	return (
		<div className={styles.container}>
			<div onClick={handleOpen}>{button}</div>
			{isDropdownOpen && (
				<div className={styles.listContainer} ref={ref}>
					<div
						className={styles.list}
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						{children}
					</div>
				</div>
			)}
		</div>
	);
}
