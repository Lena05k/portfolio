"use client";

import React, {useState} from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesTwo } from "@/app/(components)/ui/sparklesTwo";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        id: number;
        title: string | JSX.Element;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className="mx-auto relative overflow-hidden
            top-0 bottom-0 left-0 right-0 justify-center items-center pb-20
            mt-16 px-4 lg:px-10 xl:px-16 2xl:px-20">
            <div className='mx-auto pb-4 max-w-2xl relative z-10 text-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold
                    bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
                    Опыт работы
                </h1>
            </div>
            <div className='relative h-16 lg:h-40 overflow-hidden '>
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#48b6ff] to-transparent h-[2px] w-2/4 mx-auto blur-sm"/>
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#48b6ff] to-transparent h-px w-2/4 mx-auto"/>
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#48b6ff] to-transparent h-px w-1/4 mx-auto"/>
                <SparklesTwo
                    density={1200}
                    mousemove={true}
                    color='#48b6ff'
                    className='absolute inset-x-0 -mt-4 lg:-mt-12 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_55%)]'
                />
            </div>
            <div
                className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                    className
                )}
            >
                {items.map((item, idx) => (
                    <div
                        key={item?.id}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-[#3273ff]/[0.8] dark:bg-neutral-800 block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{opacity: 0}}
                                    animate={{
                                        opacity: 1,
                                        transition: {duration: 0.15},
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {duration: 0.15, delay: 0.2},
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-[#3273ff]/[0.2] dark:border-white/[0.2] relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                {children}
            </div>
        </div>
    );
};

export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-[#3273ff] dark:text-zinc-100 font-bold tracking-wide mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm sm:text-md md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl",
                className
            )}
        >
            {children}
        </p>
    );
};
