import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
import { LiMod, Title, Desc } from '../styles';
import BtnYellow from 'components/geral/button/BtnYellow';
import Link from 'next/link';

const slides = [
    {
        bgClass: 'bg-modelo-credluz',
        title: 'Empréstimo da conta de luz',
        description: 'Crédito rápido e sem burocracia, sem comprovação de renda e aprovado até para negativados',
        resumo: 'Dinheiro rápido, sem burocracia e com aprovação fácil até pra quem está negativado e não comprova renda. Simples, seguro e acessível pra quem precisa resolver hoje sem dor de cabeça.',
        pagina: '../credluz'
    },
    {
        bgClass: 'bg-modelo-fgts',
        title: 'Antecipação saque FGTS',
        description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal, sem comprometer seu orçamento',
        resumo: 'Use o seu FGTS agora sem sair do emprego. Antecipe saque-aniversário e receba o valor em poucas horas. Melhor taxa, contratação rápida e 100% digital.',
        pagina: '../saque-aniversario'
    },
    {
        bgClass: 'bg-modelo-inss',
        title: 'Empréstimo consignado INSS/LOAS',
        description: 'Empréstimo com as menores taxas, desconto direto do benefício, sem consulta ao SPC/Serasa',
        resumo: 'Beneficiários do INSS têm aqui o crédito mais vantajoso do mercado. Parcelas descontadas direto do benefício, juros baixos e sem surpresas. Faça sua simulação e comprove.',
        pagina: '../consignado-inss'
    },
    {
        bgClass: 'bg-modelo-clt',
        title: 'Empréstimo consignado CLT',
        description: 'Crédito consignado para trabalhadores CLT, com desconto em folha, juros reduzidos e limite ampliado',
        resumo: 'Crédito com desconto direto na folha de pagamento, juros bem menores e aprovação rápida. Ideal pra quem tem carteira assinada e quer resolver pendências ou realizar planos sem comprometer o orçamento.',
        pagina: '../credluz-fast'
    },
    {
        bgClass: 'bg-modelo-pix',
        title: 'Pix Parcelado',
        description: 'Dinheiro na hora via Pix, com pagamento em parcelas que cabem no bolso',
        resumo: 'Dinheiro na hora, direto no Pix, e pagamento em parcelas que cabem no seu bolso. Sem burocracia, sem esperar. Uma solução moderna, rápida e segura pra quem precisa resolver agora.',
        pagina: '../credluz-fast'
    },
];

const slideVariants = {
    enter: (direction) => ({
        y: direction >= 0 ? '115%' : '-115%',
        rotate: direction >= 0 ? 1 : -1,
        scale: 1.06,
        opacity: 0,
        filter: 'blur(8px)',
    }),
    center: {
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            y: { type: 'spring', stiffness: 170, damping: 25, mass: 0.9 },
            scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            rotate: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.35, ease: 'easeOut' },
            filter: { duration: 0.45, ease: 'easeOut' },
        },
    },
    exit: (direction) => ({
        y: direction >= 0 ? '-45%' : '45%',
        rotate: direction >= 0 ? -0.8 : 0.8,
        scale: 0.96,
        opacity: 0,
        filter: 'blur(6px)',
        transition: {
            y: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 0.32, ease: 'easeIn' },
            rotate: { duration: 0.32, ease: 'easeIn' },
            opacity: { duration: 0.22, ease: 'easeIn' },
            filter: { duration: 0.3, ease: 'easeIn' },
        },
    }),
};

const getDirection = (from, to, total) => {
    if (from === to) return 0;

    const forwardDistance = (to - from + total) % total;
    const backwardDistance = (from - to + total) % total;

    return forwardDistance <= backwardDistance ? 1 : -1;
};

export default function ModSlide() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setDirection(1);
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const goToSlide = (index) => {
        if (index === activeIndex) return;

        setDirection(getDirection(activeIndex, index, slides.length));
        setActiveIndex(index);
    };

    const handleMouseEnter = (index) => {
        setIsHovered(true);
        goToSlide(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const activeSlide = slides[activeIndex];

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
                        <div className='col-span-1 lg:mr-12 lg:flex'>
                            <div
                                className='relative overflow-hidden rounded-2xl h-80 lg:h-full lg:flex-1'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <AnimatePresence custom={direction} initial={false} mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className={`group absolute inset-0 overflow-hidden rounded-2xl ${activeSlide.bgClass}`}
                                    >
                                        <motion.div
                                            className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20'
                                            animate={{ y: ['-3%', '3%', '-3%'], opacity: [0.32, 0.56, 0.32] }}
                                            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                                        />

                                        <div className='absolute inset-x-0 bottom-0 translate-y-[67%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] bg-black/55 backdrop-blur-md cursor-pointer'>
                                            <motion.div
                                                key={`content-${activeIndex}`}
                                                initial={{ opacity: 0, y: 24 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                className='grid grid-cols-5'
                                            >
                                                <p className='text-white lg:text-2xl text-xl font-semibold tracking-tight p-5 col-span-4 mb-5'>
                                                    {activeSlide.title}
                                                </p>
                                                <button className='lg:text-2xl text-xl flex items-center justify-center bg-yellow-400 rounded-full lg:w-10 lg:h-10 w-7 h-7 text-center text-white col-span-1 m-5'>
                                                    <IoIosArrowForward className='group-hover:rotate-90 duration-700' />
                                                </button>
                                                
                                                <p className='text-white col-span-5 px-5 lg:text-base text-sm'>
                                                    {activeSlide.resumo}
                                                </p>
                                                <div className='col-span-5 mt-2 flex justify-center'>
                                                    <Link className='inline-flex justify-center mb-3' href={activeSlide.pagina} passHref>
                                                        <BtnYellow className="text-xl lg:!p-3 !p-2 !px-16 !lg:px-0" nome="Saiba mais" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className='col-span-1'>
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

                            <div className='lg:hidden'>
                                <div className='flex justify-center gap-2'>
                                    {slides.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            className={`h-2 rounded-2xl ${activeIndex === index ? 'bg-blue-600' : 'bg-blue-300 hover:bg-blue-700'}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            initial={false}
                                            animate={{
                                                opacity: activeIndex === index ? 1 : 0.55,
                                                width: activeIndex === index ? 64 : 44,
                                                y: activeIndex === index ? -1 : 0
                                            }}
                                            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
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
