import Image from "next/image"
import cel from "../../../public/img/PERSO_LUZ_2.png"
import light from "../../../public/img/LAMPADA.png"
import SectioDescrisao from "../DESCRICAO/Descricao"
import SectioComoFunciona from "../COMOFUNCIONA/ComoFunciona"
import SectioRegrasGerais from "../REGRAS/RegrasGeais"
import SectioRegioes from "../REGIOES/Regioes"
import SectioAnalise from "../../GERAL/ANALISE/Analise"
import BtnYellow from "../../GERAL/BUTTON/BtnYellow"

export default function MainPrincipal() {
  return (
    <main>
        <section className="bgMainPrincipal">
            <div className="bgBrasaoFast">
                <div className="pb-5 lg:pb-0 pt-20 px-8 md:px-16 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 poppins">
                        <figure className="mx-auto pr-7 block lg:hidden my-4">
                            <Image src={light} width={200} height={160} alt="" />
                        </figure>

                        <div className="col-span-1 md:my-16 md:ml-24">
                            <h1 className="text-[2rem] md:text-[3.0rem] leading-tight md:leading-[50px] font-semibold tracking-tight text-center md:text-left text-white">
                                <div className="text-yellow-400">
                                    Crédito Pessoal
                                </div>
                                Débito na conta de<div className="text-7xl" style={{ textShadow: "0px 0px 20px white" }}>LUZ</div>
                            </h1>

                            <h3 className="text-white leading-[20px] mt-5 text-md md:text-xl md:text-left text-center">
                                Sem a necessidade de comprovar renda e com possibilidade de
                                aprovação para negativados. Liberação no mesmo dia.
                            </h3>

                            <div className="text-center md:text-left">
                                <BtnYellow nome="Simule aqui" />
                            </div>

                            <div className="text-[12px] text-white poppins mt-5 text-center lg:text-start">
                                <p>Crédito sujeito à análise</p>
                                <p>Liberações ocorrem em dias úteis</p>
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
