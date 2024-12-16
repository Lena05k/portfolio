"use client";

import {cn} from "../../lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string | JSX.Element;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className="mx-auto relative top-0 bottom-0 left-0 right-0 flex h-screen justify-center items-center overflow-hidden px-[2.85rem] md:px-10 2xl:px-[2.85rem]">
            <div
                className={cn(
                    "2xl:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                    className
                )}
            >
                {items.map((item, idx) => (
                    <Link
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 h-full w-full"
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
                    </Link>
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
        <h4 className={cn("text-[#3273ff] dark:text-zinc-100 font-bold tracking-wide mt-4 2xl:text-5xl", className)}>
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
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-base 2xl:text-2xl",
                className
            )}
        >
            {children}
        </p>
    );
};
