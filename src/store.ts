import { Reducer, ActionCreator, AnyAction } from "redux";

export type RootState = {
	commentText: string;
	commentItemId: string;
	token: string;
};


export function useToken() {
	const [token, setToken] = useState("");

	useEffect(() => {
		if (window.__token__) {
			setToken(window.__token__);
		}
	}, []);

	return [token];
}


const initialState: RootState = { commentText: "", commentItemId:"", token: '' };
const UPDATE_COMMENT = "UPDATE_COMMENT";
const UPDATE_COMMENT_ITEM_ID = 'UPDATE_COMMENT_ITEM_ID';
const SET_TOKEN = 'SET_TOKEN';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
	type: UPDATE_COMMENT,
	text,
});

export const updateCommentItemId: ActionCreator<AnyAction> = (text) => ({
	type: UPDATE_COMMENT_ITEM_ID,
	text
});

export const setToken:ActionCreator<AnyAction> = (text)=>({
	type: SET_TOKEN,
	text
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return { ...state, commentText: action.text };
		case UPDATE_COMMENT_ITEM_ID:
			return {...state, commentItemId: action.text};
		case SET_TOKEN:
			return{...state, token: action.text};
		default:
			return state;
	}
};