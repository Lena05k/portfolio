import React from 'react';
import {FloatingDockDemo} from "@/app/(components)/FloatingDockDemo";
import {Sparkles} from "@/app/(components)/sparkles";
import FactCards from "@/app/about/(components)/FactCards";

const About: React.FC = () => {
    return (
        <>
            <section className='container mx-auto relative h-[29vh] overflow-hidden rounded-2xl'>
                <article className='grid gap-4 text-center relative z-20 pt-10'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
                        Круподерова Елена <br/> Frontend Developer React
                    </h1>
                    <FloatingDockDemo/>
                </article>
                <div
                    className='absolute inset-0 bottom-0 z-10 lg:h-[400px] w-full overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute'>
                    <Sparkles
                        density={1800}
                        speed={1.2}
                        color='#48b6ff'
                        direction='top'
                        className='absolute inset-x-0 bottom-0 h-full w-full'
                    />
                </div>
            </section>
            <section className="my-10 p-12 w-full mx-auto max-w-7xl relative shadow-2xl text-white">
                <div className="flex flex-col gap-5 sm:gap-10 lg:flex-row lg:items-start">
                    <div
                        className="lg:w-3/5 flex-1 space-y-6 sm:space-y-8 text-lg sm:text-xl
                        leading-relaxed text-[#d1d5db] transition duration-300 hover:translate-y-1">
                        <p>
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                            Text
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                            Text
                        </p>
                        <p>
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                            Text
                            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                            Text
                        </p>
                    </div>
                    <div className="lg:w-2/5 relative flex items-center justify-center">
                        <div
                            className="w-full h-80 bg-gradient-to-b from-[#3273ff] to-[#7b9cda] opacity-20
                            rounded-lg transition-transform duration-500 transform hover:scale-105"></div>
                    </div>
                </div>
            </section>
            {/*<FactCards />*/}
        </>
    );
};

export default About;
