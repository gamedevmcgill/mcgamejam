import "../global.css";
import React from "react";
import { interFont } from "@/app/_components/constants";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[interFont.variable].join(" ")}>
			<body
				className={`${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
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
