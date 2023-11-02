import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

import {i18n, Locale} from '@/i18n.config'

import {match as matchLocale} from '@formatjs/intl-localematcher'
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
    //console.log("request.url ", request.url);
    const pathname = new URL(request.url).pathname ? new URL(request.url).pathname : `/${new URL(request.url).pathname}`;
    // check if the pathname is a resource file
    const isResourceFile = pathname.match(/\.[0-9a-z]+$/i)
    if (isResourceFile) return;
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
    )

    console.log("request.url ", request.url);

    // console.log("pathnameIsMissingLocale ", pathnameIsMissingLocale);
    // console.log("pathname ", pathname);

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request) as Locale;
        console.log("redirecting " + pathname + " to " + `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        )
    }
}

export const config = {
    matcher: [
        '/:path*'
    ]
}
