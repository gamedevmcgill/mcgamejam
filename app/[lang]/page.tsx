'use client';

import React from "react";
import Image from "next/image";

import {FloatingNavCover} from "@/app/[lang]/_components/FloatingNavCover";
import {Language} from "@/app/[lang]/_components/constants";

export default function Home({
								 params
							 }: {	params: { lang: Language }
							 }) {
	if (params.lang !== 'en-US' && params.lang !== 'fr-FR') {
		params.lang = 'en-US';
	}
	return (
		<div className="flex flex-col gt-lg:justify-center w-screen h-screen">
			<Image src={"/Banner_Unbranded_2024.png"} alt={"McGameJam 2024"}
				   width="0"
				   height="0"
				   sizes="100vw"
				   className="w-full h-auto"/>

			<FloatingNavCover params={params}/>
		</div>
	);
}
