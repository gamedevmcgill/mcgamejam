import {chomskyFont} from "@/app/[lang]/_components/constants";

const TopNavBar = () => {
    return (
        <>
            <nav className="fixed flex items-center justify-between flex-wrap p-3 w-screen" style={{
                backgroundImage: "none !important",
                backgroundColor: "#eac79e",
            }}>
                <div className={"flex items-center flex-shrink-0 text-black mr-6 text-2xl " + chomskyFont.className}>
                    McGameJam 2024
                </div>
                <div className={"lt-md:hidden"}>

                </div>
            </nav>
        </>
    );
}

export default TopNavBar;
