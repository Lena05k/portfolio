import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Ноябрь 2023 — Сентябрь 2024",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    ГКУ Инфогород
                </h1>
            ),
            description: (
                <p className="text-[#edeffd] text-lg leading-relaxed mb-4">
                    Инфогород — ведущая компания, создающая современные IT-решения для городских и государственных систем, таких как mos.ru, Госуслуги, ЕМИАС и других. Мы разрабатываем проекты, которые делают работу платформ удобнее и прозрачнее для всех пользователей.<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Система управления тестированием (TMS), которая обеспечивает высокое качество и надежность процессов тестирования. Система упрощает организацию, контроль и отслеживание тестирования, минимизирует ошибки и улучшает городские и государственные сервисы.
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
                        <li>Разработка интерфейса административного портала с использованием Figma и MUI.</li>
                        <li>Взаимодействие с REST API и WebSocket для обеспечения обмена данными.</li>
                        <li>Интеграция кастомных полей с Jira для создания отчетов и аналитики.</li>
                        <li>Оптимизация CI/CD процесса и разработка окружения через Docker.</li>
                    </ul>
                    <h2 className="font-semibold text-xl text-[#7b9cda] mb-2">Достижения:</h2>
                    <ul className="list-disc list-inside">
                        <li>Успешный релиз каталога шагов и системы управления дефектами.</li>
                        <li>Реализация системы управления временем и календаря для отслеживания освобождений от работы.</li>
                        <li>Повышение производительности за счет использования React Query для кэширования данных.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Июль 2023",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    КТ-Беспилотные Системы
                </h1>
            ),
            steck: (
                <p className="text-base text-[#edeffd] italic mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React, React DOM, React Router DOM, React Bootstrap, React Icons, Eslint, Git, HTML, CSS3
                </p>
            ),
            description: (
                <p className="text-[#edeffd] text-lg leading-relaxed mb-4">
                    Кронштадт — ведущий разработчик беспилотных авиационных систем в России, обеспечивающий полный цикл разработки и производства.<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Прототип веб-приложения для беспилотных летательных аппаратов, используемый для обнаружения коронного разряда на линиях электропередачи. Новое приложение позволяет инженерам выявлять дефекты в реальном времени, что упрощает мониторинг и повышает безопасность.
                </p>
            ),
            content: (
                <>
                    <h2 className="font-semibold mb-2">Основные задачи:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Разработка интерфейса для видеостриминга и управления альбомами.</li>
                        <li>Интеграция машинного обучения для визуализации данных.</li>
                        <li>Оптимизация работы приложения для мобильных устройств.</li>
                    </ul>
                    <h2 className="font-semibold mb-2">Достижения:</h2>
                    <ul className="list-disc list-inside">
                        <li>Сокращение времени обработки данных за счет внедрения нового функционала.</li>
                        <li>Адаптивный интерфейс, улучшивший использование на мобильных устройствах.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Ноябрь 2022 — Июнь 2023",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    CHATeau
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
                        <li>Разработка адаптивного лэндинга с интеграцией криптовалют.</li>
                        <li>Настройка окружения разработки с использованием Webpack и ESLint.</li>
                        <li>Интеграция Firebase для обеспечения функциональности приложения.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Сентябрь 2021 — Октябрь 2022",
            name: (
                <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#edeffd] to-[#7b9cda] mb-4">
                    BITOP, МГТУ им. Н. Э. Баумана
                </h1>
            ),
            steck: (
                <p className="text-base text-[#edeffd] italic mb-4">
                    <span className="text-[#7b9cda] font-semibold">Стек:</span> React Native, JavaScript, Bootstrap 5, Webpack, Cypress.io
                </p>
            ),
            description: (
                <p className="text-[#edeffd] text-lg leading-relaxed mb-4">
                    BITOP — студенческая организация, объединяющая студентов, увлеченных IT и разработкой ПО.<br/><br/>
                    <span className="font-semibold text-[#7b9cda]">Проект:</span> Мобильное приложение «Мой МГТУ» для упрощения доступа студентов к учебной информации. Включает просмотр расписания, оценок, новостей университета и использования электронного пропуска.
                </p>
            ),
            content: (
                <div className="text-white rounded-lg p-6 shadow-lg">
                    <h2 className="font-semibold mb-2">Основные задачи:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Разработка функционала мобильного приложения для студентов на базе React Native.</li>
                        <li>Поддержка автоматизированных тестов с использованием Cypress.io для обеспечения качества приложения.</li>
                    </ul>
                    <h2 className="font-semibold mb-2">Достижения:</h2>
                    <ul className="list-disc list-inside">
                        <li>Успешный запуск приложения, активно используемого студентами.</li>
                        <li>Внедрение системы OR для прохода в университет, что улучшило процесс доступа студентов.</li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <Timeline data={data} />
    );
}
