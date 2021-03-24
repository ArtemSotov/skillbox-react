import { Reducer } from "react";
import { SetTokenAction, SET_TOKEN } from "./actions";

export type TokenState={
	value: string;
}

export const tokenReducer: Reducer<TokenState, SetTokenAction> = (state, action) => {
	switch (action.type){
		case SET_TOKEN:
			return {
				...state,
				value: action.token
			}
		default:
			return state;
	}
}