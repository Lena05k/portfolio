import React from 'react';
import 'globals'
import { Sparkles } from './sparkles';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiRedux, SiTailwindcss, SiMui } from 'react-icons/si';

const TrustBrand = () => {
    return (
        <section id="skills" className="w-full relative bg-white dark:bg-black">
            <div
                className="mx-auto top-0 bottom-0 left-0 right-0 h-screen flex flex-col justify-center items-center overflow-hidden px-[2.85rem] relative 2xl:px-[2.85rem]">
                <div className="lg:mt-32 flex-col max-w-4xl">
                    <div className="sm:text-3xl lg:text-4xl 2xl:text-6xl text-black dark:text-white text-center">
                        <span className=" text-blue-400 dark:text-indigo-200">Основные навыки</span>
                        <br/>
                        <span>Опыт. Уверенность. Качество.</span>
                    </div>
                    <div className="mt-14 flex flex-wrap justify-center gap-6 ">
                        <FaReact size={40} className="text-black dark:text-white sm:size-16"/>
                        <SiNextdotjs size={40} className="text-black dark:text-white sm:size-16"/>
                        <SiRedux size={40} className="text-black dark:text-white sm:size-16"/>
                        <SiTailwindcss size={40} className="text-black dark:text-white sm:size-16"/>
                        <SiTypescript size={40} className="text-black dark:text-white sm:size-16"/>
                        <SiMui size={40} className="text-black dark:text-white sm:size-16"/>
                        <SiJavascript size={40} className="text-black dark:text-white sm:size-16"/>
                    </div>
                </div>
                <div
                    className="relative -mt-32 h-96 w-full overflow-hidden
                [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute
                before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)]
                before:opacity-100 after:absolute after:top-1/2 after:aspect-[1/0.7] after:w-full
                after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-100 dark:after:border-[#7876c566] dark:after:bg-zinc-900"
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0
                        bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)]
                        bg-[size:70px_80px]"
                    ></div>
                    <Sparkles
                        density={400}
                        speed={1}
                        size={1.1}
                        color="#FFFFFF"
                        className="absolute inset-x-0 bottom-0 h-full w-full
                        [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                    />
                </div>
            </div>
        </section>

    );
}

export default TrustBrand;

