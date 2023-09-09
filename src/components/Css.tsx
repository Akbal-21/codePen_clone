import { HTMLContext } from "@/context";
import { useContext } from "react";

export const CssPage = () => {
	const { cssEditor, cssState } = useContext(HTMLContext);

	function handlecss(e: string) {
		cssEditor(e);
	}

	return (
		<div className="m-2">
			<h3 className="text-center text-2xl text-white">
				<b>CSS</b>
			</h3>
			<textarea
				className="textarea textarea-warning h-80 resize-none text-xs max-w-screen-2xl"
				onChange={(e) => handlecss(e.target.value)}
			/>
		</div>
	);
};
