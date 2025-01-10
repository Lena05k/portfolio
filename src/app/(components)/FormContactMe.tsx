import { FaTelegram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SparklesTwo } from "@/app/(components)/ui/sparklesTwo";
import React from "react";
import { Cover } from "@/app/(components)/ui/cover";

const FormContactMe = () => {
    return (
        <section className="w-full relative bg-white dark:bg-black p-8">
            <div className="mx-auto max-w-7xl h-screen flex items-center flex-col lg:flex-row px-6 lg:px-12 gap-6">
                {/* Contact Information Block */}
                <div className="p-6 max-w-max z-20">
                    <div className="flex items-center mb-4">
                        <FaTelegram className="text-[rgb(50,115,255)] dark:text-white text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mr-3"/>
                        <p className="text-gray-800 dark:text-gray-300  text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                            Телеграм:{" "}
                            <a
                                href="https://t.me/krupoderova"
                                className="text-[rgb(50,115,255)] dark:text-white hover:underline text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                            >
                                @krupoderova
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-[rgb(50,115,255)] dark:text-white text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mr-3"/>
                        <p className="text-gray-800 dark:text-gray-300 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                            Почта:{" "}
                            <a
                                href="mailto:lena05k@yandex.ru"
                                className="text-[rgb(50,115,255)] dark:text-white hover:underline text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                            >
                                lena05k@yandex.ru
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-green-500 dark:text-white text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mr-3"/>
                        <p className="text-gray-800 dark:text-gray-300 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Москва</p>
                    </div>
                </div>

                {/* Form Block */}
                <div className="p-6 flex-1 z-20">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-6 text-gray-900 dark:bg-gradient-to-b dark:bg-clip-text dark:text-transparent dark:from-[#edeffd] dark:to-[#7b9cda]">
                        Связаться со мной
                    </h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Имя"
                                className="p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                            />
                            <input
                                type="text"
                                placeholder="Кем являетесь?"
                                className="p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                            />
                            <input
                                type="text"
                                placeholder="Контакты"
                                className="p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Компания"
                                className="p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                            />
                            <input
                                type="text"
                                placeholder="Проект"
                                className="p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                            />
                        </div>
                        <textarea
                            placeholder="Сообщение"
                            rows="4"
                            className="w-full p-3 border border-gray-300 dark:border-black  dark:bg-black dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(50,115,255)]"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-7xl text-center relative  dark:bg-gradient-to-b dark:bg-transparent transition-colors"
                        >
                            <Cover className="max-w-7xl">Отправить</Cover>
                        </button>
                    </form>
                </div>
                <div
                    className='absolute inset-0 bottom-0 z-10 w-full overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute'>
                    <SparklesTwo
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

export default FormContactMe;
