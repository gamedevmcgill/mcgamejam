'use client'

import { FloatingNavContent } from "@/app/[lang]/_components/FloatingNavContent";
import {interFont, Language, ticketUrl} from "@/app/[lang]/_components/constants";
import { alegreyaFont, cinzelFont } from "@/app/[lang]/_components/constants";
import TopNavBar from "@/app/[lang]/_components/TopNavBar";

const Home = ({params} : {params: { lang: Language}}) => {
    const lang = params.lang;
    return (
        <>
            <TopNavBar />
            <div className="container" style={{backgroundColor: "#ffecde"}}>
                <div className={"py-11"} />
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-start-3 col-span-9 lt-sm:col-start-2 lt-sm:col-span-10 gt-lg:col-start-4 gt-lg:col-span-8 space-y-6"}>
                        <div className={"text-center text-3xl " + cinzelFont.className}>What is McGameJam?</div>
                        <div className={"text-md"}>
                            McGameJam is a 48 hour game development marathon where attendees are tasked with creating a playable game, in any shape or form, based on a chosen thematic. Organized by Game Dev McGill, McGameJam's goal is to bring students together to collaborate and create great games, regardless of their skill level. So whether you are a veteran game developer or a first-time jammer, join us for a weekend of game development, learning, and fun.
                        </div>
                        <br />
                        <div className={"text-center text-3xl " + cinzelFont.className}>F.A.Q.</div>
                        <div className={"text-md"}>
                            <div className={"text-2xl"}>When and where is it?</div>
                            McGameJam 2024 will be happening between Friday, January 19th and Sunday, January 21st, in the Trottier building on McGill campus (3630, rue University, Montréal (QC) H3A 0C6)
                            <br />
                            <br />
                            <div className={"text-2xl"}>Who can participate?</div>
                            McGameJam is open to all everyone aged 18 or older, with priority given to students. We reserve the right to cancel any tickets which do not respect those conditions.
                            <br />
                            <br />
                            <div className={"text-2xl"}>How should I prepare?</div>
                            In order to enjoy this competition to the fullest, we recommend you get familiar with programming languages as well as tools such as the following:
                            <br />
                            <br />
                            <div className={"text-2xl"}>Will there be food?</div>
                            As usual, we will be providing meals (breakfast, lunch, supper), starting from supper on Friday during opening ceremonies until lunch on Sunday before the last stretch. Furthermore, we will be serving snacks and coffee throughout the day. Additionally, there are multiple restaurants and supermarkets around if you feel the need to purchase your own food.
                            <br />
                            <br />
                            <div className={"text-2xl"}>What should I bring with me?</div>
                            Bring whatever you need to make a game, whether that is a computer, a drawing tablet, pens, papers, paint, the list goes on. If you can make a game with it, bring it along! Furthermore, we recommend you bring a toothbrush, deodorant, spare clothing, sleeping bag, etc. if you plan on spending the night with us! Most importantly, please bring your ticket to the event to facilitate badge and t-shirt pickup.
                            <br />
                            <br />
                            <div className={"text-2xl"}>What if I don't have a team?</div>
                            You are welcome to use our Facebook event page to try and find other teammates. Otherwise, we will attempt to group up participants who are alone and are looking for teammates. Additionally, we will set up a Discord server to facilitate team building prior to the event.
                            <br />
                            <br />
                            <div className={"text-2xl"}>How big can my team be?</div>
                            Please make sure your team is of at most 8 members! Teams of bigger sizes will be asked to split up.
                            <br />
                            <br />
                            <div className={"text-2xl"}>Where do I submit my game for judging?</div>
                            We will be using Itch.io for the submission process. Detailed instructions will be given at the event.
                        </div>
                        <div className={"text-center text-3xl " + cinzelFont.className}>Sign up</div>
                        <div className="text-center text-lg">Tickets</div>

                        To sign up you must purchase a $15-30 ticket. You will need to have registered a ticket to access the Discord server and submit your game on Itch.io for judging. Tickets also provide you with the following:

                        <ul className={"list-disc gt-md:list-inside"}>
                            <li>Ubisoft mentoring throughout the development of your game</li>
                            <li>Technical talks prior to and during the competition</li>
                            <li>Networking with sponsors</li>
                            <li>A swag pack and some additional goodies!</li>
                        </ul>

                        <div className="flex items-center justify-center">
                            <a className="relative bg-amber-600 p-4 rounded-lg shadow-lg hover:bg-amber-700" href={ticketUrl}>
                                <div className="absolute top-0 right-0 bg-red-500 text-xs text-white py-0.5 px-2 transform translate-x-1/2 -translate-y-1/2 rounded-md">
                                    Early birds 25% off
                                </div>
                                <h1 className="text-xl font-bold text-center text-white">
                                    Get your tickets
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={interFont.className}>
                    <FloatingNavContent/>
                </div>
                <div className="py-16 lt-lg:py-24 lt-md:py-28"/>
            </div>
        </>

    );
}

export default Home;