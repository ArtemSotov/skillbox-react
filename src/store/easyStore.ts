import { createStore, Action,action } from "easy-peasy";

export interface EasyStoreModel{
	commentValue: string;
	changeValue: Action<EasyStoreModel, string>;
}

export const easyStore = createStore<EasyStoreModel>({
	commentValue: "Привет от Easy-Peasy",
	changeValue: action((state, value) => {
		state.commentValue=value;
	})
});