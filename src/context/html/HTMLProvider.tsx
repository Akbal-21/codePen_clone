import { FC, useReducer } from "react";
import { HTMLContext, htmlReducer } from "./";

export interface HTMLState {
	htmlState: string;
	cssState: string;
}

const HTML_INITIAL_STATE: HTMLState = {
	htmlState: "",
	cssState: "",
};

interface Props {
	children?: JSX.Element | JSX.Element[];
}

export const HTMLProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(htmlReducer, HTML_INITIAL_STATE);

	const htmlEditor = (text: string) => {
		dispatch({ type: "[HTML] - HTML Editor", payload: text });
	};

	const cssEditor = (text: string) => {
		dispatch({ type: "[CSS] - CSS Editor", payload: text });
	};

	return (
		<HTMLContext.Provider
			value={{
				...state,

				htmlEditor,
				cssEditor,
			}}
		>
			{children}
		</HTMLContext.Provider>
	);
};
