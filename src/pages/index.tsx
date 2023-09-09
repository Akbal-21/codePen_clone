import { CssPage, HtmlPage, ResulPage } from "@/components";

export default function Home() {
	return (
		<div>
			<div className="items-center">
				<h1 className="text-center text-white text-4xl">
					<b>HTML Convert</b>
				</h1>
			</div>

			<div>
				<div className="flex">
					{/* Esto es para el HTML  */}
					<div className="w-1/2">
						<HtmlPage />
					</div>
					{/* Esto es del CSS */}
					<div className="w-1/2">
						<CssPage />
					</div>
				</div>
				{/* Esto es de resultados */}
				<ResulPage />
			</div>
		</div>
	);
}
