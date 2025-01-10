import './globals.css';
import Header from "@/app/(components)/Header";
import React from "react";
import Footer from "@/app/(components)/Footer";
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '600', '700'],
});

export const metadata = {
    title: "Elena's Portfolio",
    description: 'A minimalist portfolio showcasing my work as a Frontend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={nunitoSans.className}>
        <body className=" bg-white dark:bg-black">
            <Header/>
            <main className='w-full relative bg-white dark:bg-black'>
                {children}
            </main>
            <Footer />
        </body>
        </html>
    );
}

