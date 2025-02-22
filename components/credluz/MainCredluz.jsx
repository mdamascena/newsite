import Image from "next/image"
import { useState } from "react"
import cel from "../../public/img/PERSO_LUZ_3.png"
import light from "../../public/img/LAMPADA.png"
import variada from "../../public/img/VARIADAS.png"
import {HiCheck} from 'react-icons/hi'
import SectionDescricao from './Descricao'
import SectionComoFunciona from "./ComoFunciona"
import SectionRegrasGerais from "./RegrasGeais"
import SectionRegioes from "./Regioes"
import SectionAnalise from "../geral/section/Analise"
import Simulador from './simulador/SimuladorCredluz'

export default function MainCredluz() {

    const [showModal, setShowModal] = useState(false);
    const HandleShowModal = () =>{
        setShowModal(true)
    }

    return (
        <main className="select-none">
            <section className="bgMainPrincipal">
                <div className="bgBrasao">
                    <div className="pb-5 lg:pb-0 lg:pt-28 pt-10 container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            
                            <figure className="mx-auto block lg:hidden mt-14 pr-2">
                                <Image className="" src={light} width={185} alt="" />
                            </figure>

                            <div className="col-span-1 my-auto text-white select-none">
                                <div className="hidden lg:block relative">
                                    
                                    <h1 className="text-yellow-400 text-6xl tracking-tighter font-semibold">Empréstimo</h1>
                                    
                                    <h2 className="font-semibold tracking-tighter text-4xl mb-3 lg:mb-0 flex items-center">Débito na conta de 
                                        <span className="text-6xl ml-2 z-10" style={{ textShadow: "0px 0px 20px white" }}>LUZ</span>
                                    </h2>
                                    <div className="bg-yellow-400 p-[1px] lg:my-5 rounded-full"/>

                                    <Image className="absolute -top-10 left-40" src={variada} width={900} alt=""/>
                                    <Image className="absolute -top-2 left-52" src={variada} width={500} alt=""/>
                                    <Image className="absolute -top-8 left-60" src={variada} width={900} alt=""/>

                                    <div className="leading-5 mt-5 text-md flex items-center">
                                        <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                        <span className="ml-2 text-lg">Sem comprovação de renda</span>
                                    </div>
                                    
                                    <div className="leading-5 mt-2 text-md flex items-center">
                                        <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                        <span className="ml-2 text-lg">Possibilidade para negativados *</span>
                                    </div>
                                    
                                    <div className="leading-5 mt-2 text-md flex items-center">
                                        <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                        <span className="ml-2 text-lg">Liberação no mesmo dia **</span>
                                    </div>
                                    
                                    <div className="leading-5 mt-2 text-md flex items-center">
                                        <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                        <span className="ml-2 text-lg">Limite de até R$ 3.300,00 *</span>
                                    </div>

                                    <div className="text-[12px] text-white mt-5 text-center lg:text-start">
                                        <p>* Crédito sujeito à análise</p>
                                        <p>** Liberações ocorrem em dias úteis</p>
                                    </div>
                                </div>
                                
                                <div className="lg:hidden mb-7 text-center">
                                    <h1 className="text-white font-bold text-2xl tracking-tighter">
                                        Empréstimo <span className="font-light">Pessoal Online</span>
                                    </h1>
                                    <h2 className="text-yellow-400 font-medium tracking-tighter text-2xl">Débito na conta de LUZ</h2>
                                    <div className="bg-yellow-400 p-[1px] mx-4 lg:my-5 rounded-full"/>
                                </div>
                            </div>

                            <figure className="mt-10 col-span-1 mx-2 hidden lg:flex justify-center">
                                <Image width={450} src={cel} alt="" />
                            </figure>

                            <div className="col-span-1 my-auto lg:mx-1 justify-center flex">
                                <Simulador/>
                            </div>
                            
                        </div>
                        
                    </div>   
                </div>
            </section>
            <SectionDescricao />
            <SectionComoFunciona />
            <SectionRegrasGerais />
            <SectionRegioes />
            <SectionAnalise />
        </main>
    )
}