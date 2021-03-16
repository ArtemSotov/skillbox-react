import React from "react";

type CommentContextType = {
	value: string;
	itemId: string;
	onChange: (value: string) => void;
	setItemId: (value: string) => void;
}

export const commentContext = React.createContext<CommentContextType>({
	value: '',
	itemId:'',
	onChange: () => { },
	setItemId: () => { }
});