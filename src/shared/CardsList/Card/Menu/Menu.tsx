import React from "react";
import { merge } from "../../../../utils/js/merge";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Dropdown } from "../../../Dropdown";
import { GenericList, IItem } from "../../../GenericList";
import { EColor, Text } from "../../../Text";
import styles from "./menu.css";
import { MenuButton } from "./MenuButton";
import { MenuItemsList } from "./MenuItemsList";

const MenuList: IItem[] = [
	{
		text: "Комментарии",
		onClick: () => {
			console.log("Комментарии");
		},
	},
	{
		text: "Поделиться",
		onClick: () => {
			console.log("Поделиться");
		},
	},
	{
		text: "Скрыть",
		onClick: () => {
			console.log("Скрыть");
		},
	},
	{
		text: "Сохранить",
		onClick: () => {
			console.log("Сохранить");
		},
	},
	{
		text: "Пожаловаться",
		onClick: () => {
			console.log("Пожаловаться");
		},
	},
	{
		text: "Закрыть",
		onClick: () => {
			console.log("Закрыть");
		},
	},
].map(generateId);

export function Menu() {
	return (
		<div className={styles.menu}>
			<Dropdown isOpen={false} button={<MenuButton />}>
				<div className={styles.dropdown}>
					<MenuItemsList postId={"123"} />
					<button className={styles.closeButton}>
						<Text mobileSize={12} size={14} color={EColor.grey66}>
							Закрыть
						</Text>
					</button>
				</div>
			</Dropdown>
			{/* <Dropdown
				// onClose={() => console.log('closed')}
				// onOpen={() => console.log('opened')}
				isOpen={false}
				//button={<button>Test</button>}
				button={<MenuButton />}
			>
				<GenericList list={MenuList.map(merge({ As: "a" as "a", className: "menuItem" }))} />
			</Dropdown>{" "} */}
		</div>
	);
}
