import type { Locale } from '@/i18n.config'
import getEN from "@/app/[lang]/_lib/dictionaries/en";
import getFR from "@/app/[lang]/_lib/dictionaries/fr";


export const getDictionary = (locale: Locale) => {
    switch (locale) {
        case 'en-US':
            return getEN();
        case 'fr-FR':
            return getFR();

        default:
            return getEN();
    }
}
