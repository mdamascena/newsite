import Image from "next/image"
import { useCallback, useEffect, useState } from 'react'
import celular from '../../../public/img/cel_principal_mockap.png'
import{HiOutlineClipboardDocumentList} from 'react-icons/hi2'
import {PiSignature} from 'react-icons/Pi'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {CiCalculator1} from 'react-icons/ci'
import tw from 'tailwind-styled-components'


const NumCard = tw.span`
    relative 
    bottom-52
    font-bold 
    text-[15rem] 
    bg-clip-text 
    text-transparent 
    bg-gradient-to-t 
    from-blue-600/10
    via-blue-600/80
    to-blue-400
`

export default function ComoFunciona(){

    const [scrollCF, setScrollCF] = useState(' -translate-x-[150px] -translate-y-full opacity-0');
    const [scrollCel, setScrollCel] = useState('opacity-0 rotate-90 -translate-x-[450px]');
    const [scrollDesc, setScrollDesc] = useState('opacity-0 lg:translate-x-[170px] lg:translate-x-[170px]');

    useEffect(
        () => {
            window.addEventListener('scroll', () => {

                if (window.scrollY > 1000) {
                    setScrollCel('');
                    setScrollDesc('');
                } else {
                    setScrollCel('opacity-0 rotate-90 -translate-x-[450px]');
                    setScrollDesc('opacity-0 lg:translate-x-[170px] lg:translate-x-[170px]');
                }
                
                
                if (window.scrollY > 1520) {
                    setScrollCF('');
                } else {
                    setScrollCF(' -translate-x-[150px] -translate-y-full opacity-0');
                }
            });
        }, []
    )

    return(
        
        <section className="poppins bg-white select-none">
            
            <div className="grid grid-cols-2 overflow-y-hidden lg:bg-fixed bgComoFuncionaMain">
                <div className="col-span-1">

                </div>
                <div className="col-span-1 text-white lg:text-start">
                    <h3 className="text-2xl lg:text-5xl tracking-tight my-12 lg:my-32 font-semibold select-none">Como Funciona</h3>
                </div>
            </div>
            
            <div className="grid grid-cols-2 px-8 lg:px-44 text-slate-400">

                <figure className="col-span-1 relative bottom-20 lg:bottom-44 lg:w-96 w-36 lg:ml-40">
                    <Image className={`duration-1000 ${scrollCel}`} src={celular} alt=''/>
                </figure>
            
                <div className="col-span-1 lg:hidden">
                    <h4 className="font-bold text-3xl mb-6 text-center mt-9">É simples!</h4>
                </div>

                <div className={`lg:col-span-1 col-span-2 lg:mt-10 duration-1000 delay-1000 ${scrollDesc}`}>
                    <h4 className="font-bold text-4xl mb-6 hidden lg:block">É super simples!</h4>
                    <p className="lg:text-xl lg:bottom-0 bottom-16 relative select-none">
                        Todo processo é realizado ONLINE, pelo celular ou computador sem sair de casa.  
                        E, se surgirem dúvidas, a nossa equipe de consultores está pronta para te orientar passo a passo. 
                    </p>
                </div>
            </div>
            
            <div className="px-8 lg:px-44 grid grid-cols-1 lg:grid-cols-4 relative bottom-24 gap-x-2">

                <div className="hover:scale-110 col-span-1 duration-200">
                    <div className={`flex h-72 duration-1000 ease-in-out ${scrollCF}`}>
                        <div className="bg-blue-700 p-5 mb-5 rounded-xl hover:shadow-2xl">
                            
                            <div className="col-span-1 my-8">
                                <div className="flex flex-row items-center">
                                    <CiCalculator1 className="text-blue-50 bg-blue-500 p-2 text-6xl rounded-xl"/>
                                    <h5 className="text-blue-200 text-xl tracking-tight font-bold ml-5 z-10">Simule o crédito</h5>
                                </div>
                            </div>

                            <div className="text-center flex">
                                <div className="z-10">
                                    <p className="tracking-tight leading-5 text-white text-sm">
                                        Escolha o valor do empréstimo e defina em quantas parcelas deseja dividir em nosso simulador.
                                    </p>
                                </div>
                                
                                <div className="absolute">
                                    <NumCard className="left-36">1</NumCard>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hover:scale-110 col-span-1 duration-200">
                    <div className={`flex h-72 duration-1000 ease-in-out delay-200 ${scrollCF}`}>
                        <div className="bg-blue-700 p-5 mb-5 rounded-xl hover:shadow-2xl">
                            
                            <div className="col-span-1 my-8">
                                <div className="flex flex-row items-center">
                                    <HiOutlineClipboardDocumentList className="text-blue-50 bg-blue-500 p-2 text-6xl rounded-xl"/>
                                    <h5 className="text-blue-200 text-xl tracking-tight font-bold ml-5 z-10">Preencha os dados</h5>
                                </div>
                            </div>

                            <div className="text-center flex">
                                <div className="z-10">
                                    <p className="tracking-tight leading-5 text-white text-sm">
                                        Conte um pouco sobre você pra gente, informe alguns dados básicos. Assim agilizamos a sua análise de crédito.
                                    </p>
                                </div>
                                
                                <div className="absolute">
                                    <NumCard className="left-28">2</NumCard>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hover:scale-110 col-span-1 duration-200">
                    <div className={`flex h-72 duration-1000 ease-in-out delay-300 ${scrollCF}`}>
                        <div className="bg-blue-700 p-5 mb-5 rounded-xl hover:shadow-2xl">
                            
                            <div className="col-span-1 my-8">
                                <div className="flex flex-row items-center">
                                    <HiOutlineIdentification className="text-blue-50 bg-blue-500 p-2 text-6xl rounded-xl"/>
                                    <h5 className="text-blue-200 text-xl tracking-tight font-bold ml-5 z-10">Envie documentos</h5>
                                </div>
                            </div>

                            <div className="text-center flex">
                                <div className="z-10">
                                    <p className="tracking-tight leading-5 text-white text-sm">
                                        Após a pré-aprovação do seu pedido de empréstimo, faça o envio dos seus documentos pelo nosso site ou WhatsApp.
                                    </p>
                                </div>
                                
                                <div className="absolute">
                                    <NumCard className="left-28">3</NumCard>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="hover:scale-110 col-span-1 duration-200">
                    <div className={`flex h-72 duration-1000 ease-in-out delay-500 ${scrollCF}`}>
                        <div className="bg-blue-700 p-5 mb-5 rounded-xl hover:shadow-2xl">
                            
                            <div className="col-span-1 my-8">
                                <div className="flex flex-row items-center">
                                    <PiSignature className="text-blue-50 bg-blue-500 p-2 text-6xl rounded-xl"/>
                                    <h5 className="text-blue-200 text-xl tracking-tight font-bold ml-5 z-10">Assinatura Digital</h5>
                                </div>
                            </div>

                            <div className="text-center flex">
                                <div className="z-10">
                                    <p className="tracking-tight leading-5 text-white text-sm">
                                        Empréstimo APROVADO! Agora só falta assinar o contrato usando nosso aplicativo na tela do seu smartphone.
                                    </p>
                                </div>
                                
                                <div className="absolute">
                                    <NumCard className="left-28">4</NumCard>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
           
        </section>
       
    )
}