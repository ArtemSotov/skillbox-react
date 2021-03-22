import { Reducer } from "react";
import { MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction, ME_REQUEST_ERROR, ME_REQUEST } from "./actions";

export type MeState={
	loading: boolean;
	error: string
}
type MeActions = MeRequestAction | MeRequestSuccessAction |MeRequestErrorAction;
export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
	switch (action.type){
		case ME_REQUEST:
			return {
				...state, 
				loading: true
			};
		case ME_REQUEST_ERROR:
			return {
				...state, 
				error: action.error
			};
		default:
			return state;
	}
}