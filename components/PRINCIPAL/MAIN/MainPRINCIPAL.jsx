import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import imageOne from "../../../public/img/BRASAO_CINZA.png"
import imageTwo from "../../../public/img/BRASAO_AZUL.png"
import cel from "../../../public/img/PERSO_LUZ_2.png"
import light from "../../../public/img/LAMPADA.png"
import SectioDescrisao from "../DESCRICAO/Descricao"
import SectioComoFunciona from "../COMOFUNCIONA/ComoFunciona"
import SectioRegrasGerais from "../REGRAS/RegrasGeais"
import SectionModalidade from "../MODALIDADES/ModalidadesPrincipal.jsx"
import BtnYellow from "../../GERAL/BUTTON/BtnYellow"

export default function MainPrincipal() {
    return (
        <main>
            <section className="pb-5 lg:pb-0 pt-20 px-8 md:px-16 lg:px-32 bgMainPrincipal">

                <div className="grid grid-cols-1 lg:grid-cols-2 poppins bgBrasao">

                    <figure className="ml-16 block lg:hidden my-4">
                        <Image src={light} width={200} height={160} alt='' />
                    </figure>

                    <div className="col-span-1 md:my-16 md:ml-24">
                        <h1 className="text-[2rem] md:text-[3.0rem] leading-tight md:leading-[50px] font-bold tracking-tight text-center md:text-left text-white">
                            <div className="text-yellow-400">
                                Crédito Pessoal <span className="font-extralight">ONLINE</span>
                            </div> 
                            Débito na conta de <div className="text-7xl" style={{textShadow: "0px 0px 20px white"}}>LUZ</div>
                        </h1>

                        <h3 className="text-white leading-[20px] mt-5 text-md md:text-xl md:text-left text-center">
                            Sem a necessidade de comprovar renda e com possibilidade de aprovação para negativados. Liberação no mesmo dia.
                        </h3>

                        <div className="text-center md:text-left">
                            <BtnYellow nome='Simule aqui' />
                        </div>

                        <div className="text-[12px] text-white poppins mt-5 text-center lg:text-start">
                            <p>Crédito sujeito à análise</p>
                            <p>Liberações ocorrem em dias úteis</p>
                        </div>
                    </div>

                    <figure className="mx-auto mt-8 hidden lg:block">
                        <Image width={500} height={530} src={cel} alt='' />
                    </figure>
                    
                </div>

            </section>
            <SectioDescrisao/>
            <SectioComoFunciona/>
            <SectioRegrasGerais/>
        </main>
    )
}