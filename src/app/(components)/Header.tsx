"use client";

import React from "react";
import { LuSun } from "react-icons/lu";

const Header = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="z-[50] bg-black sticky top-0 w-full">
            <div className="hidden lg:block">
                <div className="px-8 flex h-16 items-center justify-center relative max-w-[88rem] mx-auto">
                    {/* Навигация в центре */}
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <button
                            onClick={() => handleScroll("about")}
                            className="text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
                        >
                            О себе
                        </button>
                        <button
                            onClick={() => handleScroll("experience")}
                            className="text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
                        >
                            Опыт работы
                        </button>
                        <button
                            onClick={() => handleScroll("skills")}
                            className="text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
                        >
                            Навыки
                        </button>
                        <button
                            onClick={() => handleScroll("projects")}
                            className="text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
                        >
                            Проекты
                        </button>
                        <button
                            onClick={() => handleScroll("contacts")}
                            className="text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
                        >
                            Контакты
                        </button>
                    </nav>

                    {/* Иконка справа */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <button className="text-white hover:text-blue-400 transition-colors h-10 py-2 px-3 flex items-center justify-center">
                            <LuSun size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="block lg:hidden">
                <div className="flex justify-between items-center w-full rounded-md px-4 py-4">
                    <a href="/" className="flex items-center gap-1.5">
                        <h1 className="text-white font-sans text-xl font-bold">MyPortfolio</h1>
                    </a>
                    <div className="flex items-center gap-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-white h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2-16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2-16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2-16-16 16z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
