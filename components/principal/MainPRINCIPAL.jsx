import SeuPerfil from "./sections/Perfil"
import { BtnHome } from "./styles"
import SlideModalidade from "./sections/SlideModalidade"
import Taxa from "./sections/Taxas"
import Mais from "./sections/Mais"
import LinkFaq from "../geral/section/LinkFaq"
import Escolha from "./sections/Escolha"
import { useRouter } from 'next/router'
import { MarqueeDemo } from "./MarqueeDemo"
import WidgetLUZ from "./widgets/WidgetLUZ"
import WidgetCLT from "./widgets/WidgetCLT"
import WidgetFGTS from "./widgets/WidgetFGTS"
import WidgetINSS from "./widgets/WidgetINSS"
import WidgetPIX from "./widgets/WidgetPIX"
import WidgetAUTO from "./widgets/WidgetAUTO"
import { AnimatedList } from "../ui/animated-list"

import dynamic from "next/dynamic";
const WordRotate = dynamic(() => import("../ui/word-rotate"), { ssr: false });

const texts = [
    "Crédito na conta de LUZ",
    "Consignado para LOAS",
    "Saque Antecipado do FGTS",
    "Consignado do INSS",
    "Parcelamento de PIX",
    "Consignado CLT",
    "Refinanciamento de AUTO"
]

let creditWidgets = [
    { id: "luz", Component: WidgetLUZ },
    { id: "clt", Component: WidgetCLT },
    { id: "fgts", Component: WidgetFGTS },
    { id: "inss", Component: WidgetINSS },
    { id: "pix", Component: WidgetPIX },
    { id: "auto", Component: WidgetAUTO },
]

creditWidgets = Array.from({ length: 10 }, () => creditWidgets).flat()

export default function MainHome() {

    const router = useRouter();
    const handleRedirect = () => {
        router.push('cadastro');
    }
  return (
    <main>
        <div className="bgMainHome">
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 container-custom lg:h-screen h-[85vh]">

                <div className="absolute lg:bottom-24 bottom-50 lg:right-150 left-1 flex h-56 w-44 flex-col overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] mask-[linear-gradient(to_bottom,black_75%,transparent_100%)]">
                    <AnimatedList className="w-44" delay={2300}>
                        {creditWidgets.map(({ id, Component }, index) => (
                            <Component key={`${id}-${index}`} />
                        ))}
                    </AnimatedList>
                </div>
                
                <div className="col-span-1 grid grid-cols-1 lg:h-[50%] h-full my-auto">

                    <div className="content-center col-span-1">
                        <h1 className="text-yellow-400 lg:text-5xl text-3xl text-center lg:text-left font-semibold tracking-tight">
                            Crédito Pessoal <span className="font-extralight">ONLINE</span>
                        </h1>
                        <p className="text-white text-center text-md lg:hidden">
                            Diferente modalidades de crédito para você escolher
                        </p>
                        <WordRotate words={texts} className="text-white lg:text-4xl text-2xl text-center lg:text-left font-medium tracking-tight"/>
                    </div>

                    <div className="lg:content-start content-center lg:mt-0 col-span-1 select-none">
                        <p className="text-white text-left mx-0 text-xl col-span-1 lg:pr-14 hidden lg:block">
                            Modalidades de crédito para atender diferentes necessidades, tudo em um só lugar!
                        </p>
                        <div className="pb-8 lg:pb-0">
                            <BtnHome className="mt-28" onClick={handleRedirect}>
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
        <LinkFaq/>      
        {/* <Simulador/>
        <Modalidades/> */}

    </main>
  )
}
