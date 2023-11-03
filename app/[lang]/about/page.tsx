
import { FloatingNavContent } from "@/app/[lang]/_components/FloatingNavContent";
import {interFont, Language, ticketUrl} from "@/app/[lang]/_components/constants";
import { alegreyaFont, cinzelFont } from "@/app/[lang]/_components/constants";
import TopNavBar from "@/app/[lang]/_components/TopNavBar";
import LanguageSwitchButton from "@/app/[lang]/_components/LanguageSwitchButton";
import React from "react";
import {getDictionary} from "@/app/[lang]/_lib/dictionary";

const Home = ({params} : {params: { lang: Language}}) => {
    const {
        root: {
            about: {
                content: {
                    what_is_mcgamejam,
                    what_is_mcgamejam_response,
                    when_and_where,
                    when_and_where_response,
                    who_can_participate,
                    who_can_participate_response,
                    how_should_i_prepare,
                    how_should_i_prepare_response,
                    will_there_be_food,
                    will_there_be_food_response,
                    what_should_i_bring_with_me,
                    what_should_i_bring_with_me_response,
                    what_if_i_dont_have_a_team,
                    what_if_i_dont_have_a_team_response,
                    how_big_can_my_team_be,
                    how_big_can_my_team_be_response,
                    where_do_i_submit_my_game_for_judging,
                    where_do_i_submit_my_game_for_judging_response,
                    tickets,
                    swag,
                    ubi_mentorship,
                    tech_talks,
                    sponsors,
                    get_your_tickets,
                    sign_up,
                    early_bird_discount_desc,
                    tickets_desc,
                    networking
                }
            }
        }
    } = getDictionary(params.lang);
    return (
        <>
            <TopNavBar />
            <LanguageSwitchButton params={params} currentPath="/[lang]/about"/>
            <div className="container" style={{backgroundColor: "#ffecde"}}>
                <div className={"py-11"} />
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-start-3 col-span-9 lt-sm:col-start-2 lt-sm:col-span-10 gt-lg:col-start-4 gt-lg:col-span-8 space-y-6"}>
                        <div className={"text-center text-3xl " + cinzelFont.className}>
                            {what_is_mcgamejam}
                        </div>
                        <div className={"text-md"}>
                            {what_is_mcgamejam_response}
                        </div>
                        <br />
                        <div className={"text-center text-3xl " + cinzelFont.className}>F.A.Q.</div>
                        <div className={"text-md"}>
                            <div className={"text-2xl"}>
                                {when_and_where}
                            </div>
                            {when_and_where_response}
                            <br />
                            <br />
                            <div className={"text-2xl"}>
                                {who_can_participate}
                            </div>
                            {who_can_participate_response}
                            <br />
                            <br />
                            <div className={"text-2xl"}>
                                {how_should_i_prepare}
                            </div>
                            {how_should_i_prepare_response}
                            <div className="text-5xl">
                                ADD ICONS
                            </div>
                            <br />
                            <br />
                            <div className={"text-2xl"}>{will_there_be_food}</div>
                            {will_there_be_food_response}
                            <br />
                            <br />
                            <div className={"text-2xl"}>{what_should_i_bring_with_me}</div>
                            {what_should_i_bring_with_me_response}
                            <br />
                            <br />
                            <div className={"text-2xl"}>{what_if_i_dont_have_a_team}</div>
                            {what_if_i_dont_have_a_team_response}
                            <br />
                            <br />
                            <div className={"text-2xl"}>{how_big_can_my_team_be}</div>
                            {how_big_can_my_team_be_response}
                            <br />
                            <br />
                            <div className={"text-2xl"}>{where_do_i_submit_my_game_for_judging}</div>
                            {where_do_i_submit_my_game_for_judging_response}
                        </div>
                        <div className={"text-center text-3xl " + cinzelFont.className}>{sign_up}</div>
                        <div className="text-center text-lg">{tickets}</div>

                        {tickets_desc}

                        <ul className={"list-disc gt-md:list-inside"}>
                            <li>{ubi_mentorship}</li>
                            <li>{tech_talks}</li>
                            <li>{networking}</li>
                            <li>{swag}</li>
                        </ul>

                        <div className="flex items-center justify-center">
                            <a className="relative bg-amber-600 p-4 rounded-lg shadow-lg hover:bg-amber-700" href={ticketUrl}>
                                <div className="absolute top-0 right-0 bg-red-500 text-xs text-white py-0.5 px-2 transform translate-x-1/2 -translate-y-1/2 rounded-md">
                                    {early_bird_discount_desc}
                                </div>
                                <h1 className="text-xl font-bold text-center text-white">
                                    {get_your_tickets}
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={interFont.className}>
                    <FloatingNavContent params={params}/>
                </div>
                <div className="py-16 lt-lg:py-24 lt-md:py-28"/>
            </div>
        </>

    );
}

export default Home;