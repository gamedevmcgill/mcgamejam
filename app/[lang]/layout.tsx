import "../../global.css";
import React from "react";
import { interFont } from "@/app/[lang]/_components/constants";
import Script from "next/script";

export default function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: { lang: string }
}) {
	return (
		<html lang={params.lang} className={[interFont.variable].join(" ")}>
			<body
				className={`${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
			<Script
				src="https://polyfill.io/v3/polyfill.min.js"
				strategy="beforeInteractive"
			/>
				<div style={
					{
						backgroundImage: "url(/cork.png)",
						backgroundRepeat: "repeat",
						backgroundSize: "150px 150px",
					}
				}>

					{children}
				</div>
			</body>
		</html>
	);
}
