'use client'

import Countdown from "@/app/_components/Countdown";

const ticketUrl = "https://www.eventbrite.ca/e/mcgamejam-2024-tickets-715049120167?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl";

const FloatingNavCover = () => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-xl shadow-lg gt-sm:flex lt-sm:flex-col">
            <a href="/about" className="inline-flex justify-center items-center mx-auto py-3 px-3 gt-lg:px-10 lt-sm:w-72 text-base font-medium text-center text-black rounded-lg bg-amber-100 hover:bg-amber-200 focus:bg-amber-200 dark:focus:bg-amber-400">
                Learn More
            </a>
            <div className="lt-sm:my-4 gt-sm:mx-2"/>
            <a href={ticketUrl} className="inline-flex justify-center items-center mx-auto py-3 px-3 gt-lg:px-10 lt-sm:w-72 text-base font-medium text-center text-white rounded-lg bg-amber-900 hover:bg-amber-700 focus:bg-amber-700 animate-pulse">
                Buy Tickets
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
            </a>

        </div>
    )
}

const FloatingNavContent = () => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-xl shadow-lg gt-sm:flex lt-sm:flex-col">
            <Countdown />
            <div className="my-2" />
            <a href={ticketUrl} className="inline-flex justify-center items-center py-3 px-3 gt-lg:px-10 gt-lg:w-52 lt-sm:w-72 text-base font-medium text-center text-white rounded-lg bg-amber-900 hover:bg-amber-700 focus:bg-amber-700 animate-pulse">
                Buy Tickets
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
            </a>
        </div>
    )
}

export {
    FloatingNavCover,
    FloatingNavContent
}