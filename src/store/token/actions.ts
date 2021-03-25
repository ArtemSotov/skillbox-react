import { ActionCreator } from "redux";
import { TypeThunk } from "../reducer";

export const TOKEN_UNDEFINED = 'TOKEN_UNDEFINED';
export type TokenUndefinedAction = {
	type: typeof TOKEN_UNDEFINED;
}
export const tokenUndefined: ActionCreator<TokenUndefinedAction> = ()=>({
	type: TOKEN_UNDEFINED,
});


export const SAVE_TOKEN = 'SAVE_TOKEN';
export type SaveTokenAction = {
	type: typeof SAVE_TOKEN;
	token: string;
}

export const saveToken: ActionCreator<SaveTokenAction> = (token) => ({
	type: SAVE_TOKEN,
	token
});

export const thunkSaveToken = (): TypeThunk => (dispatch) => {
	if (window.__token__!=='undefined') {
		console.log('dispatch(saveToken(window.__token__));');
		dispatch(saveToken(window.__token__));
	} else{
		dispatch(tokenUndefined());
	}
}