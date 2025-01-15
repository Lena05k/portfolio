import { HoverEffect } from "./ui/card-projects";
import { LinkPreview } from "./ui/link-preview";

export const CardProjectso = () => {
    return (
        <section id="projects" className='w-full relative'>
            <HoverEffect items={projects} />
        </section>
    );
}
export const projects = [
    {
        id: 1,
        title: (
            <LinkPreview url="#">
                TMS (Test Management System)
            </LinkPreview>
        ),
        description:
            "Система  для планирования, управления, мониторинга, анализа и ревью тестирования ПО. Позволяет создавать и хранить тест-кейсы, отслеживать их выполнение, фиксировать дефекты и генерировать отчёты." +
            " Основные преимущества — автоматизация рутинных задач, повышение качества продукта и улучшение командного взаимодействия. Интегрируется с системами CI/CD и баг-трекерами для единого рабочего процесса.",
        link: "https://github.com/Lena05k/frontend-project-12",
    },
    {
        id: 2,
        title: (
            <LinkPreview url="https://chat-vy44.onrender.com/login">
                Slack chat Demo
            </LinkPreview>
        ),
        description:
            "Упрощённый аналог Slack-чата с обменом сообщениями в реальном времени (веб-сокеты), взаимодействием с REST API, использованием React с хуками, Redux для управления состоянием, маршрутизацией, авторизацией, сборкой через webpack и деплоем.",
        link: "https://github.com/Lena05k/frontend-project-12",
    },
    {
        id: 3,
        title: (
            <LinkPreview url="https://frontend-project-11-phi.vercel.app/">
                RSS aggregator
            </LinkPreview>
        ),
        description:
            "Агрегатор RSS собирает обновления с различных сайтов, предоставляющих RSS-ленты, и позволяет пользователям централизованно следить за новостями. Реализованы сбор RSS-лент," +
            " отслеживание новых постов, асинхронные запросы с использованием axios и стилизация с Bootstrap.",
        link: "https://github.com/Lena05k/frontend-project-11",
    },
    {
        id: 4,
        title: (
            <LinkPreview url="https://chateau-app.vercel.app/">
                WEB Chateau App
            </LinkPreview>
        ),
        description:
            "Лендинг стартапа, на котором представлены планы по его созданию, задачи команды и информация о ней. Стек: React, Tailwind CSS.",
        link: "https://github.com/Lena05k/Web-Chateau-App",
    },
    {
        id: 5,
        title: (
            <LinkPreview url="https://github.com/Lena05k/camera-application">
                Camera-application
            </LinkPreview>
        ),
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://github.com/Lena05k/camera-application",
    },
];
