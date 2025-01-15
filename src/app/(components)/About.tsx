import React from "react";
import { BsLightningCharge } from "react-icons/bs";

const About = () => {

    return (
        <section id="about"
                 className="w-full my-10 p-4 sm:p-4 lg:p-20 relative flex flex-none flex-col gap-7 justify-start pointer-events-auto">
            <div className="flex flex-none flex-col lg:flex-row flex-nowrap justify-start items-start content-start gap-6 lg:gap-0 ">
                <div
                    className="flex flex-none flex-row lg:flex-col flex-nowrap items-end justify-between content-end lg:items-start lg:justify-start lg:content-start gap-5 md:gap-10 h-min lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[382px] overflow-visible py-4 sm:py-4 lg:p-0 sticky  will-change-transform">
                    <div
                        className="flex flex-none flex-col flex-nowrap items-start justify-start content-start self-stretch gap-3 lg:gap-5 w-[155px] h-min overflow-visible p-0 relative lg:w-auto">
                        <h4 className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black dark:text-white">Услуги</h4>
                        <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-[#3273ff] dark:bg-gradient-to-b dark:bg-clip-text dark:text-transparent dark:from-[#edeffd] dark:to-[#7b9cda] font-semibold">
                            Активно ищу новые профессиональные возможности
                        </p>
                    </div>
                    <div
                        className="flex flex-row items-center border border-[#48b6ff] rounded-full px-4 py-2 sm:px-4 sm:py-2 xl:px-6 xl:py-4 2xl:px-8 2xl:py-6">
                        <BsLightningCharge
                            className="text-black dark:text-white font-bold text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mr-3"/>
                        <a href="./#work"
                           className="text-[12px] sm:text-sm md:text-md lg:text-md xl:text-xl 2xl:text-2xl font-bold text-black dark:text-white">Смотреть
                            работу</a>
                    </div>
                </div>
                <div
                    className="self-stretch flex-none h-auto overflow-hidden relative lg:w-[10%] xl:w-[11%] 2xl:w-[12%]"></div>
                <div
                    className="flex flex-col gap-3 sm:gap-5 max-w-[528px] lg:max-w-none lg:gap-10 items-start sm:items-center justify-start">
                    <div className="flex flex-row flex-nowrap">
                        <div className="max-w-[328px] lg:max-w-7xl">
                            <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black dark:text-white">Я
                                Frontend разработчик с более чем
                                2-ым опытом разработки клиентских интерфейсов веб-сайтов, мобильного приложения и
                                ПО</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap">
                        <div className="max-w-[328px] lg:max-w-7xl">
                            <p className="text-sm sm:text-md md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-black dark:text-white">Как
                                Frontend разработчик, помогаю компаниям создавать&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] my-2 dark:px-2 dark:py-0.5">высокачественные</span > веб-приложения.
                                Сосредочиваюсь на&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] my-2 dark:px-2 dark:py-0.5">оптимизации</span> интерфейсов
                                для удобства и адаптивности. Улучшаю&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] my-2 dark:px-2 dark:py-0.5">производительности кода</span>,
                                повышаю&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] my-2 dark:px-2 dark:py-0.5">скорость работы</span> и&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] my-2 dark:px-2 dark:py-0.5">надежной платформы</span>
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap">
                        <div className="max-w-[328px] lg:max-w-7xl">
                            <p className="text-sm sm:text-md md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-black dark:text-white">
                                Как командный игрок, я делюсь знаниями с коллегами, занимаюсь&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] dark:my-2 dark:px-2 dark:py-0.5">наставничеством</span>&nbsp;и внедряю&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] dark:my-2 dark:px-2 dark:py-0.5">лучшие практики разработки</span>.
                                Вместе с командой достигаю&nbsp;
                                <span
                                    className="font-bold text-[#3273ff] bg-blue-500/20 dark:text-blue-200 dark:bg-[rgb(59,130,246,0.2)] dark:my-2 dark:px-2 dark:py-0.5">новых высот</span>&nbsp;
                                в проектах.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-none flex-col flex-nowrap text-[12px] sm:text-md md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white gap-1">
                <div className="flex flex-row">
                    <div className="flex-none md:w-[10%] lg:w-[5%] xl:w-[10%] 2xl:w-[10%]"></div>
                    <div className="flex flex-col rounded-2xl bg-[#3273ff] dark:bg-opacity-10 p-2 lg:p-3 xl:p-5">
                        <h2 className="font-bold">Frontend</h2>
                        <p>TypeScript / JavaScript / React / Next.js / Vue / HTML5 / CSS3 / TailwindCSS / Sass /
                            Bootstrap / MUI / i18Next</p>
                    </div>
                    <div className="flex-none md:w-[40%] lg:w-[20%] xl:w-[40%] 2xl:w-[60%]"></div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-none md:w-[25%] xl:w-[30%] 2xl:w-[30%]"></div>
                    <div className="flex-none md:w-[43%] xl:w-[45%] 2xl:w-[55%]"></div>
                    <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-[#3273ff] dark:bg-opacity-10 p-2 lg:p-3 xl:p-5">
                        <h2 className="font-bold">Backend</h2>
                        <p>Node.js / Socket.IO / Firebase</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-none md:w-[20%] xl:w-[37%] 2xl:w-[50%]"></div>
                    <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-[#3273ff] dark:bg-opacity-10 p-2 lg:p-3 xl:p-5">
                        <h2 className="font-bold">Сборка и инструменты разработки</h2>
                        <p>Webpack / Vite / Git / GitHub / GitLab / GitHub Actions / Eslint</p>
                    </div>
                    <div className="flex-none md:w-[15%] lg:w-[w-18] xl:w-[30%] 2xl:w-[20%]"></div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col rounded-2xl bg-[#3273ff] dark:bg-opacity-10 p-2 lg:p-3 xl:p-5">
                        <h2 className="font-bold">Управление состоянием и запросами</h2>
                        <p>REST API / Redux / MobX / React Router / React Query / Axios / Formik</p>
                    </div>
                    <div className="flex-none lg:w-[30%] xl:w-[40%] 2xl:w-[40%]"></div>
                    <div className="flex-none lg:w-[10%] xl:w-[25%] 2xl:w-[30%]"></div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-none md:w-[40%] xl:w-[40%] 2xl:w-[40%]"></div>
                    <div className="flex-none md:w-[40%] xl:w-[40%] 2xl:w-[40%]"></div>
                    <div className="flex flex-col gap-2 rounded-2xl bg-[#3273ff] dark:bg-opacity-10 p-2 lg:p-3 xl:p-5">
                        <h2 className="font-bold">Тестирование</h2>
                        <p>Jest / Cypress</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-none md:w-[30%] xl:w-[40%] 2xl:w-[40%]"></div>
                    <div className="flex flex-col gap-2 rounded-2xl bg-[#3273ff] dark:bg-opacity-10 p-2 lg:p-5">
                        <h2 className="font-bold">Управление проектами и дизайн</h2>
                        <p>Figma / Jira / i18Next</p>
                    </div>
                    <div className="flex-none md:w-[30%] xl:w-[30%] 2xl:w-[38%]"></div>
                </div>
            </div>

        </section>
    );
};

export default About;