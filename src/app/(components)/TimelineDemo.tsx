import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Ноябрь 2023 — Сентябрь 2024",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            description: (
                <p className="text-[#edeffd] text-lg leading-relaxed mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            steck: (
                <p className="text-base text-[#edeffd] italic mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <>
                    <h2 className="font-semibold text-xl text-[#7b9cda] mb-2">Основные задачи:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                    </ul>
                    <h2 className="font-semibold text-xl text-[#7b9cda] mb-2">Достижения:</h2>
                    <ul className="list-disc list-inside">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Июль 2023",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            steck: (
                <p className="text-base text-[#edeffd] italic mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React, React DOM, React Router DOM, React Bootstrap, React Icons, Eslint, Git, HTML, CSS3
                </p>
            ),
            description: (
                <p className="text-[#edeffd] text-lg leading-relaxed mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            content: (
                <>
                    <h2 className="font-semibold mb-2">Основные задачи:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                    </ul>
                    <h2 className="font-semibold mb-2">Достижения:</h2>
                    <ul className="list-disc list-inside">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Ноябрь 2022 — Июнь 2023",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text
                </h1>
            ),
            steck: (
                <p className="text-base text-[#edeffd] italic mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React.js, Firebase, TailwindCSS, Webpack, ESLint, Git, HTML, CSS3
                </p>
            ),
            content: (
                <div className="text-white rounded-lg p-6 shadow-lg">
                    <h2 className="font-semibold mb-2">Основные задачи:</h2>
                    <ul className="list-disc list-inside">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Сентябрь 2021 — Октябрь 2022",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </h1>
            ),
            steck: (
                <p className="text-base text-[#edeffd] italic mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React Native, JavaScript, Bootstrap 5, Webpack, Cypress.io
                </p>
            ),
            description: (
                <p className="text-[#edeffd] text-lg leading-relaxed mb-4">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                </p>
            ),
            content: (
                <div className="text-white rounded-lg p-6 shadow-lg">
                    <h2 className="font-semibold mb-2">Основные задачи:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    </ul>
                    <h2 className="font-semibold mb-2">Достижения:</h2>
                    <ul className="list-disc list-inside">
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                        <li>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <Timeline data={data} />
    );
}
