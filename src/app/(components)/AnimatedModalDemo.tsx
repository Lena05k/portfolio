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
    content: string;
    name: string;
}

interface AnimatedModalDemoProps {
    item: Item;
}

export const AnimatedModalDemo: React.FC<AnimatedModalDemoProps> = ({ item }) => {
    return (
        <div className="flex flex-row-reverse">
            <Modal>
                <ModalTrigger className="px-4 py-1 rounded-lg border border-gray-800 text-gray-300">
                    <span>Подробнее</span>
                </ModalTrigger>
                <ModalBody data-modal-backdrop="static" className="relative w-full max-w-lg max-h-full bg-black border border-gray-800 dark:border-neutral-800 md:rounded-lg z-50">
                    <ModalContent className="p-4 md:p-6 space-y-6">
                        <h4 className="text-lg md:text-xl text-neutral-100 font-bold text-center mb-6">
                            {item.name}
                        </h4>
                        <p className="text-neutral-300 text-base leading-relaxed">
                            {item.content}
                        </p>
                    </ModalContent>
                    <ModalFooter className="gap-4 bg-gray-800">
                        <CloseIcon />
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
};