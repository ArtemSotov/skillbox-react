import { Reducer, ActionCreator, AnyAction } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { SetTokenAction, SET_TOKEN } from "./token/actions";
import { tokenReducer, TokenState } from "./token/reducer";

export type RootState = {
	commentText: string;
	commentItemId: string;
	token: TokenState;
	me: MeState
};

const UPDATE_COMMENT = "UPDATE_COMMENT";
type UpdateCommentAction={
	type: typeof UPDATE_COMMENT;
	text: string;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
	type: UPDATE_COMMENT,
	text,
});


const UPDATE_COMMENT_ITEM_ID = 'UPDATE_COMMENT_ITEM_ID';
type UpdateCommentIdAction={
	type: typeof UPDATE_COMMENT_ITEM_ID;
	text: string;
}

export const updateCommentItemId: ActionCreator<UpdateCommentIdAction> = (text) => ({
	type: UPDATE_COMMENT_ITEM_ID,
	text
});

const initialState: RootState = { 
	commentText: "", 
	commentItemId: "", 
	token: {
		value: ''
	},  
	me: {
		loading: false,
		error: '',
		data: {}
	}
};

type MyAction = UpdateCommentAction | UpdateCommentIdAction | SetTokenAction | MeRequestAction | MeRequestSuccessAction |MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return { ...state, commentText: action.text };
		case UPDATE_COMMENT_ITEM_ID:
			return { ...state, commentItemId: action.text };
		case SET_TOKEN:
			return {...state, token: tokenReducer(state.token, action)}
		case ME_REQUEST:
		case ME_REQUEST_SUCCESS:
		case ME_REQUEST_ERROR:
			return {...state, me: meReducer(state.me, action)};
		default:
			return state;
	}
};