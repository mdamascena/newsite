import Image from "next/image"
import { HiCheck } from "react-icons/hi"

import bgCar from "../../public/img/bg-car.png"
import personAuto from "../../public/img/person_auto.png"
import BtnYellowG from "../geral/button/BtnYellowG"
import Analise from "../geral/section/Analise"
import LinkFaq from "../geral/section/LinkFaq"

const benefits = [
    "Continue com seu carro",
    "Taxas competitivas",
    "Prazos flexíveis",
    "Atendimento online",
]

export default function MainRefinAuto() {
    return (
        <main>
            <section className="relative overflow-hidden bg-linear-to-tl from-slate-500 via-slate-100 ">
                
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-2/3"
                    
                    style={{ clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)" }}>

                    <Image
                        src={bgCar}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                    
                </div>
                
                <div className="container-custom relative z-10 flex flex-col gap-8 pt-22 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:pt-17">
                    
                    <div className="select-none lg:basis-[40%] lg:shrink-0">
                        
                        {/* <span className="text-center text-md tracking-tight text-blue-500 lg:text-left bg-blue-100 p-1 rounded-md">
                            Refinanciamento de auto
                        </span> */}

                        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl mt-5">

                            <h1 className="text-center text-[2.6rem] font-semibold leading-none tracking-tight text-white lg:text-left lg:text-5xl">
                                Seu carro agora pode virar crédito
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl text-center text-sm tracking-tight text-white lg:mx-0 lg:text-left lg:text-lg">
                                Transforme o valor do seu veículo em dinheiro, continue usando sem problema.
                            </p>

                        </div>


                        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:max-w-xl">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center rounded-md bg-black/20 px-3 py-2 text-sm font-medium text-white">
                                    <HiCheck className="mr-2 shrink-0 rounded-md bg-blue-200 text-xl text-blue-400" />
                                    {benefit}
                                </div>
                            ))}
                        </div>

                        <div className="text-center lg:text-left">
                            <BtnYellowG href="/refin-auto/cadastro" className="mt-8 px-[18vw]" />
                        </div>

                        <div className="mt-3 text-center text-[12px] text-white lg:text-left">
                            <p>Crédito sujeito à análise *</p>
                            <p>Condições variam conforme perfil e veículo **</p>
                        </div>

                    </div>

                    {/* <div className="absolute z-0 w-[6%] h-full bg-linear-to-b from-yellow-100 to-yellow-500 lg:right-90 lg:w-80 lg:translate-x-0" /> */}
                    
                    <div className="relative mb-12 flex items-end justify-center lg:basis-[60%] lg:justify-end">
                        <Image
                            src={personAuto}
                            alt=""
                            className="relative z-10 h-auto w-full max-w-155 lg:max-w-170"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="container-custom py-14">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <div className="rounded-xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-600/20">
                        <p className="text-3xl font-semibold tracking-tighter">01</p>
                        <h2 className="mt-3 text-xl font-semibold tracking-tight">Simule</h2>
                        <p className="mt-2 text-sm text-blue-50">Informe seus dados iniciais para avaliarmos as opções disponíveis.</p>
                    </div>

                    <div className="rounded-xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-600/20">
                        <p className="text-3xl font-semibold tracking-tighter">02</p>
                        <h2 className="mt-3 text-xl font-semibold tracking-tight">Envie os dados</h2>
                        <p className="mt-2 text-sm text-blue-50">Compartilhe as informações do veículo e acompanhe a análise da proposta.</p>
                    </div>

                    <div className="rounded-xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-600/20">
                        <p className="text-3xl font-semibold tracking-tighter">03</p>
                        <h2 className="mt-3 text-xl font-semibold tracking-tight">Receba</h2>
                        <p className="mt-2 text-sm text-blue-50">Após aprovação e formalização, o crédito é liberado na sua conta.</p>
                    </div>
                </div>
            </section>

            <Analise />
            <LinkFaq />
        </main>
    )
}
