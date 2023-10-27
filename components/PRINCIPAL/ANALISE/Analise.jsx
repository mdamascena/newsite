import Image from "next/image"
import analise from '../../../public/img/tela_acomp.png'
import step from '../../../public/img/exemp_step.png'
import desc from '../../../public/img/exemp_desc.png'
import {BsBroadcast} from 'react-icons/bs'
import {BsAppIndicator} from 'react-icons/bs'
import {BsChatLeftDots} from 'react-icons/bs'
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components'

const Card = tw.div`
    bg-slate-200 
    saturate-150 
    text-slate-400
    rounded-xl 
    p-8
    duration-1000
`

export default function Regras(){
    
    const [movImg, setMovImg] = useState ('opacity-0 scale-0');
    const [movCard, setMovCard] = useState ('-translate-x-[150px] lg:translate-x-[150px] opacity-0');
    const [movDesc, setMovDesc] = useState ('opacity-0');
    const [movStep, setMovStep] = useState ('opacity-0 scale-0');
    const [movInfo, setMovInfo] = useState ('opacity-0 scale-0');
    
    useEffect(
        () =>{
            window.addEventListener('scroll', () => {
            
            if(window.scrollY > 3200){
                setMovImg('');
                setMovCard('');
                setMovDesc('');
                setMovStep('lg:translate-y-[115px] translate-y-[86px] lg:-translate-x-[50px] -translate-x-[30px]');
                setMovInfo('lg:translate-y-[250px] translate-y-[186px] translate-x-[20px] lg:translate-x-[50px] ');
            } else{
                setMovImg('opacity-0 scale-0');
                setMovCard('-translate-x-[150px] lg:translate-x-[150px] opacity-0');
                setMovDesc('opacity-0');
                setMovStep('opacity-0 scale-0');
                setMovInfo('opacity-0 scale-0');
            }
        });
    },[]);

    return(
        <section className='poppins bg-white select-none'>
            <div className="relative">
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:py-16 p-8 lg:px-44'>
                    
                    <div className='col-span-2 z-10 lg:mr-20'>    
                        <div className={`duration-1000 delay-500 ${movDesc} lg:mt-16`}>
                            
                            <div className="text-3xl lg:text-5xl font-bold mb-4 tracking-tighter">
                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 saturate-150">
                                    Não fique no escuro sem saber o que está rolando!
                                </span>
                            </div>
                            
                            <div className="text-slate-400 mt-8">
                                <p className="mb-4">
                                    Aqui ValoReal você pode acompanhar a análise diretamente pelo site em tempo real.
                                </p>

                                <p className="">
                                    Mas se pintar uma dúvida, é só chamar a gente pelo WhatsApp ou 0800.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-5">
                                
                                <div className="bg-slate-100 rounded-lg col-span-1 flex items-center p-3 shadow-md">
                                    <div className="bg-blue-500 text-white text-2xl rounded-lg p-2 flex items-center">
                                        <BsBroadcast/>
                                    </div>
                                    <div className="relative">
                                        <span className="rounded-full p-2 absolute bg-yellow-400 bottom-2 -left-3 animate-ping"/>
                                        <span className="rounded-full p-2 absolute bg-yellow-400 bottom-2 -left-3"/>
                                    </div>
                                    
                                    <div className="text-slate-400 leading-4 ml-2 text-sm">
                                        <span>Acompanhamento em tempo real</span>
                                    </div>
                                </div>
                                
                                <div className="bg-slate-100 rounded-lg col-span-1 flex items-center p-3 shadow-md">
                                    <div className="bg-blue-500 text-white text-2xl rounded-lg p-2 flex items-center">
                                        <BsAppIndicator/>
                                    </div>
                                    <div className="text-slate-400 leading-4 ml-2 text-sm">
                                        <span>Notificação por SMS e e-mail</span>
                                    </div>
                                </div>

                                <div className="bg-slate-100 rounded-lg flex items-center p-3 shadow-md">
                                    <div className="bg-blue-500 text-white text-2xl rounded-lg p-2 flex items-center">
                                        <BsChatLeftDots/>
                                    </div>
                                    <div className="text-slate-400 leading-4 ml-2 text-sm">
                                        <span>Suporte via 0800 ou WhatsApp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 flex lg:justify-center justify-center z-10 relative'>
                        <div className="hidden lg:block">
                            <div className="flex">
                                <Image className={`duration-1000 delay-700 ${movImg} z-10`} width={230} src={analise} alt=''/>
                                <Image className={`border-slate-300 border-5 rounded-xl shadow-lg duration-700 absolute delay-1000 ${movStep} z-10`} width={230} src={step} alt='' />
                                <Image className={`border-slate-300 border-5 rounded-xl shadow-lg duration-1000 absolute delay-1000 ${movInfo} z-10`} width={240} src={desc} alt='' />
                            </div>
                            <span className={`bg-gradient-to-br from-blue-950 via-blue-600 to-cyan-400 saturate-150 p-[13rem] absolute rounded-full bottom-6 shadow-xl duration-1000 ${movImg}`}/>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <div className="flex">
                                <Image className={`duration-1000 delay-700 ${movImg} z-10`} width={170} src={analise} alt=''/>
                                <Image className={`border-slate-300 border-5 rounded-xl shadow-lg duration-700 absolute delay-1000 ${movStep} z-10`} width={170} src={step} alt='' />
                                <Image className={`border-slate-300 border-5 rounded-xl shadow-lg duration-1000 absolute delay-1000 ${movInfo} z-10`} width={180} src={desc} alt='' />
                            </div>
                            <span className={`bg-gradient-to-br from-blue-950 via-blue-600 to-cyan-400 saturate-150 p-[9rem] absolute rounded-full bottom-7 shadow-xl duration-1000 ${movImg}`}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}