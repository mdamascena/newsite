import Simulador from "./SimuladorGeral"
import SeuPerfil from "./sections/Perfil"
import { BtnHome } from "./styles"
import Modalidades from "./Modalidades"
import SlideModalidade from "./sections/SlideModalidade"
import Taxa from "./sections/Taxas"
import Mais from "./sections/Mais"
import SeuPotencial from "./sections/LiberePotencial"
import Escolha from "./sections/Escolha"
import { useRouter } from 'next/router'
import { MarqueeDemo } from "./MarqueeDemo"
import { RainbowButton } from "../ui/rainbow-button"
import WordRotate from "../ui/word-rotate"

const texts = [
    "Crédito na conta de LUZ",
    "Consignado para LOAS",
    "Saque Antecipado do FGTS",
    "Consignado do INSS",
    "Parcelamento de PIX",
    "Consignado CLT"
]

export default function MainHome() {

    const router = useRouter();
    const handleRedirect = () => {
        router.push('cadastro');
    }
  return (
    <main>
        <div className="bgMainHome">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 container-custom lg:h-[100vh] h-[85vh]">
                
                <div className="col-span-1 grid grid-cols-1 lg:h-[50%] h-[100%] my-auto">

                    <div className="content-center col-span-1">
                        <h1 className="text-yellow-400 lg:text-5xl text-3xl text-center lg:text-left font-semibold tracking-tight">
                            Empréstimo <span className="font-extralight">ONLINE</span>
                        </h1>
                        <WordRotate words={texts} className="text-white lg:text-4xl text-2xl text-center lg:text-left font-medium tracking-tight"/>
                    </div>

                    <div className="lg:content-start content-end col-span-1 select-none">
                        <p className="text-white lg:text-left text-justify lg:mx-0 mx-2 lg:text-xl col-span-1 lg:pr-14">
                            Diversas modalidades de empréstimo, pensadas para atender diferentes necessidades, tudo em um só lugar!
                        </p>
                        <div className="pb-8 lg:pb-0">
                            <BtnHome onClick={handleRedirect}>
                                Simular agora
                            </BtnHome>
                        </div>
                    </div>

                </div>
                
                
            </div>
        </div>

        <SlideModalidade/>
        <Mais/>
        <Taxa/>
        <Escolha/>
        <SeuPerfil/> 
        <MarqueeDemo />
        <SeuPotencial/>      
        {/* <Simulador/>
        <Modalidades/> */}

    </main>
  )
}