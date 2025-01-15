import { FloatingDockDemo } from "@/app/(components)/FloatingDockDemo";
import { SparklesTwo } from "@/app/(components)/ui/sparklesTwo";
import React from "react";

const MainSection = () => {
    return (
        <section id="home" className='relative rounded-[5rem] shadow-xl shadow-blue-500/50 overflow-hidden'>
            <div
                className="mx-auto flex
                h-[52vh] md:h-[62vh] lg:h-[72vh] xl:h-[82vh] 2xl:h-[92vh]
                justify-center items-center overflow-hidden px-[2.85rem] relative 2xl:px-[2.85rem]">
                <div className="relative text-center w-full h-full z-40">
                    {/*<h1 className="absolute top-0 left-0 m-10 sm:text-5xl lg:text-6xl 2xl:text-9xl*/}
                    {/* font-semibold bg-gradient-to-b text-black dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text leading-[100%] tracking-tighter">*/}
                    {/*    Круподерова Елена*/}
                    {/*</h1>*/}

                    {/*<h2 className="absolute bottom-0 right-0 m-10 sm:text-5xl lg:text-6xl 2xl:text-9xl*/}
                    {/* font-semibold bg-gradient-to-b text-black dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text leading-[100%] tracking-tighter">*/}
                    {/*    Frontend Developer React*/}
                    {/*</h2>*/}
                    <h1 className="absolute top-0 left-0 my-5 mx-3 sm:m-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                     font-semibold text-transparent bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text leading-[100%] tracking-tighter">
                        Круподерова Елена
                    </h1>

                    <h2 className="absolute bottom-0 right-0 mb-2 mx-3 sm:m-10 text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                     font-semibold text-transparent bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda] bg-clip-text leading-[100%] tracking-tighter">
                        Frontend Developer React
                    </h2>
                </div>
                {/*<img*/}
                {/*    src="/images/beigePortrait.png"*/}
                {/*    alt="Портрет"*/}
                {/*    className="animated-portrait absolute bottom-0 z-30 w-64 h-64 md:w-80 md:h-80 lg:h-[80rem] lg:w-[90rem] object-cover self-start"*/}
                {/*/>*/}
                <img
                    src="/images/whilePortait.png"
                    alt="Портрет"
                    className="animated-portrait absolute bottom-0 z-30 h-full object-cover self-start"
                />
                <div
                    className='absolute inset-0 bottom-0 z-20 w-full overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)]
                    before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute'>
                    <SparklesTwo
                        density={1800}
                        speed={1.2}
                        color='#48b6ff'
                        direction='top'
                        className='absolute inset-x-0 bottom-0 h-full w-full'
                    />
                </div>
                <article className="absolute w-full grid gap-4 text-center z-10 pt-10">
                    <div className="relative w-full filter blur-[2px] md:blur-[3px] lg:blur-[6px] opacity-20 shadow-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold
                            bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda]
                            bg-clip-text text-transparent leading-[100%] tracking-tighter">
                            РОССИЙСКИЙ ПРОГРАММИСТ
                        </h1>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default MainSection;