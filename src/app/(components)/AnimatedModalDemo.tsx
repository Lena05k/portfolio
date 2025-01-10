"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal";
import { CloseIcon } from "./ui/animated-modal"

interface Item {
    title: string;
    content: React.ReactNode;
    name: React.ReactNode;
}

interface AnimatedModalDemoProps {
    item: Item;
}

export const AnimatedModalDemo: React.FC<AnimatedModalDemoProps> = ({ item }) => {
    return (
        <div className="flex flex-row-reverse">
            <Modal>
                <ModalTrigger className="px-4 py-1 rounded-lg border border-[#48b6ff] dark:border-gray-800 text-zinc-400 dark:text-gray-300">
                    <span className="sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Подробнее</span>
                </ModalTrigger>
                <ModalBody className="relative mx-auto bg-white dark:bg-black border border-gray-800 dark:border-neutral-800 md:rounded-lg z-50">
                <ModalContent className="p-4 mx-auto md:p-6 space-y-6">
                        <h4 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-400 dark:text-neutral-100 font-bold text-center mb-6">
                            {item.name}
                        </h4>
                        <p className="text-zinc-400 dark:text-neutral-300 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                            {item.content}
                        </p>
                    </ModalContent>
                    <ModalFooter className="gap-4 dark:bg-gray-800">
                        <CloseIcon />
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
};