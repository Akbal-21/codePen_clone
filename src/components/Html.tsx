import { HTMLContext } from "@/context";
import { autocompleteAtributes, lastWord } from "@/functions";
import { ArrayAtributes, labelsType } from "@/interface";
import atributres from "@/json/atributes.json";
import labels from "@/json/labels.json";
import { useContext, useEffect, useState } from "react";

export const HtmlPage = () => {
	const [wordBeforeCursor, setWordBeforeCursor] = useState("");
	const getLabels: labelsType[] = labels;

	const { htmlEditor, htmlState } = useContext(HTMLContext);

	const hangleClick = (e: string) => {
		if (htmlState.length === 0) {
			if (e === "image") {
				htmlEditor(`${htmlState}<${e}/>`);
				return;
			}
			htmlEditor(`${htmlState}<${e}></${e}>`);
			return;
		}
		if (e === "image") {
			htmlEditor(`${htmlState}<${e}/>`);
		}
		htmlEditor(`${htmlState}\n<${e}></${e}>`);
	};

	const labelsList = labels.map((label) => ({
		key: label.text,
		value: label.label + label.labelfinis,
	}));

	useEffect(() => {
		import("tributejs").then((Tribute) => {
			const textarea: HTMLElement | null =
				document.getElementById("my-textarea");
			if (wordBeforeCursor in atributres) {
				const atributelist: ArrayAtributes[] =
					autocompleteAtributes(wordBeforeCursor);
				if (textarea) {
					const tribute = new Tribute.default({
						values: atributelist,
					});
					tribute.attach(textarea);
				}
				return;
			}

			if (textarea) {
				const tribute = new Tribute.default({
					values: labelsList,
				});

				tribute.attach(textarea);
			}
		});
	}, [htmlState]);

	const handlehtml = (e: EventTarget & HTMLTextAreaElement) => {
		const text = e.value;
		htmlEditor(text);

		const last: string | undefined = lastWord(e, text);

		if (!last) {
			return;
		}

		setWordBeforeCursor(last);
	};

	return (
		<div className="m-1 p-1">
			<h3 className="text-center text-2xl text-white">
				<b>HTML</b>
			</h3>
			<div className="mb-4">
				{getLabels.map((label) => (
					// rome-ignore lint/a11y/useButtonType: <explanation>
					<button
						className="btn btn-success btn-xs mb-0.5 mx-0.5"
						key={label.id}
						onClick={() => hangleClick(label.text)}
					>
						{label.label}
					</button>
				))}
			</div>
			<div>
				<textarea
					onChange={(e) => handlehtml(e.target)}
					// onChange={handlehtml}
					id="my-textarea"
					className="textarea textarea-warning h-48 resize-none text-xs max-w-screen-2xl"
					value={htmlState}
				/>
			</div>
		</div>
	);
};
