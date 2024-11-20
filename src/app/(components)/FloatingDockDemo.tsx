import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
    IconBrandGithub,
    IconHome,
    IconBrandTelegram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Telegram",
            icon: (
                <IconBrandTelegram className="h-full w-full text-white text-opacity-100 dark:text-neutral-500" />
            ),
            href: "https://t.me/krupoderova",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-white text-opacity-100 dark:text-neutral-500" />
            ),
            href: "https://github.com/Lena05k",
        },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-white text-opacity-100 dark:text-neutral-500" />
            ),
            href: "https://www.linkedin.com/in/elena-krupoderova/",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}
