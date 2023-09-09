import { HTMLState } from "./";

type HTMLActionType =
	| {
			type: "[HTML] - HTML Editor";
			payload: string;
	  }
	| {
			type: "[CSS] - CSS Editor";
			payload: string;
	  };

export const htmlReducer = (
	state: HTMLState,
	action: HTMLActionType,
): HTMLState => {
	switch (action.type) {
		case "[HTML] - HTML Editor":
			return {
				...state,
				htmlState: action.payload,
			};

		case "[CSS] - CSS Editor":
			return {
				...state,
				cssState: action.payload,
			};

		default:
			return state;
	}
};
