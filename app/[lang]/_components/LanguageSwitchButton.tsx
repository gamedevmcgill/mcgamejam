import {Language} from "@/app/[lang]/_components/constants";

const flagFrance = "🇫🇷";
const flagUS = "🇺🇸";
// const flagFrance = "FR";
// const flagUS = "EN";

const LanguageSwitchButton = ({ params: { lang }, currentPath } : { params: { lang: Language}, currentPath: string}) => {
    const flag = lang === "en-US" ? flagFrance : flagUS;
    const oppositeLang = lang === "en-US" ? "fr-FR" : "en-US";
    return (
        <div className="lt-sm:hidden">
            <a
                className="fixed bottom-6 left-8 h-16 w-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg text-xl"
                href={currentPath.replace("[lang]", oppositeLang)}
            >
                {flag}
            </a>
        </div>
    );
}

export default LanguageSwitchButton;
