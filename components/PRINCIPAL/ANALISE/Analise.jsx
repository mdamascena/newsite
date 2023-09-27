import Image from "next/image"
import analise from '../../../public/img/tela_acomp.png'
import step from '../../../public/img/exemp_step.png'
import desc from '../../../public/img/exemp_desc.png'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {LuUsers} from 'react-icons/lu'
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
                setMovStep('translate-y-[115px] -translate-x-[50px]');
                setMovInfo('translate-y-[250px] translate-x-[50px]');
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
        <section className='poppins px-8 lg:px-44 bg-white select-none'>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 py-16'>
                <div className='col-span-1 mb-8 lg:mb-0 flex lg:justify-end justify-center lg:mr-16'>
                    <div className="bg"></div>
                    <Image className={`rounded-3xl duration-1000 ${movImg}`} width={230} src={analise} alt='' />
                    <Image className={`border-slate-300 border-5 rounded-xl shadow-lg duration-1000 absolute delay-700 ${movStep}`} width={230} src={step} alt='' />
                    <Image className={`border-slate-300 border-5 rounded-xl shadow-lg duration-1000 absolute delay-1000 ${movInfo}`} width={240} src={desc} alt='' />
                </div>
                
                <div className='col-span-1 lg:pl-5 lg:my-auto'>    
                    <div className={`duration-1000 delay-500 ${movDesc}`}>
                        <h2 className="text-4xl text-blue-600 font-semibold mb-2 tracking-tight">Não fique sem resposta</h2>

                        <Card>
                            <p className="mb-3">
                                Sabemos que você precisa de respostas rápidas. Por isso, na Valor Real você pode acompanhar 
                                a análise diretamente pelo site em tempo real. Assim, você não fica no 
                                escuro e fica por dentro de tudo de forma simples e transparente.
                            </p>

                            <p className="">
                                Em todos os status, informamos prazos e qual é o próximo passo, dessa forma você 
                                tem uma clara previsão de quanto tempo falta para receber seu dinheiro.
                            </p>
                        </Card>
                        
                        <p className=" text-slate-400 my-6">
                            Mas caso fique com alguma dúvida, poderá contar com nosso time de atendimento pelo 0800 ou WhatsApp.
                        </p>

                    </div>
                    
                   
                    

                </div>

            </div>

        </section>
        
    )
}