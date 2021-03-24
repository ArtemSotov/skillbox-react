import { useEffect } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";


export const CHECK_TOKEN = 'CHECK_TOKEN';
export type TokenAction = {
	type: typeof CHECK_TOKEN;
}
export const checkToken: ActionCreator<TokenAction> = () => ({
	type: CHECK_TOKEN
});

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
	type: typeof SET_TOKEN;
	token: string;
}

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
	type: SET_TOKEN,
	token
});

export const tokenThunk = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
	//console.log('aaa');
	//dispatch(checkToken());
	// if (window.__token__) {
	// 	dispatch(setToken(window.__token__));
	// }
}