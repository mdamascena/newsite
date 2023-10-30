import { useState } from "react"
import Image from "next/image"
import cel from "../../../public/img/PERSO_LUZ_3.png"
import light from "../../../public/img/LAMPADA.png"
import SectioDescrisao from "../DESCRICAO/Descricao"
import SectioComoFunciona from "../COMOFUNCIONA/ComoFunciona"
import SectioRegrasGerais from "../REGRAS/RegrasGeais"
import SectioRegioes from "../REGIOES/Regioes"
import SectioAnalise from "../ANALISE/Analise"
import BtnYellow from "../../GERAL/BUTTON/BtnYellow"
import Simulador from '../SIMULADOR/SimuladorCredluz'

export default function MainCredluz() {

    return (
        <main>
            <section className="bgMainPrincipal">
            <div className="bgBrasao">
                <div className="pb-5 lg:pb-0 lg:pt-20 pt-10 lg:px-32">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 poppins">
                        
                        <figure className="mx-auto block ml-[100px] lg:hidden mt-5">
                            <Image src={light} width={175} alt="" />
                        </figure>

                        <div className="col-span-1 my-auto px-8 text-white">
                            <div className="hidden lg:block">
                                <h1 className="text-yellow-400 text-6xl tracking-tighter font-semibold">Empréstimo</h1>
                                <h1 className="text-yellow-400 text-5xl font-medium tracking-tighter">
                                    Pessoal <span className="font-extralight text-white">Online</span>
                                </h1>
                                <div className="bg-yellow-400 p-[1px] lg:my-5 rounded-full"/>

                                <h2 className="font-semibold tracking-tighter text-4xl  mb-3 lg:mb-0">Débito na conta de 
                                    <span className="text-5xl" style={{ textShadow: "0px 0px 20px white" }}> LUZ</span>
                                </h2>
                                <h3 className="leading-5 mt-5 text-md hidden">
                                    Sem comprovação de renda, basta ser o titular da conta de energia da sua residencia.
                                </h3>
                            </div>
                            <div className="lg:hidden mb-7 text-center">
                                <h1 className="text-white font-bold text-2xl tracking-tighter">
                                    Empréstimo <span className="font-light">Pessoal Online</span>
                                </h1>
                                <h2 className="text-yellow-400 font-medium tracking-tighter text-2xl">Débito na conta de LUZ</h2>
                                <div className="bg-yellow-400 p-[1px] lg:my-5 rounded-full"/>
                            </div>
                            
                            
                        </div>

                        <figure className="mt-10 col-span-1 mx-2 hidden lg:block">
                            <Image width={450} src={cel} alt="" />
                        </figure>

                        <div className="col-span-1 my-auto mx-2">
                            <Simulador/>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </section>
            <SectioDescrisao />
            <SectioComoFunciona />
            <SectioRegrasGerais />
            <SectioRegioes />
            <SectioAnalise />
        </main>
    )
}