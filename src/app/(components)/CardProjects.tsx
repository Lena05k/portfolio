import { HoverEffect } from "./ui/card-projects";
import { LinkPreview } from "./ui/link-preview";

export const CardProjectso = () => {
    return (
        <section id="projects" className='container w-full mx-auto relative md:px-10 overflow-hidden rounded-2xl'>
            <HoverEffect items={projects} />
        </section>
    );
}
export const projects = [
    {
        title: (
            <LinkPreview url="https://github.com/Lena05k/frontend-project-12" className="text-zinc-100">
                Slack chat Demo
            </LinkPreview>
        ),
        description:
            "Упрощённый аналог Slack-чата с обменом сообщениями в реальном времени (веб-сокеты), взаимодействием с REST API, использованием React с хуками, Redux для управления состоянием, маршрутизацией, авторизацией, сборкой через webpack и деплоем.",
        link: "https://github.com/Lena05k/frontend-project-12",
    },
    {
        title: (
            <LinkPreview url="https://github.com/Lena05k/frontend-project-11" className="text-zinc-100">
                RSS aggregator
            </LinkPreview>
        ),
        description:
            "Агрегатор RSS собирает обновления с различных сайтов, предоставляющих RSS-ленты, и позволяет пользователям централизованно следить за новостями. Реализованы сбор RSS-лент, отслеживание новых постов, асинхронные запросы с использованием axios и стилизация с Bootstrap.",
        link: "https://github.com/Lena05k/frontend-project-11",
    },
    {
        title: (
            <LinkPreview url="https://chateau-app.vercel.app/" className="text-zinc-100">
                WEB Chateau App
            </LinkPreview>
        ),
        description:
            "Лендинг стартапа, на котором представлены планы по его созданию, задачи команды и информация о ней. Стек: React, Tailwind CSS.",
        link: "https://github.com/Lena05k/Web-Chateau-App",
    },
    {
        title: (
            <LinkPreview url="https://github.com/Lena05k/camera-application" className="text-zinc-100">
                Camera-application
            </LinkPreview>
        ),
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://github.com/Lena05k/camera-application",
    },
];
