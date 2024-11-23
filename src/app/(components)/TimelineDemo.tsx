import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Ноябрь 2023 — Сентябрь 2024",
            name: (
                <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-[#edeffd] text-base sm:text-lg leading-relaxed text-center sm:text-left mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-base text-[#edeffd] italic text-center sm:text-left mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
        {
            title: "Июль 2023",
            name: (
                <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-[#edeffd] text-base sm:text-lg leading-relaxed text-center sm:text-left mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-base text-[#edeffd] italic text-center sm:text-left mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
        {
            title: "Ноябрь 2022 — Июнь 2023",
            name: (
                <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-[#edeffd] text-base sm:text-lg leading-relaxed text-center sm:text-left mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-base text-[#edeffd] italic text-center sm:text-left mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                </ul>
            ),
        },
        {
            title: "Сентябрь 2021 — Октябрь 2022",
            name: (
                <h1 className="font-bold text-2xl sm:text-3xl text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-[#edeffd] text-base sm:text-lg leading-relaxed text-center sm:text-left mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-sm sm:text-base text-[#edeffd] italic text-center sm:text-left mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
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
