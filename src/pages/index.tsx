import DOMPurify from "isomorphic-dompurify";
import { useState } from "react";

interface labelsTipe {
	id: number;
	tipe: string;
	label: string;
	text: string;
}

const labels: labelsTipe[] = [
	{
		id: 1,
		tipe: "Etiquetas de texto HTML",
		label: "<p>",
		text: "p",
	},
	{
		id: 2,
		tipe: "Etiquetas de texto HTML",
		label: "<h1>",
		text: "h1",
	},
	{
		id: 3,
		tipe: "Etiquetas de texto HTML",
		label: "<h2>",
		text: "h2",
	},
	{
		id: 4,
		tipe: "Etiquetas de texto HTML",
		label: "<h3>",
		text: "h3",
	},
	{
		id: 5,
		tipe: "Etiquetas de texto HTML",
		label: "<h4>",
		text: "h4",
	},
	{
		id: 6,
		tipe: "Etiquetas de texto HTML",
		label: "<h5>",
		text: "h5",
	},
	{
		id: 7,
		tipe: "Etiquetas de texto HTML",
		label: "<h6>",
		text: "h6",
	},
	{
		id: 8,
		tipe: "Etiquetas de texto HTML",
		label: "<strong>",
		text: "strong",
	},
	{
		id: 9,
		tipe: "Etiquetas de texto HTML",
		label: "<em>",
		text: "em",
	},
	{
		id: 10,
		tipe: "Etiquetas de texto HTML",
		label: "<abbr>",
		text: "abbr",
	},
	{
		id: 11,
		tipe: "Etiquetas de texto HTML",
		label: "<address>",
		text: "address",
	},
	{ id: 12, tipe: "Etiquetas de texto HTML", label: "<bdo>", text: "bdo" },
	{
		id: 13,
		tipe: "Etiquetas de texto HTML",
		label: "<blockquote>",
		text: "blockquote",
	},
	{
		id: 14,
		tipe: "Etiquetas de texto HTML",
		label: "<cite>",
		text: "cite",
	},
	{
		id: 15,
		tipe: "Etiquetas de texto HTML",
		label: "<q>",
		text: "q",
	},
	{
		id: 16,
		tipe: "Etiquetas de texto HTML",
		label: "<code>",
		text: "code",
	},
	{
		id: 17,
		tipe: "Etiquetas de texto HTML",
		label: "<ins>",
		text: "ins",
	},
	{
		id: 18,
		tipe: "Etiquetas de texto HTML",
		label: "<del>",
		text: "del",
	},
	{
		id: 19,
		tipe: "Etiquetas de texto HTML",
		label: "<dfn>",
		text: "dfn",
	},
	{
		id: 20,
		tipe: "Etiquetas de texto HTML",
		label: "<kbd>",
		text: "kbd",
	},
	{
		id: 21,
		tipe: "Etiquetas de texto HTML",
		label: "<pre>",
		text: "samp",
	},
	{
		id: 22,
		tipe: "Etiquetas de texto HTML",
		label: "<var>",
		text: "var",
	},
	{
		id: 23,
		tipe: "Etiquetas de texto HTML",
		label: "<br>",
		text: "br",
	},
	{
		id: 24,
		tipe: "Etiquetas de texto HTML",
		label: "<div>",
		text: "div",
	},
	{
		id: 25,
		tipe: "Etiquetas de enlace HTML",
		label: "<a>",
		text: "a",
	},
	{
		id: 26,
		tipe: "Etiquetas de enlace HTML",
		label: "<base>",
		text: "base",
	},
	{
		id: 27,
		tipe: "Etiquetas HTML de imagen y objeto",
		label: "<img>",
		text: "img",
	},
	{
		id: 28,
		tipe: "Etiquetas HTML de imagen y objeto",
		label: "<area>",
		text: "area",
	},
	{
		id: 29,
		tipe: "Etiquetas HTML de imagen y objeto",
		label: "<map>",
		text: "map",
	},
	{
		id: 30,
		tipe: "Etiquetas HTML de imagen y objeto",
		label: "<param>",
		text: "param",
	},
	{
		id: 31,
		tipe: "Etiquetas HTML de imagen y objeto",
		label: "<object>",
		text: "object",
	},
	{
		id: 32,
		tipe: "Etiquetas de lista HTML",
		label: "<ul>",
		text: "ul",
	},
	{
		id: 33,
		tipe: "Etiquetas de lista HTML",
		label: "<ol>",
		text: "ol",
	},
	{
		id: 34,
		tipe: "Etiquetas de lista HTML",
		label: "<li>",
		text: "li",
	},
	{
		id: 35,
		tipe: "Etiquetas de lista HTML",
		label: "<dl>",
		text: "dl",
	},
	{
		id: 36,
		tipe: "Etiquetas de lista HTML",
		label: "<dt>",
		text: "dt",
	},
	{
		id: 37,
		tipe: "Etiquetas de lista HTML",
		label: "<dd>",
		text: "dd",
	},
];

export default function Home() {
	const [htmlarea, setHtmlarea] = useState("");
	const [labelshtml, setLabelshtml] = useState(labels);

	function handlehtml(e: string, tipe: string) {
		setHtmlarea(e);
	}

	const hangleClick = (e: string) => {
		if (htmlarea.length === 0) {
			setHtmlarea(`${htmlarea}<${e}></${e}>`);
		} else {
			setHtmlarea(`${htmlarea}\n<${e}></${e}>`);
		}
	};

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
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						height: "100%",
					}}
				>
					{/* Esto es para el HTML  */}
					<div
						style={{
							margin: "0.5rem",
						}}
					>
						<h3 style={{ textAlign: "center" }}>HTML</h3>
						{labelshtml.map((label) => {
							return (
								<button
									key={label.id}
									style={{
										margin: "0.2rem",
									}}
									onClick={() => hangleClick(label.text)}
								>
									{label.label}
								</button>
							);
						})}
						<textarea
							className="textarea"
							onChange={(e) => handlehtml(e.target.value, "html")}
							style={{
								border: "1px solid",
								padding: "0.5rem",
								height: "189px",
								width: "100%",
								resize: "none",
							}}
							value={htmlarea}
						/>
					</div>
					{/* Esto es del CSS */}
					<div
						style={{
							margin: "0.5rem",
						}}
					>
						<h3 style={{ textAlign: "center" }}>CSS</h3>
					</div>
					<div
						style={{
							margin: "0.5rem",
						}}
					>
						<h3 style={{ textAlign: "center" }}>JS</h3>
					</div>
				</div>

				<div
					style={{
						width: "100",
						margin: "0.5rem",
					}}
				>
					<h2
						style={{
							textAlign: "center",
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
						dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlarea) }}
						// id="output"
					/>
				</div>
			</div>
		</div>
	);
}
