import { ArrayAtributes } from "@/interface";
import atributres from "@/json/atributes.json";

export const lastWord = (
	e: EventTarget & HTMLTextAreaElement,
	text: string,
): string | undefined => {
	const cursorPosition = e.selectionStart;
	const words = text.split(/\s+/);
	for (let i = 0; i < words.length; i++) {
		const wordStart = text.indexOf(words[i]);
		const wordEnd = wordStart + words[i].length;

		if (wordEnd >= cursorPosition) {
			const sanitizedWord = words[i - 1]?.replace("<", "");
			return sanitizedWord;
		}
	}
	return;
};

export const autocompleteAtributes = (
	wordBeforeCursor: string,
): ArrayAtributes[] => {
	const atributelist: ArrayAtributes[] = [];

	const data = Object.keys(atributres).indexOf(wordBeforeCursor);
	const array = Object.values(atributres);

	for (const key in array[data]) {
		atributelist.push({ key: key, value: key });
	}
	return atributelist;
};
