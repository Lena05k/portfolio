import { FloatingDockDemo } from "@/app/(components)/FloatingDockDemo";
import { Sparkles } from "@/app/(components)/sparkles";
import React from "react";

const MainSection = () => {
    return (
        <section className='visible w-full relative rounded-2xl'>
            <div
                className="mx-auto flex h-screen justify-center items-center overflow-hidden px-[2.85rem] relative 2xl:px-[2.85rem]">
                <article className='grid gap-4 text-center relative z-20 pt-10'>
                    <h1 className='sm:text-5xl lg:text-6xl 2xl:text-9xl font-semibold bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text text-center text-transparent leading-[100%] tracking-tighter'>
                        Круподерова Елена <br/> Frontend Developer React
                    </h1>
                    <h1 className='sm:text-5xl lg:text-6xl 2xl:text-9xl font-semibold bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text text-center text-transparent leading-[100%] tracking-tighter'>
                        Круподерова Елена <br/> Frontend Developer React
                    </h1>
                    {/*<FloatingDockDemo/>*/}
                </article>
                <img
                    src="/images/beigePortrait.png"
                    alt="Портрет"
                    className="animated-portrait w-64 h-64 md:w-80 md:h-80 lg:h-[60rem] lg:w-[70rem] object-cover self-start"
                />
                <div
                    className='absolute inset-0 bottom-0 z-10 w-full overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute'>
                    <Sparkles
                        density={1800}
                        speed={1.2}
                        color='#48b6ff'
                        direction='top'
                        className='absolute inset-x-0 bottom-0 h-full w-full'
                    />
                </div>
            </div>
        </section>
    );
};

export default MainSection;