import "@/global.css";
import React from "react";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div style={{
            backgroundImage: "none !important",
            backgroundColor: "#ffecde",
        }}>
            {children}
        </div>
    );
}
