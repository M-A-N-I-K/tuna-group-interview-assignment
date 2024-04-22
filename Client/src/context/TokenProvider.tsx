import React, { createContext, useState } from "react";

export const TokenContext = createContext<{
	token: string;
	saveToken: (newToken: string) => void;
	isAuthenticated: () => boolean;
	logout: () => void;
}>({
	token: "",
	saveToken: () => {},
	isAuthenticated: () => false,
	logout: () => {},
});

interface TokenProviderProps {
	children: React.ReactNode;
}

const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string>(getCookie("token") || "");

	const saveToken = (newToken: string) => {
		setCookie("AUTH", newToken, 1);
		setToken(newToken);
	};

	const isAuthenticated = (): boolean => {
		const token = getCookie("AUTH");
		if (!token) {
			return false;
		}
		return true;
	};

	const logout = () => {
		deleteCookie("AUTH");
		setToken("");
	};

	const setCookie = (name: string, value: string, days: number) => {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = "; expires=" + date.toUTCString();
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	};

	function getCookie(name: string) {
		const nameEQ = name + "=";
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];
			while (cookie.charAt(0) === " ") {
				cookie = cookie.substring(1, cookie.length);
			}
			if (cookie.indexOf(nameEQ) === 0) {
				return cookie.substring(nameEQ.length, cookie.length);
			}
		}
		return null;
	}

	const deleteCookie = (name: string) => {
		document.cookie = name + "=; Max-Age=-99999999;";
	};

	return (
		<TokenContext.Provider
			value={{ token, saveToken, isAuthenticated, logout }}
		>
			{children}
		</TokenContext.Provider>
	);
};

export default TokenProvider;
