import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Poppins } from 'next/font/google';
import React from "react";
import Header from "@/components/Header";


// @ts-ignore
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['italic', 'normal'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'Hotel Management App',
    description: 'Discover the best hotels in the world',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <main className="font-normal">
            <Header/>
            {children}
            {/*Footer*/}
        </main>
        </body>
        </html>
    );
}
