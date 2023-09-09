import { createContext } from "react";

interface ContextProps {
	htmlState: string;
	cssState: string;

	htmlEditor: (text: string) => void;
	cssEditor: (text: string) => void;
}

export const HTMLContext = createContext({} as ContextProps);
