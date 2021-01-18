import React, { CSSProperties } from "react";
import {
	BlockIcon,
	CommentIcon,
	IconAnon,
	IconEmpty,
	MenuIcon,
	SaveIcon,
	ShareIcon,
	WarningIcon,
} from "../Icons";
import styles from "./icon.css";
import classNames from "classnames";

export enum EIcons {
	none,
	comment,
	share,
	hidden,
	save,
	complain,
	anonim,
	menu,
}

type ISizes =
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30;

interface IIconProps {
	name?: EIcons;
	size?: ISizes;
}

export function Icon(props: IIconProps) {
	const { name = EIcons.none, size } = props;
	let icon: JSX.Element = <IconEmpty />;
	switch (name) {
		case EIcons.hidden:
			icon = <BlockIcon />;
			break;
		case EIcons.complain:
			icon = <WarningIcon />;
			break;
		case EIcons.comment:
			icon = <CommentIcon />;
			break;
		case EIcons.share:
			icon = <ShareIcon />;
			break;
		case EIcons.save:
			icon = <SaveIcon />;
			break;
		case EIcons.anonim:
			icon = <IconAnon />;
			break;
		case EIcons.menu:
			icon = <MenuIcon />;
			break;
	}
	const classes = classNames(styles.divIcon, { [styles[`s${size}`]]: size });
	return <div className={classes}>{icon}</div>;
}
