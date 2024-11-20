import React from 'react';
import { Sparkles } from './(components)/sparkles';
import TrustBrand from "@/app/(components)/TrustBrand";
import {TimelineDemo} from "@/app/(components)/TimelineDemo";
import {CardProjectso} from "@/app/(components)/CardProjects";
import {FloatingDockDemo} from "@/app/(components)/FloatingDockDemo";
import Header from "@/app/(components)/Header";

const index = () => {
    return (
        <>
            <Header />
            <section
                className='container w-full mx-auto relative h-[44vh] overflow-hidden rounded-2xl'>
                <article className='grid gap-4 text-center relative z-10 pt-10'>
                    <h1 className='2xl:text-6xl xl:text-5xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
                        Круподерова Елена <br/> Frontend Developer React
                    </h1>
                    {/*<span>*/}
                    {/*    Добро пожаловать в мой уголок вселенной IT!<br />*/}
                    {/*    Здесь я делюсь своим опытом, проектами и навыками,<br />*/}
                    {/*    а также небольшими историями о себе.<br />*/}
                    {/*    Исследуйте и вдохновляйтесь вместе со мной!<br />*/}
                    {/*</span>*/}
                    {/*<button*/}
                    {/*    className='border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60  backdrop-blur-2xl mx-auto text-white'>*/}
                    {/*    О себе*/}
                    {/*</button>*/}
                    <FloatingDockDemo/>
                </article>
                <div
                    className='absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute'>
                    <Sparkles
                        density={1800}
                        speed={1.2}
                        color='#48b6ff'
                        direction='top'
                        className='absolute inset-x-0 bottom-0 h-full w-full '
                    />
                </div>
            </section>
            <TrustBrand/>
            <TimelineDemo/>
            <CardProjectso/>
        </>
    );
}

export default index;