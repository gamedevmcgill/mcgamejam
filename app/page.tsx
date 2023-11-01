'use client';

import Link from "next/link";
import React from "react";
import Image from "next/image";

import {FloatingNavCover} from "@/app/_components/FloatingNavCover";
import {useSearchParams} from 'next/navigation';
import {Language} from "@/app/_components/constants";

export default function Home() {
	const params = useSearchParams();
	// print
	const langString = params.get("lang");
	let lang: Language = "en";
	if (langString)
	{
		switch (langString) {
			case "en": case "fr":
				lang = langString;
				break;
			default:
				lang = "en";
				break;
		}
	}

	return (
		<div className="flex flex-col gt-lg:justify-center w-screen h-screen">
			<Image src={"/Banner_Unbranded_2024.png"} alt={"McGameJam 2024"}
				   width="0"
				   height="0"
				   sizes="100vw"
				   className="w-full h-auto"/>

			<FloatingNavCover language={lang}/>
		</div>
	);
}
