"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from '../sparkles';
import { Meteors } from './meteors';
import {AnimatedModalDemo} from "@/app/(components)/AnimatedModalDemo";

interface TimelineEntry {
    title: string;
    name: React.ReactNode;
    steck: React.ReactNode;
    description?: React.ReactNode;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <section
            id="experience"
            className="visible w-full bg-white dark:bg-black font-sans"
            ref={containerRef}
        >
            <div className="mx-auto relative mt-4 top-0 bottom-0 left-0 right-0 justify-center items-center overflow-hidden px-[2.85rem] md:px-10 2xl:px-[2.85rem]">
                <div className='mx-auto pb-4 max-w-2xl relative z-10 text-center'>
                    <h1 className='sm:text-3xl lg:text-4xl 2xl:text-8xl font-semibold bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
                        Опыт работы
                    </h1>
                </div>
                <div className='relative h-40 overflow-hidden '>
                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#48b6ff] to-transparent h-[2px] w-2/4 mx-auto blur-sm"
                    />
                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#48b6ff] to-transparent h-px w-2/4 mx-auto"
                    />
                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#48b6ff] to-transparent h-px w-1/4 mx-auto"
                    />

                    <Sparkles
                        density={1200}
                        mousemove={true}
                        color='#48b6ff'
                        className='absolute inset-x-0 -mt-12 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_55%)]'
                    />
                </div>
                <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-start ${index === 0 ? '' : 'pt-10 md:pt-40'} md:gap-10`}
                        >
                            <div
                                className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div
                                    className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex
                                items-center justify-center">
                                    <div
                                        className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-[#48b6ff]
                                    dark:border-neutral-700 p-2"/>
                                </div>
                                <h3 className="hidden sm:text-left sm:mb-0 md:block text-base md:pl-20 md:text-xl lg:text-2xl 2xl:text-4xl font-bold
                            text-neutral-500 dark:text-neutral-500 ">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                                <div
                                    className="absolute inset-0 h-full w-full transform scale-[0.95] rounded-full blur-2xl"></div>
                                <div
                                    className="relative shadow-lg shadow-[#48b6ff]/[0.3]  border border-[#48b6ff] dark:border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                    {item.name}
                                    {item.description}
                                    {item.steck}
                                    <AnimatedModalDemo item={item}/>
                                    <Meteors number={20}/>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        style={{
                            height: height + "px",
                        }}
                        className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                    from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]
                    [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                    >
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent
                        from-[0%] via-[10%] rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
