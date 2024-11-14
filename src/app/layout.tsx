import './globals.css';

export const metadata = {
    title: "Elena's Portfolio",
    description: 'A minimalist portfolio showcasing my work as a Frontend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
        <body>
            <main className='bg-black text-white'>
                {children}
            </main>
        </body>
        </html>
    );
}

