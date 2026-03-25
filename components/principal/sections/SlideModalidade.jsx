import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
import { LiMod, Title, Desc } from '../styles';
import BtnYellow from 'components/geral/button/BtnYellow';
import Link from 'next/link';

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
            description: 'Crédito rápido e sem burocracia, sem comprovação de renda e aprovado até para negativados',
            resumo: 'Dinheiro rápido, sem burocracia e com aprovação fácil até pra quem está negativado e não comprova renda. Simples, seguro e acessível pra quem precisa resolver hoje sem dor de cabeça.',
            pagina: '../credluz'
        },
        {
            bgClass: 'bg-modelo-fgts',
            title: 'Antecipação saque FGTS',
            description: 'Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal, sem comprometer seu orçamento',
            resumo: 'Use o seu FGTS agora sem sair do emprego! Antecipe saque-aniversário e receba o valor em poucas horas. Melhor taxa, contratação rápida e 100% digital.',
            pagina: '../saque-aniversario'
        },
        {
            bgClass: 'bg-modelo-inss',
            title: 'Empréstimo consignado INSS/LOAS',
            description: 'Empréstimo com as menores taxas, desconto direto do benefício, sem consulta ao SPC/Serasa',
            resumo: 'Beneficiarios do INSS têm aqui o crédito mais vantajoso do mercado. Parcelas descontadas direto do benefício, juros baixos e sem surpresas. Faça sua simulação e comprove!',
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
                                    className={`group overflow-hidden relative rounded-2xl h-80 lg:h-full ${slide.bgClass} ${activeIndex === index ? 'block':'hidden'}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}>

                                    <div className='h-0 group-hover:h-72 transform duration-400 bg-black/50 inset-x-0 bottom-0 absolute backdrop-blur-md cursor-pointer'>
                                        <div className='grid grid-cols-5'>
                                            <p className='text-white lg:text-2xl text-xl font-semibold tracking-tight p-5 col-span-4'>
                                                {slide.title}
                                            </p>
                                            <button className='lg:text-2xl text-xl flex items-center justify-center bg-yellow-400 rounded-full lg:w-10 lg:h-10 w-7 h-7 text-center text-white col-span-1 m-5'>
                                                <IoIosArrowForward className='group-hover:rotate-90 duration-1000' />
                                            </button>
                                            <p className='text-white col-span-5 px-5 lg:text-base text-sm'>
                                                {slide.resumo}
                                            </p>
                                            <div className='col-span-5 mx-auto mt-2'>
                                                <Link href={slide.pagina} passHref> 
                                                    <BtnYellow className="m-5 text-xl lg:!p-3 !p-2" nome="Saiba mais"/>
                                                </Link>
                                            </div>
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
                                        onMouseLeave={handleMouseLeave}>

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
