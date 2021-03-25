import { Reducer } from "react";
import { SaveTokenAction, SAVE_TOKEN } from "./actions";

export type TokenState={
	value: string;
}

export const tokenReducer: Reducer<TokenState, SaveTokenAction> = (state, action) => {
	switch (action.type){
		case SAVE_TOKEN:
			return {
				...state,
				value: action.token
			}
		default:
			return state;
	}
}