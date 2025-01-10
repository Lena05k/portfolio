import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "‘23—’24 Mos.ru ",
            name: (
                <h1 className="font-bold sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda]">
                    TMS — системы управления тестированием
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-center sm:text-left">
                    Внесла значительный вклад в разработку и оптимизацию производительности кода. Улучшила удобство использования для тестировщиков, что позволило повысить скорость тестирования на 15%.
                </p>
            ),
            steck: (
                <p className="text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left">
                    <span className="text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <div>
                    <h3>Обязанности:</h3>
                    <p>
                        • Разработка системы управления тестированием (TMS) на базе React.js, TypeScript и MUI.<br/>
                        • Интеграция с REST API и WebSocket для взаимодействия с серверной частью.<br/>
                        • Реализация управления тест-кейсами, разработка административного интерфейса по макетам из
                        Figma.<br/>
                        • Настройка и оптимизация процессов CI/CD с использованием Docker.<br/>
                        • Интеграция с Jira и GitLab для управления задачами и версионного контроля.<br/>
                        <br/>
                    </p>
                    <h3>Достижения:</h3>
                    <p>
                        • Выпустила каталог шагов и модуль управления дефектами, улучшив взаимодействие QA.<br/>
                        • Разработала систему ревью и модерации, внедрив современные подходы (React.js, MUI, Sass,
                        Less).<br/>
                        • Реализовала функциональность календаря для учета времени, включая добавление освобождений от
                        работы<br/>
                        (React.js, MUI, Sass, Less).<br/>
                        • Интегрировала кастомные поля с Jira для создания аналитических отчетов.<br/>
                        • Настроила асинхронные запросы через Axios, улучшив обработку ошибок и производительность с
                        React
                        Query.<br/>
                        • Управляла состоянием приложения с помощью React Context и React Hooks.<br/>
                        • Оптимизировала процессы разработки с Docker, настроив окружение и CI/CD.</p>
                </div>
            ),
        },
        {
            title: "Июль ‘23 КТ-Беспилотные Системы",
            name: (
                <h1 className="font-bold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda]">
                    Прототип ПО для обнаружения дефектов
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-center sm:text-left">
                    Придумала прототип программного обеспечения для обнаружения дефектов на линиях электропередачи с использованием БПЛА для инженеров компании KT-Беспилотные Системы.
                </p>
            ),
            steck: (
                <p className="text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left">
                    <span className="text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript,
                    Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira,
                    GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
                    <li>Обязанности:</li>
                    <li>• Разработка веб-приложения для обнаружения коронного разряда с функцией видеостриминга,
                        управления альбомами и записи видео.
                    </li>
                    <li>• Интеграция машинного обучения для визуализации данных и результатов.</li>
                    <li>• Оптимизация веб-приложения для корректной работы на десктопах, планшетах и мобильных устройствах.</li>
                    <li>• Поддержка и рефакторинг кода с использованием ESLint и системы контроля версий Git.</li>
                    <li></li>
                    <li>Достижения:</li>
                    <li>• Внедрила веб-приложение в производственную среду, сократив время обработки данных о дефектах.</li>
                    <li>• Оптимизировала загрузку страниц, улучшив скорость работы DOM-операций.</li>
                    <li>• Реализовала адаптивный дизайн, повысив удобство использования на мобильных устройствах.</li>
                    <li>• Настроила взаимодействие компонентов с использованием React Router DOM и React Bootstrap, улучшив пользовательский опыт.</li>
                    <li>• Внедрила строгие правила кодирования через ESLint, повысив качество поддерживаемого кода.</li>
                </ul>
            ),
        },
        {
            title: "‘22—’23 ChaTeau",
            name: (
                <h1 className="font-bold text-center
                sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda]">
                    ChaTeau —  Мессенджер с интеграцией криптовалют
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-center sm:text-left">
                    Создала лендинг для отображения концепции проекта ChaTeau и его бизнес-модели MVC.
                </p>
            ),
            steck: (
                <p className=" text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left">
                    <span className="text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
                    <li>Обязанности:</li>
                    <li> • Создание адаптивного лендинга на React.js и TailwindCSS для представления функциональности мессенджера.</li>
                    <li> • Настройка и оптимизация окружения разработки с использованием Webpack и ESLint для повышения стабильности и качества кода.</li>
                    <li> • Интеграция Firebase для реализации функционала авторизации, хранения данных и обработки запросов.</li>
                </ul>
            ),
        },
        {
            title: "‘21—’22 BITOP",
            name: (
                <h1 className="font-bold text-center
                sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda]">
                    Электронный журнал МГТУ им. Баумана
                </h1>
            ),
            description: (
                <p className="text-zinc-400 dark:text-[#edeffd] text-center sm:text-left">
                    Впервые приняла участие в разработке IT-продукта в команде, работая над созданием электронного журнала в формате мобильного приложения для студентов. Также впервые занималась решением бизнес-задач. Проект успешно запущен и скачан более 5 000 студентами.
                </p>
            ),
            steck: (
                <p className="text-zinc-400 dark:text-[#edeffd] italic text-center sm:text-left">
                    <span className=" text-blue-400 dark:text-[#7b9cda] font-semibold">Стек:</span> React.js, TypeScript, Axios, MUI, Sass, SCSS, Less, Figma, Docker, ESLint, REST API, WebSocket, Git, HTML, CSS3, Jira, GitLab
                </p>
            ),
            content: (
                <ul className="list-disc list-inside text-center sm:text-left">
                    <li>Обязанности:</li>
                    <li>• Реализация функциональности мобильного приложения для электронного журнала студентов на базе React Native.</li>
                    <li>• Создание и поддержка автоматизированных тестов с использованием Cypress.io и JavaScript для повышения качества и стабильности приложения.</li>
                    <li>• Настройка окружения разработки через Webpack для оптимизации процесса разработки.</li>
                    <li>• Интеграция Bootstrap 5 для создания современных и удобных пользовательских интерфейсов.</li>
                    <li></li>
                    <li>Достижения:</li>
                    <li>• Успешный запуск мобильного приложения, активно используемого студентами МГТУ им. Н. Э. Баумана, что улучшило процесс взаимодействия студентов с учебной системой.</li>
                    <li>• Внедрение системы OR (Order and Register) для контроля доступа в кампус, что упростило и ускорило процесс прохода студентов.</li>
                    <li>• Разработка автоматизированных тестов, сокративших время на ручное тестирование и улучшивших качество кода.</li>
                    <li>• Повысила производительность приложения за счет оптимизации кода и настройки Webpack.</li>
                    <li>• Обеспечила кроссплатформенную совместимость приложения, улучшив его доступность для пользователей.</li>
                </ul>
            ),
        },
    ];
    return (
        <Timeline data={data} />
    );
}
