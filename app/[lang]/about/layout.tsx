import "@/global.css";
import React from "react";
import { alegreyaFont } from "@/app/[lang]/_components/constants";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div style={{
            backgroundImage: "none !important",
            backgroundColor: "#ffecde",
        }} className={alegreyaFont.className}>
            {children}
        </div>
    );
}
