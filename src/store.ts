import { Reducer, ActionCreator, AnyAction } from "redux";

export type RootState = {
	commentText: string;
	commentItemId: string;
};
const initialState: RootState = { commentText: "", commentItemId:"" };
const UPDATE_COMMENT = "UPDATE_COMMENT";
const UPDATE_COMMENT_ITEM_ID = 'UPDATE_COMMENT_ITEM_ID';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
	type: UPDATE_COMMENT,
	text,
});
export const updateCommentItemId: ActionCreator<AnyAction> = (text) => ({
	type: UPDATE_COMMENT_ITEM_ID,
	text
});
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return { ...state, commentText: action.text };
		case UPDATE_COMMENT_ITEM_ID:
			return {...state, commentItemId: action.text};
		default:
			return state;
	}
};