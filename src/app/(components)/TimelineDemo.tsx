import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Ноябрь 2023 — Сентябрь 2024",
            name: (
                <h1 className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center
                sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] mb-4 lg:mb-6">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center sm:text-left mb-4 lg:mb-6">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-blue-400 dark:text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left mb-4 lg:mb-6">
                    <span className="text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
        {
            title: "Июль 2023",
            name: (
                <h1 className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center
                sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] mb-4 lg:mb-6">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center sm:text-left mb-4 lg:mb-6">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-blue-400 dark:text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left mb-4 lg:mb-6">
                    <span className="text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
        {
            title: "Ноябрь 2022 — Июнь 2023",
            name: (
                <h1 className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center
                sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] mb-4 lg:mb-6">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center sm:text-left mb-4 lg:mb-6">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-blue-400 dark:text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left mb-4 lg:mb-6">
                    <span className="text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
        {
            title: "Сентябрь 2021 — Октябрь 2022",
            name: (
                <h1 className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center
                sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] mb-4 lg:mb-6">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left mb-4 lg:mb-6">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-blue-400 dark:text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left mb-4 lg:mb-6">
                    <span className=" text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
    ];
    return (
        <Timeline data={data} />
    );
}
