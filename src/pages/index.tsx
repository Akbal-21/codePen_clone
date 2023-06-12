import { Inter } from "next/font/google";
import { ChangeEvent, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const htlmText = useRef<HTMLTextAreaElement>(null);
	const [htmlarea, setHtmlarea] = useState("");

	console.log(htmlarea);

	function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>): void {
		setHtmlarea(String(htlmText.current?.value));
		console.log(htlmText.current?.value);
	}

	return (
		<div>
			<div
				style={{
					alignItems: "center",
				}}
			>
				<h1 style={{ textAlign: "center" }}>HTML Convert</h1>
			</div>
			<div>
				<div
					style={{
						margin: "0.5rem",
						width: "350px",
					}}
				>
					<h3 style={{ textAlign: "center" }}>HTML</h3>
					<textarea
						className="textarea"
						ref={htlmText}
						onChange={handleMessageChange}
						style={{
							border: "1px solid",
							padding: "0.5rem",
							height: "189px",
							width: "100%",
							resize: "none",
						}}
					/>
				</div>
				<div
					style={{
						width: "100",
						margin: "0.5rem",
						textAlign: "center",
					}}
				>
					<h2
						style={{
							padding: "0.5rem",
						}}
					>
						Resultado
					</h2>
					<div
						style={{
							border: "1px solid",
							padding: "0.5rem",
							height: "189px",
						}}
						// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: htmlarea }}
					/>
				</div>
			</div>
		</div>
	);
}
