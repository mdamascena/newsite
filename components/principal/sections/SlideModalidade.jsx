import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
import { LiMod, Title, Desc } from '../styles';

export default function ModSlide() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return; // Pausa o intervalo ao passar o mouse.

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 5000); // Troca automática a cada 5 segundos.

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar.
    }, [isHovered]);

    const handleMouseEnter = (index) => {
        setIsHovered(true); // Pausa o intervalo.
        setActiveIndex(index); // Altera para o slide correspondente.
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Retoma o intervalo.
    };

    const slides = [
        {
            bgClass: 'bg-modelo-credluz',
            title: 'Empréstimo da conta de luz',
            description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal.',
        },
        {
            bgClass: 'bg-modelo-fgts',
            title: 'Antecipação saque FGTS',
            description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal.',
        },
        {
            bgClass: 'bg-modelo-inss',
            title: 'Empréstimo consignado INSS/LOAS',
            description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal.',
        },
        {
            bgClass: 'bg-modelo-clt',
            title: 'Empréstimo consignado CLT',
            description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal.',
        },
        {
            bgClass: 'bg-modelo-pix',
            title: 'Pix Parcelado',
            description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal.',
        },
    ];

    return (
        <section>
            <div className='container-custom lg:px-16 py-[10vh] grid'>
                <div className='content-center'>

                    <div className='grid grid-cols-2'>

                        <h1 className='lg:col-span-1 col-span-2 text-slate-400 lg:text-4xl text-2xl tracking-tight text-center lg:mb-10 mb-8'>
                            Várias opções de crédito
                            <span className='text-blue-600'> tudo em um só lugar!</span>
                        </h1>

                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='col-span-1 lg:mr-12'>
                            {/* Slides */}
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`group overflow-hidden relative rounded-2xl h-80 lg:h-full ${slide.bgClass} ${activeIndex === index ? 'block' : 'hidden'}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className='h-0 group-hover:h-28 transform duration-400 bg-black/30 inset-x-0 bottom-0 absolute backdrop-blur-md cursor-pointer'>
                                        <div className='grid grid-cols-5'>
                                            <p className='text-white p-5 col-span-4'>
                                                {slide.title}
                                            </p>
                                            <button className='text-2xl flex items-center justify-center bg-yellow-400 rounded-full w-10 h-10 text-center text-white col-span-1 m-5'>
                                                <IoIosArrowForward />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='col-span-1'>
                            {/* Títulos e descrições */}
                            <ul>
                                {slides.map((slide, index) => (
                                    <LiMod
                                        key={index}
                                        $isActive={activeIndex === index}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Title>{slide.title}</Title>
                                        <Desc $isActive={activeIndex === index}>
                                            {slide.description}
                                        </Desc>
                                    </LiMod>
                                ))}
                            </ul>

                            {/* Indicadores */}
                            <div className='lg:hidden'>
                                <div className='flex justify-center gap-2'>
                                    {slides.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            className={`h-2 w-12 rounded-2xl ${activeIndex === index ? 'bg-blue-600' : 'bg-blue-300 hover:bg-blue-700'}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            initial={{ opacity: 0.5 }}
                                            animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
