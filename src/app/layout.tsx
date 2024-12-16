import './globals.css';
import Header from "@/app/(components)/Header";
import React from "react";
import Footer from "@/app/(components)/Footer";

export const metadata = {
    title: "Elena's Portfolio",
    description: 'A minimalist portfolio showcasing my work as a Frontend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="m-0 block bg-white dark:bg-black">
            <Header/>
            <main className='w-full relative bg-white dark:bg-black text-white'>
                {children}
            </main>
            <Footer />
        </body>
        </html>
    );
}

