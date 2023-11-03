import {Language} from "@/app/[lang]/_components/constants";
import {redirect} from "next/navigation"
import {RedirectType} from "next/dist/client/components/redirect";

const flagFrance = "🇫🇷";
const flagUS = "🇺🇸";
// const flagFrance = "FR";
// const flagUS = "EN";

const LanguageSwitchButton = ({ params: { lang }, currentPath } : { params: { lang: Language}, currentPath: string}) => {
    const languageSwitchHandler = async (currentPath: string, currentLanguage: Language, formData: FormData) => {
        'use server';
        const oppositeLanguage = currentLanguage === "en-US" ? "fr-FR" : "en-US";
        const newPath = currentPath.replace("[lang]", oppositeLanguage);
        redirect(newPath, RedirectType.replace);
    };

    const flag = lang === "en-US" ? flagFrance : flagUS;
    const oppositeLang = lang === "en-US" ? "fr-FR" : "en-US";
    return (
        <form className="lt-md:hidden" action={languageSwitchHandler.bind(null, currentPath, lang)}>
            <button
                className="fixed bottom-6 left-8 h-16 w-16 rounded-full bg-white hover:bg-gray-50 text-black flex items-center justify-center shadow-lg text-xl"
            >
                {flag}
            </button>
        </form>
    );
}

export default LanguageSwitchButton;
