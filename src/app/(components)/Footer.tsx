import React from "react";
import Link from "next/link";
import { FaGithub, FaFile, FaArrowUp } from "react-icons/fa";
import { BsLinkedin, BsTelegram} from "react-icons/bs";

interface Link {
    id: number;
    icon: JSX.Element;
    href: string;
    label: string;
    text: string;
}

const links: Link[] = [
    { id: 1, icon: <FaGithub />, href: "https://github.com/Lena05k", label: "Go to GitHub profile", text: "Github" },
    { id: 2, icon: <BsLinkedin />, href: "https://www.linkedin.com/in/elena-krupoderova/", label: "Go to Linkedin profile", text: "Linkedin" },
    { id: 3, icon: <BsTelegram />, href: "https://t.me/krupoderova", label: "Go to Telegram profile", text: "Telegram" },
    { id: 4, icon: <FaFile />, href: "#", label: "Go to Resume", text: "Резюме" }
];

interface LinkWithIconProps {
    icon: JSX.Element;
    href: string;
    label: string;
    text: string;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ icon, href, label, text }) => (
    <div className="flex flex-row gap-1 items-center">
        {icon}
        <Link
            href={href}
            aria-label={label}
            className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]
            after:bg-[rgb(0,153,255)] after:transition-all after:duration-300 hover:after:w-full"
            target="_blank"
            rel="noopener"
        >
            {text}
        </Link>
    </div>
);

const Footer = () => {
    return (
        <footer id="contact"
                className="w-full h-[94vh] justify-start overflow-hidden flex flex-none flex-col flex-nowrap relative gap-6 lg:gap-0 pointer-events-auto bg-white dark:bg-black">
            <div
                className="flex flex-none flex-col lg:flex-row h-[42%] gap-10 lg:gap-0 w-full lg:pt-20 px-2 lg:px-10 xl:px-16 2xl:px-20">
                <div
                    className="flex flex-none flex-row lg:flex-col flex-nowrap items-end justify-between content-end lg:items-start lg:justify-start lg:content-start gap-10 h-min
                    w-[375px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[382px] overflow-visible py-4 sm:py-4 lg:p-0 sticky top-[40px] will-change-transform">
                    <div
                        className="flex flex-none flex-col flex-nowrap items-start justify-start content-start self-stretch gap-3 lg:gap-5 w-[375px] lg:w-[280px] h-min overflow-visible p-0 relative">
                        <h4 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black dark:text-white">Контакты</h4>
                        <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#3273ff] dark:bg-gradient-to-b dark:bg-clip-text dark:text-transparent dark:from-[#edeffd] dark:to-[#7b9cda] font-semibold">
                            Свяжитесь для работы, сотрудничества или наставничества: lena05k@yandex.ru и @krupodeova
                        </p>
                    </div>
                </div>
                <div
                    className="self-stretch flex-none h-auto overflow-hidden relative lg:w-[10%] xl:w-[11%] 2xl:w-[12%]"></div>
                <div
                    className="flex flex-col flex-nowrap flex-1 items-start content-start justify-start gap-[18px] lg:gap-[54px] 2xl:gap-[76px] relative p-0">
                    <div
                        className="flex flex-row flex-nowrap items-center content-center justify-center gap-0 h-min w-full relative overflow-visible">
                        <div className="flex-1 relative whitespace-pre-wrap break-words">
                            <p className="text-2xl lg:text-[34px] xl:text-[45px] 2xl:text-[64px] font-bold text-black dark:text-white">НУЖЕН ФРОНТЕНД-РАЗРАБОТЧИК?</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col flex-nowrap items-start content-start justify-center gap-[1px] h-min w-full relative overflow-hidden p-0">
                        <div
                            className="flex flex-row flex-nowrap items-center content-center justify-start gap-0 h-min w-min relative overflow-hidden p-0">
                            <div className="flex-none h-auto relative whitespace-pre w-auto">
                                <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black dark:text-white font-bold">
                                    Найдите меня в другом месте в интернете
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col sm:flex-row flex-nowrap sm:items-end sm:content-end justify-start gap-0 h-[48px] w-full relative p-0">
                            <div
                                className="flex flex-row flex-nowrap items-center content-center justify-start gap-3 sm:gap-6 h-min w-[90%] relative p-0
                                 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black dark:text-white">
                                {links.map((link) => (
                                    <LinkWithIcon key={link.id} {...link} />
                                ))}
                            </div>
                            <div className="opacity-0 lg:opacity-100 flex items-center justify-center aspect-square flex-none h-[40px] xl:h-[44px] 2xl:h-[48px] w-[40px] xl:w-[44px] 2xl:w-[48px] relative
                                    border border-gray-300 hover:border-blue-400 rounded-lg bg-white transition duration-300 ease-in-out">
                                <Link href="./#home">
                                    <FaArrowUp className="h-5 w-5 fill-current text-black"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col flex-nowrap content-end justify-end gap-5 h-[58%] w-full relative overflow-visible px-2 lg:px-5 xl:px-8 2xl:px-10 pb-4 ">
                <div>
                    <h1 className="font-semibold text-transparent bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd]
                    dark:to-[#7b9cda] bg-clip-text leading-[100%] tracking-tighter whitespace-nowrap"
                        style={{
                            fontSize: `clamp(24px, calc((100vw - 64px) / 8.8), calc((100vw - 64px) / 2))`,
                        }}
                    >
                        Круподерова Елена
                    </h1>
                </div>
                <div
                    className="flex flex-col sm:flex-row flex-nowrap items-start content-start justify-start gap-0 h-[22px] w-full relative overflow-visible lg:pl-10">
                    <div
                        className="flex-none h-full opacity-0 lg:opacity-1 lg:w-[198px] xl:w-[265px] 2xl:w-[377px] overflow-hidden relative"></div>
                    <div
                        className="flex-none h-full opacity-0 lg:opacity-1 lg:w-[198px] xl:w-[265px] 2xl:w-[377px] overflow-hidden relative"></div>
                    <div className="flex-1 h-auto relative  whitespace-pre-wrap w-[1px] break-words z-1">
                        <h6 className="text-[12px] xl:text-[14px] 2xl:text-[20px] dark:text-neutral-500">Спроектировано и разработано с
                            любовью в Москве</h6>
                    </div>
                    <div className="flex-none h-auto absolute top-0 right-10 whitespace-pre w-auto z-1">
                        <h6 className="text-[12px] xl:text-[14px] 2xl:text-[20px] dark:text-neutral-500">©2025</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
