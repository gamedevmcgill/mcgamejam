'use client';

import Link from "next/link";
import React from "react";
import Image from "next/image";
import FloatingNav from "@/app/_components/FloatingNav";
//import banner from "/Banner_Unbranded_2024.png";


// const navigation = [
// 	{ name: "Projects", href: "/projects" },
// 	{ name: "Contact", href: "/contact" },
// ];



export default function Home() {
	return (
		<div className="flex flex-col lg:justify-center w-screen h-screen">
			<Image src={"/Banner_Unbranded_2024.png"} alt={"McGameJam 2024"}
				   width="0"
				   height="0"
				   sizes="100vw"
				   className="w-full h-auto"/>

			<FloatingNav isExpanded={false}/>
		</div>
	);
}
