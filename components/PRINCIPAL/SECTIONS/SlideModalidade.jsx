import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
import { LiMod, Title, Desc } from '../styles';

export default function ModSlide() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 5000); // Troca de slide a cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section>

            <div className='container-custom lg:px-8 py-[10vh] grid'>
                
                <div className='content-center'>

                    <h1 className='text-blue-950 saturate-150 lg:text-4xl text-2xl font-semibold tracking-tight text-center lg:mb-10 mb-8 lg:mx-24'>
                        Descubra uma variedade de opções de empréstimos,
                        <span className='text-blue-400'> tudo em um só lugar!</span> 
                    </h1>
                
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        
                        <div className='col-span-1 lg:mr-12'>
                                
                            <div className={`bg-[url(../public/img/modelo_credluz.png)] bg-cover bg-no-repeat group overflow-hidden relative rounded-2xl h-80 lg:h-full ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                                <div className='h-0 group-hover:h-28 transform duration-400 bg-black/30 inset-x-0 bottom-0 absolute backdrop-blur-md cursor-pointer'>
                                    <div className='grid grid-cols-5'>
                                        <p className='text-white p-5 col-span-4'>Empréstimo débito na conta de luz</p>
                                        <button className='text-2xl flex items-center justify-center bg-yellow-400 rounded-full w-10 h-10 text-center text-white col-span-1 m-5'>
                                            <IoIosArrowForward/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={`bg-[url(../public/img/modelo_fgts.png)] bg-cover bg-no-repeat group overflow-hidden relative rounded-2xl h-80 lg:h-full ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                                <div className='h-0 group-hover:h-28 transform duration-400 bg-black/30 inset-x-0 bottom-0 absolute backdrop-blur-md cursor-pointer'>
                                    <div className='grid grid-cols-5'>
                                        <p className='text-white p-5 col-span-4'>Saque Antecipado do FGTS</p>
                                        <button className='text-2xl flex items-center justify-center bg-yellow-400 rounded-full w-10 h-10 text-center text-white col-span-1 m-5'>
                                            <IoIosArrowForward/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                                
                            <div className={`bg-[url(../public/img/modelo_inss.png)] bg-cover bg-no-repeat group overflow-hidden relative rounded-2xl h-80 lg:h-full ${activeIndex === 2 ? 'block' : 'hidden'}`}>
                                <div className='h-0 group-hover:h-28 transform duration-400 bg-black/30 inset-x-0 bottom-0 absolute backdrop-blur-md cursor-pointer'>
                                    <div className='grid grid-cols-5'>
                                        <p className='text-white p-5 col-span-4'>Empréstimo Consignado INSS</p>
                                        <button className='text-2xl flex items-center justify-center bg-yellow-400 rounded-full w-10 h-10 text-center text-white col-span-1 m-5'>
                                            <IoIosArrowForward/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`bg-[url(../public/img/modelo_ep.png)] bg-cover bg-no-repeat group overflow-hidden relative rounded-2xl h-80 lg:h-full ${activeIndex === 3 ? 'block' : 'hidden'}`}>
                                <div className='h-0 group-hover:h-28 transform duration-400 bg-black/30 inset-x-0 bottom-0 absolute backdrop-blur-md cursor-pointer'>
                                    <div className='grid grid-cols-5'>
                                        <p className='text-white p-5 col-span-4'>Empréstimo Pessoal</p>
                                        <button className='text-2xl flex items-center justify-center bg-yellow-400 rounded-full w-10 h-10 text-center text-white col-span-1 m-5'>
                                            <IoIosArrowForward/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className='col-span-1'>
                            <ul>
                                <LiMod $isActive={activeIndex === 0} onClick={() => setActiveIndex(0)} className={`lg:block ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                                    <Title>Empréstimo da conta de luz</Title>
                                    <Desc>
                                        Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                        Antecipe seu saldo FGTS e realize o que quiser. S
                                    </Desc>
                                </LiMod>
                                    
                                <LiMod $isActive={activeIndex === 1} onClick={() => setActiveIndex(1)} className={`lg:block ${activeIndex === 1 ? 'block' : 'hidden'}`}>
                                    <Title>Antecipação saque FGTS</Title>
                                    <Desc>
                                        Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                        Antecipe seu saldo FGTS e realize o que qu
                                    </Desc>
                                </LiMod>
                                    
                                <LiMod $isActive={activeIndex === 2} onClick={() => setActiveIndex(2)} className={`lg:block ${activeIndex === 2 ? 'block' : 'hidden'}`}>
                                    <Title>Empréstimo consignado INSS</Title>
                                    <Desc>
                                        Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                        Antecipe seu saldo FGTS e real
                                    </Desc>
                                </LiMod>
                                    
                                <LiMod $isActive={activeIndex === 3} onClick={() => setActiveIndex(3)} className={`lg:block ${activeIndex === 3 ? 'block' : 'hidden'}`}>
                                    <Title>Empréstimo Pessoal</Title>
                                    <Desc>
                                        Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                        Antecipe seu saldo FGTS e rea
                                    </Desc>
                                </LiMod>
                            </ul>

                            <div className='lg:hidden'>
                                <div className='flex justify-center gap-2'>
                                    {[0, 1, 2, 3].map((index) => (
                                        <motion.div
                                            key={index}
                                            className={`h-2 w-12 rounded-2xl ${activeIndex === index ? 'bg-blue-600' : 'bg-blue-300 hover:bg-blue-700'}`}
                                            onClick={() => handleIndicatorClick(index)}
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
