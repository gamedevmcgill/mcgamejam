import LocalFont from "@next/font/local";

const ticketUrl = "https://www.eventbrite.ca/e/mcgamejam-2024-tickets-715049120167?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl";
import {Cinzel, Alegreya, Inter} from "@next/font/google";

const cinzelFont = Cinzel(
    {
        subsets: ["latin"],
        variable: "--font-cinzel",
    }
);

const alegreyaFont = Alegreya(
    {
        subsets: ["latin"],
        variable: "--font-alegreya",
    }
);

const interFont = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});


export {
    ticketUrl,
    cinzelFont,
    alegreyaFont,
    interFont,
};
