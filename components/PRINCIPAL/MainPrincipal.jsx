import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import imageOne from "../../public/img/BRASAO_CINZA.png"
import imageTwo from "../../public/img/BRASAO_AZUL.png"
import cel from "../../public/img/valoreal_mobile.png"
import SectionModalidade from "../PRINCIPAL/MODALIDADES/ModalidadesPrincipal.jsx"
import BtnYellow from "../GERAL/BtnYellow"

export default function MainPrincipal() {
    return (
        <main>
            <section className="p-8 pt-32 md:px-16 lg:px-32 bgMainPrincipal">
                
                <div className="grid grid-cols-1 md:grid-cols-2 poppins">
                    
                    <div className="col-span-1 md:my-16 md:ml-32">
                        <h1 className="text-[2.3rem] md:text-[3.0rem] leading-[45px] font-bold tracking-tight text-white text-center md:text-left">
                            <span className="text-yellow-400">Seu empréstimo ONLINE</span> com múltiplas opções de créditos
                        </h1>
                        
                        <h3 className="text-white leading-[20px] mt-8 text-md md:text-xl md:text-left text-center">
                            Mais autonomia, muito mais controle e economia de tempo para você. Feito para o seu perfil.
                        </h3>
                        
                        <div className="text-center md:text-left">
                            <BtnYellow nome='Simule aqui'/>
                        </div>
                    </div>
                    
                    <div className="m-auto mt-5">
                        <Image width={200} height={395} src={cel} alt=''/>
                    </div>

                </div>
                
            </section>
            <SectionModalidade/>
        </main>
    )
}