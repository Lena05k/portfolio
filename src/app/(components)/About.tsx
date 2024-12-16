import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        const words = document.querySelectorAll('.word');

        words.forEach((word, index) => {
            gsap.fromTo(
                word,
                {
                    opacity: 0,
                    scale: 0.1, // Начальный масштаб
                    y: 30 // Начальное смещение по Y
                },
                {
                    opacity: 1,
                    scale: 1, // Окончательный масштаб 100% (обычный размер)
                    y: 0, // Возврат к изначальной позиции
                    scrollTrigger: {
                        trigger: word,
                        start: 'top 90%',
                        end: 'top 50%',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        markers: false // Отключаем маркеры после теста
                    },
                    duration: 1, // Оптимальная длительность
                    delay: index * 0.1, // Задержка для появления каждого слова
                    ease: 'power3.out', // Плавное замедление
                    stagger: 0.1 // Удалил объект stagger и заменил на простое значение
                }
            );
        });

        gsap.fromTo(
            ".animated-portrait", // Класс для портрета
            { opacity: 0, scale: 0.8, y: 50 }, // Начальное состояние
            {
                opacity: 1,
                scale: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".animated-portrait", // Элемент, который отслеживается
                    start: "top 80%", // Когда портрет на 80% экрана
                    end: "top 50%", // Когда портрет достигает середины экрана
                    scrub: 1, // Плавность анимации при скроллинге
                },
                duration: 1.2,
            }
        );


        // Обновление ScrollTrigger
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="section visible w-full my-10 p-12 relative">
            <div
                className="mx-auto flex h-screen justify-center items-center overflow-hidden px-[2.85rem] relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="story-p1-box text-justify">
                            <span className="story-p1 story-splt words splitting block">
                                {[
                                    "Жизнь", "на", "полной", "скорости", "—", "это", "про", "меня.",
                                    "Я", "фронтенд-разработчик,", "создающий", "яркие", "и", "удобные",
                                    "интерфейсы.", "Воплощаю", "идеи", "в", "реальность,", "нахожу",
                                    "элегантные", "решения", "и", "делаю", "опыт", "пользователей",
                                    "незабываемым.", "Работаю", "в", "автоматизации", "бизнес-процессов,",
                                    "финтех,", "инклюзивных", "проектах", "и", "мобильных", "приложениях.",
                                    "Люблю", "учиться", "и", "совершенствоваться", "с", "каждым",
                                    "новым", "проектом.", "Склонна", "к", "приключениям", "и", "в",
                                    "жизни:", "люблю", "горные", "лыжи,", "экстрим", "и", "новые",
                                    "вершины."
                                ].map((word, index) => (
                                    <>
                                    <span
                                        key={index}
                                        className="word inline-block bg-gradient-to-b from-blue-400 to-blue-600 dark:from-[#edeffd] dark:to-[#7b9cda]
                                        bg-clip-text text-2xl md:text-3xl lg:text-5xl font-bold text-justify text-transparent leading-tight"
                                    >
                                      {word}
                                    </span>
                                        {index < 59 && <span className="whitespace inline-block">&nbsp;</span>}
                                    </>
                                ))}
                            </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;