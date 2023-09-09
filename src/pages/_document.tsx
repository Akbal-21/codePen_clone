import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/tributejs@3.5.3/dist/tribute.css"
			/>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
