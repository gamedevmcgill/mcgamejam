'use client';

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
import banner from "../public/Banner_Unbranded_2024.png";
import { useState, useEffect } from 'react';

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const Nav = (props: any) => {
	const isExpanded = props.isExpanded === undefined ? false : props.isExpanded;
	const formatWithLeadingZero = (value: any) => (value < 10 ? `0${value}` : value);
	const [timeLeft, setTimeLeft] = useState({
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: "0.00"
	});
	useEffect(() => {
		const targetDate = new Date('January 19, 2024 17:00:00 EST');
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
			const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = (Math.floor((distance % (1000 * 60)) / 1000) + (distance % 1000) / 1000).toFixed(0);

			setTimeLeft({ months, days, hours, minutes, seconds });
			if (distance < 0) {
				clearInterval(interval);
				setTimeLeft({
					months: 0,
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: "0.00"
				});
			}
		}, 1);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-xl shadow-lg flex space-x-4">
			{
				isExpanded ? (
					<>
						<div className="flex items-center space-x-2 text-lg font-medium w-72">
							<div><span className="text-2xl pr-2">{timeLeft.months}</span><span>M</span></div>
							<div><span className="text-2xl pr-2">{formatWithLeadingZero(timeLeft.days)}</span><span>D</span></div>
							<div><span className="text-2xl pr-2">{formatWithLeadingZero(timeLeft.hours)}</span><span>H</span></div>
							<div><span className="text-2xl pr-2">{formatWithLeadingZero(timeLeft.minutes)}</span><span>MIN</span></div>
							<div className="flex items-baseline">
								<span className="text-2xl w-10 text-left">{formatWithLeadingZero(timeLeft.seconds)}</span>
								<span>S</span>
							</div>
						</div>
						<div className="flex items-center space-x-4 text-md font-medium justify-center pr-6">
							<span className="whitespace-nowrap">until the game jam</span>
						</div>
					</>
				) : (
					<></>
				)
			}
			{
				isExpanded ? (
					<></>
				) : (
					<>
						<a href="/about" className="inline-flex justify-center items-center py-3 px-3 lg:px-10 text-base font-medium text-center text-black rounded-lg bg-amber-100 hover:bg-amber-200 focus:ring-4 focus:bg-amber-200 dark:focus:bg-amber-400">
							Learn More
						</a>
					</>
				)
			}
			<a href="#" className="inline-flex justify-center items-center py-3 px-3 lg:px-10 text-base font-medium text-center text-white rounded-lg bg-amber-900 hover:bg-amber-700 focus:ring-4 focus:bg-amber-700 animate-pulse">
				Buy Tickets
				<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
				</svg>
			</a>

		</div>
	)
}

export default function Home() {
	return (
		<div className="flex flex-col lg:justify-center w-screen h-screen">
			<Image src={banner} alt={"McGameJam 2024"}/>

			<Nav isExpanded={false}/>
		</div>
	);
}
