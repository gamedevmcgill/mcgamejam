import {LanguageProps, ticketUrl} from "@/app/[lang]/_components/constants";

const FloatingNavCover = (props: any) => {
    const langProps = props as LanguageProps;
    const lang = langProps.language;
    return (
        <div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-xl shadow-lg gt-sm:flex lt-sm:flex-col">
            <a href="/about"
               className="inline-flex justify-center items-center mx-auto py-3 px-3 gt-lg:px-10 lt-sm:w-72 text-base font-medium text-center text-black rounded-lg bg-amber-100 hover:bg-amber-200 focus:bg-amber-200 dark:focus:bg-amber-400">
                {lang === "en" ? "Learn More" : "En savoir plus"}
            </a>
            <div className="lt-sm:my-4 gt-sm:mx-2"/>
            <a href={ticketUrl}
               className="inline-flex justify-center items-center mx-auto py-3 px-3 gt-lg:px-10 lt-sm:w-72 text-base font-medium text-center text-white rounded-lg bg-amber-900 hover:bg-amber-950 focus:bg-amber-950 animate-pulse">
                Buy Tickets
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
            </a>

        </div>
    )
}
export {FloatingNavCover};