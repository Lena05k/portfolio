import React from 'react';
import 'globals'
import { Sparkles } from './sparkles';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiRedux, SiTailwindcss, SiMui } from 'react-icons/si';

const TrustBrand = () => {
    return (
        <section className='h-screen w-screen overflow-hidden bg-black'>
            <div className='mx-auto mt-32 w-screen max-w-2xl'>
                <div className='text-center text-3xl text-white'>
                    <span className='text-indigo-200'>Основные навыки</span>

                    <br/>

                    <span>Опыт. Уверенность. Качество.</span>
                </div>
                <div className='mt-14 grid grid-cols-7 gap-7 justify-items-center'>
                    <FaReact size={40} className="icon"/>
                    <SiNextdotjs size={40} className="icon" />
                    <SiRedux size={40} className="icon"/>
                    <SiTailwindcss size={40} className="icon"/>
                    <SiTypescript size={40} className="icon"/>
                    <SiMui size={40} className="icon"/>
                    <SiJavascript size={40} className="icon"/>
                </div>
            </div>
            <div
                className='relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] '></div>

                <Sparkles
                    density={800}
                    speed={1}
                    size={1.1}
                    color='#FFFFFF'
                    className='absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]'
                />
            </div>
        </section>
    );
}

export default TrustBrand;