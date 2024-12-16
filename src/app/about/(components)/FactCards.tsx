import Image from "next/image";
import React from "react";

interface Card {
    title: string;
    description?: string;
    imageUrl?: string;
    isLarge?: boolean;
}

const cards: Card[] = [
    {
        title: 'Я начала разрабатывать веб в 2020 и с тех пор не останавливаюсь',
    },
    {
        title: 'Выпускница МГТУ им. Н. Э. Баумана',
        description: 'По специальности автоматизации технологических процессов и производств',
        imageUrl: '/images/emblem.png',
    },
    {
        title: 'Была спортстменкой по горнолыжному',
        // imageUrl: '/images/skiing.jpg',
        // isLarge: true,
    },
    {
        title: 'Я живу в Москве, в России',
    },
    {
        title: 'Я в Тебердинском заповеднике на Кавказе',
        // imageUrl: '/images/quad.jpg',
    },
    {
        title: 'Была спикером на фестивале "Мы услышим" в МТС',
        description:
            'Представляла проект "Онлайн платформа для неслышащих специалистов и клиентов".',
        // imageUrl: '/images/spiker.jpg',
    },
    {
        title: 'Участвовала в инклюзивных проектах',
        description:
            'На последнем проекте я являлась скрам-мастером, руководила командой над созданием "Онлайн платформы для неслышащих специалистов и клиентов".',
    },
    {
        title: 'Летом каждые выходные преодолеваю 30 км на сап-доске на реке',
        // imageUrl: '/images/sup.jpg',
    },
];

const FactCards = () => {

    return (
        <section className="grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6 auto-rows-[minmax(10rem,_auto)]">
            <div className="grid grid-rows-2 gap-6">
                {cards.slice(0, 2).map((card, index) => (
                    <div
                        key={index}
                        className="p-4 bg-neutral-800 text-white rounded-lg shadow-md flex items-start"
                    >
                        {card.imageUrl && (
                            <div className="mr-4 flex-shrink-0">
                                <Image
                                    src={card.imageUrl}
                                    alt={card.title}
                                    width={70}
                                    height={70}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                        )}
                        <div>
                            <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                            {card.description && (
                                <p className="text-sm text-neutral-300 mt-1">{card.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="p-4 bg-neutral-800 text-white rounded-lg shadow-md flex flex-col justify-between row-span-2"
            >
                {/*<Image*/}
                {/*    src="/images/skiing.jpg"*/}
                {/*    alt="У меня есть разряд МС по горнолыжному"*/}
                {/*    width={400}*/}
                {/*    height={300}*/}
                {/*    className="rounded-lg object-cover mb-2"*/}
                {/*/>*/}
                <h2 className="text-lg font-bold mt-2">У меня есть разряд МС по горнолыжному</h2>
            </div>
            {cards.slice(3).map((card, index) => (
                <div
                    key={index}
                    className={`p-4 bg-neutral-800 text-white rounded-lg shadow-md flex flex-col justify-between ${
                        card.isLarge ? 'col-span-2' : ''
                    }`}
                >
                    {card.imageUrl && (
                        <div className="mb-2">
                            {/*<Image*/}
                            {/*    src={card.imageUrl}*/}
                            {/*    alt={card.title}*/}
                            {/*    width={400}*/}
                            {/*    height={300}*/}
                            {/*    className="rounded-lg object-cover"*/}
                            {/*/>*/}
                        </div>
                    )}
                    <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                    {card.description && (
                        <p className="text-sm text-neutral-300">{card.description}</p>
                    )}
                </div>
            ))}
        </section>
    );
}

export default FactCards;
