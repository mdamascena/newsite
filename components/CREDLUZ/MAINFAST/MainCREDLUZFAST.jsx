import Image from "next/image"
import cel from "../../../public/img/PERSO_LUZ_2.png"
import light from "../../../public/img/LAMPADA.png"
import SectioDescrisao from "../DESCRICAO/Descricao"
import SectioComoFunciona from "../COMOFUNCIONA/ComoFunciona"
import SectioRegrasGerais from "../REGRAS/RegrasGeais"
import SectioRegioes from "../REGIOES/Regioes"
import SectioAnalise from "../../GERAL/ANALISE/Analise"
import BtnYellow from "../../GERAL/BUTTON/BtnYellow"
import {HiCheck} from 'react-icons/hi'
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

export default function MainPrincipal() {
  return (
    <main className={mainFontFamily.className}>
        <section className="bgMainPrincipal">
            <div className="bgBrasaoFast">
                <div className="pb-5 lg:pb-0 pt-20 px-8 md:px-16 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 poppins">
                        <figure className="mx-auto block lg:hidden mt-2">
                            <Image src={light} width={200} height={160} alt="" />
                        </figure>

                        <div className="col-span-1 lg:my-auto lg:ml-14">
                            <h1 className="text-[2rem] lg:text-[3.0rem] leading-tight lg:leading-[50px] font-semibold tracking-tighter text-center lg:text-left text-white">
                                <div className="text-yellow-400">
                                    Crédito Pessoal
                                </div>
                                <div className="lg:flex items-center">
                                    Débito na conta de<div className="text-7xl ml-2 tracking-tighter" style={{ textShadow: "0px 0px 20px white" }}>LUZ</div>
                                </div>
                            </h1>

                            <div className="text-white ml-5 lg:ml-0">
                                <div className="leading-5 mt-5 text-md flex items-center">
                                    <HiCheck className="rounded-full bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg ">Sem comprovação de renda</span>
                                </div>
                                <div className="leading-5 mt-2 text-md flex items-center">
                                    <HiCheck className="rounded-full bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg">Possibilidade para negativados *</span>
                                </div>
                                <div className="leading-5 mt-2 text-md flex items-center">
                                    <HiCheck className="rounded-full bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg">Liberação em menos de 24h **</span>
                                </div>
                            </div>

                            {/*<h3 className="text-white leading-[20px] mt-5 text-md md:text-xl md:text-left text-center">
                                Sem comprovação de renda e com possibilidade de
                                aprovação para negativados. Liberação no mesmo dia.
                            </h3>*/}

                            <div className="text-center md:text-left">
                                <BtnYellow nome="Simule aqui" />
                            </div>

                            <div className="text-[12px] text-white poppins mt-5 text-center lg:text-start">
                                <p>Crédito sujeito à análise *</p>
                                <p>Liberações ocorrem em dias úteis **</p>
                            </div>
                        </div>

                        <figure className="mx-auto mt-8 hidden lg:block">
                            <Image width={490} src={cel} alt="" />
                        </figure>
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
  );
}
