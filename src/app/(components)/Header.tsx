"use client";

import React, {useEffect, useState} from "react";
import { LuSun } from "react-icons/lu";
import { BsLightningCharge, BsEmojiLaughing, BsFillLayersFill, BsSend,
    BsChatSquareHeart, BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";
interface NavLink {
    icon: JSX.Element;
    href: string;
    label: string;
}

const navLinksCenter: NavLink[] = [
    {
        icon: <BsEmojiLaughing className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "./#home",
        label: "Go to home section"
    },
    {
        icon: <BsChatSquareHeart className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "./#about",
        label: "Go to about section"
    },
    {
        icon: <BsLightningCharge className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "./#work",
        label: "Go to work section"
    },
    {
        icon: <BsFillLayersFill className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "./#projects",
        label: "Go to projects section"
    },
    {
        icon: <BsSend className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "./#contact",
        label: "Go to contact section"
    }
];

const navLinksRight: NavLink[] = [
    {
        icon: <BsLinkedin className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "https://www.linkedin.com/in/elena-krupoderova/",
        label: "Go to Linkedin profile"
    },
    {
        icon: <BsGithub className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "https://github.com/Lena05k",
        label: "Go to GitHub profile"
    },
    {
        icon: <BsTelegram className="text-black text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" />,
        href: "https://t.me/krupoderova",
        label: "Go to Telegram profile"
    }
];

interface IconButtonProps {
    icon: JSX.Element;
    href: string;
    label: string;
}

const IconButtonCenter: React.FC<IconButtonProps> = ({ icon, href, label }) => (
    <div className="aspect-square flex-none h-[40px] xl:h-[44px] 2xl:h-[48px] w-[40px] xl:w-[44px] 2xl:w-[48px] relative">
        <a
            href={href}
            aria-label={label}
            className="flex flex-row flex-nowrap justify-center items-center gap-2 overflow-hidden relative cursor-pointer text-decoration-none will-change-[transform]
            border border-solid border-[rgba(222,219,217,1)] bg-white rounded-lg h-full w-full opacity-100"
        >
            {icon}
        </a>
    </div>
);

const IconButtonRight: React.FC<IconButtonProps> = ({ icon, href, label }) => (
    <div className="flex items-center justify-center aspect-square flex-none h-[40px] xl:h-[44px] 2xl:h-[48px] w-[40px] xl:w-[44px] 2xl:w-[48px] relative
                        border border-gray-300 hover:border-blue-400 rounded-lg bg-white transition duration-300 ease-in-out">
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener"
        >
            {icon}
        </a>
    </div>
);

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const html = document.documentElement;

        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <>
            <header className="flex flex-row flex-nowrap justify-center items-center gap-0 h-min w-min fixed top-0 left-1/2 transform -translate-x-1/2 overflow-visible p-5 z-50">
                <div className="flex-none h-auto sticky top-0 w-auto will-change-transform z-10">
                    <nav
                        aria-label="Primary navigation"
                        className="flex flex-nowrap flex-col backdrop-blur-md bg-gray-100/50 dark:bg-gray-900/30 rounded-lg p-4 z-10"
                    >
                        <main aria-label="Navigation buttons"  className="flex flex-row flex-nowrap justify-center items-center gap-3 xl:gap-4 h-min w-min overflow-visible p-0 relative z-10">
                            {navLinksCenter.map((navLink, index) => (
                                <IconButtonCenter key={index} {...navLink} />
                            ))}
                        </main>
                        <figure className="absolute bottom-0 left-[26px] flex-none h-[4px] w-[28px] overflow-visible z-10 bg-[#3273ff] dark:bg-[#48b6ff]"></figure>
                    </nav>
                </div>
            </header>
            <header className="opacity-0 lg:opacity-100 relative top-0 left-1/2 transform -translate-x-1/2 flex flex-row flex-nowrap justify-center items-center
            gap-0 w-full h-min px-10 py-9 bg-white dark:bg-black backdrop-blur-sm z-40" >
                <button
                    className="flex flex-col flex-nowrap justify-start items-start flex-[1_0_0] gap-0 h-min w-px overflow-hidden relative p-0 z-10"
                    name="Logo"
                >
                    <a
                        href="http://www.oriol.design"
                        aria-label="Go to homepage"
                        className="flex items-center"
                    >
                        <div
                            className="bg-cover bg-center flex-shrink-0"
                            role="img"
                            aria-label="Oriol.design logotype"
                        >
                        </div>
                    </a>
                </button>
                <main className="flex flex-col flex-nowrap justify-end items-end flex-[1_0_0] gap-0 h-min w-px overflow-hidden relative p-0 z-30">
                    <div className="flex flex-row flex-nowrap justify-center items-center gap-3 xl:gap-4 h-min w-min overflow-hidden relative p-0">
                        {navLinksRight.map((navLink, index) => (
                            <IconButtonRight key={index} {...navLink} />
                        ))}
                        <div className="flex items-center justify-center aspect-square flex-none h-[40px] xl:h-[44px] 2xl:h-[48px] w-[40px] xl:w-[44px] 2xl:w-[48px] relative">
                            <button
                                onClick={toggleDarkMode}
                                className="text-black dark:text-white hover:text-blue-400 transition-colors h-10 py-2 px-3 flex items-center justify-center">
                                <LuSun size={24}/>
                            </button>
                        </div>
                </div>
            </main>
        </header>
    </>
)};

export default Header;
