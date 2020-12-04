import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
}



export function Dropdown({ button, children, isOpen, onClose = noop, onOpen = noop }: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
	React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
	const handleOpen = () => {
		console.log('Dropdown: ', isOpen);

		if (isOpen === undefined || isOpen === false) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	}

	return (
		<div className={styles.container}>
			<div onClick={handleOpen}>
				{button}
			</div>
			{isDropdownOpen && (
				<div className={styles.listContainer}>
					<div className={styles.list} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
						{children}
					</div>
				</div>
			)}
		</div>
	);
}
