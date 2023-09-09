import { HTMLContext } from "@/context";
import { useContext, useEffect, useRef } from "react";

export const ResulPage = () => {
	const output = useRef<HTMLIFrameElement>(null);
	const { htmlState, cssState } = useContext(HTMLContext);

	useEffect(() => {
		const iframContent = output.current?.contentDocument;
		iframContent?.open();
		iframContent?.write(`${htmlState}<style>${cssState}</style>`);
		iframContent?.close();
	}, [htmlState, cssState]);

	return (
		<div className="mx-4 mb-3 ">
			<h2 className="text-center p-2 text-2xl text-white">
				<b>Resultado</b>
			</h2>
			<div className=" flex">
				{/* rome-ignore lint/a11y/useIframeTitle: <explanation> */}
				<iframe
					className="border-yellow-500 border-solid h-40 border-2 rounded-xl w-full "
					ref={output}
				/>
			</div>
		</div>
	);
};
