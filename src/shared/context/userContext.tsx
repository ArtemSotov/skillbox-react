import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUserData } from "../../hooks/useUserData";
import { setToken } from "../../store";

export interface IUserContextData {
	name?: string;
	iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.__token__) {
			dispatch(setToken(window.__token__));
		}
	}, []);

	const [data] = useUserData();

	return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
