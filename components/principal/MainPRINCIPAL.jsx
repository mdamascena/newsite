import SeuPerfil from "./sections/Perfil"
import { BtnHome } from "./styles"
import SlideModalidade from "./sections/SlideModalidade"
import Taxa from "./sections/Taxas"
import Mais from "./sections/Mais"
import LinkFaq from "../geral/section/LinkFaq"
import Escolha from "./sections/Escolha"
import { useRouter } from 'next/router'
import { MarqueeDemo } from "./MarqueeDemo"
import Marquee from "../ui/marquee"
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

const creditWidgets = [
    { id: "luz", Component: WidgetLUZ },
    { id: "clt", Component: WidgetCLT },
    { id: "fgts", Component: WidgetFGTS },
    { id: "inss", Component: WidgetINSS },
    { id: "pix", Component: WidgetPIX },
    { id: "auto", Component: WidgetAUTO },
]

const stackedCreditWidgets = Array.from({ length: 10 }, () => creditWidgets).flat()

export default function MainHome() {

    const router = useRouter();
    const handleRedirect = () => {
        router.push('cadastro');
    }
  return (
    <main>
        <div className="bgMainHome">
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 container-custom lg:h-screen h-[85vh]">

                <div className="absolute bottom-38 left-1 flex h-44 w-44 flex-col overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] mask-[linear-gradient(to_bottom,black_75%,transparent_100%)] lg:hidden">
                    <AnimatedList className="w-44" delay={2300}>
                        {stackedCreditWidgets.map(({ id, Component }, index) => (
                            <Component key={`${id}-${index}`} />
                        ))}
                    </AnimatedList>
                </div>

                <div className="col-span-1 grid grid-cols-1 h-full my-auto">

                    <div className="lg:content-end col-span-1 pt-24 lg:pt-0">
                        <h1 className="text-yellow-400 lg:text-5xl text-3xl text-center lg:text-left font-semibold tracking-tight">
                            Crédito Pessoal <span className="font-extralight">ONLINE</span>
                        </h1>
                        <p className="text-white text-center text-md lg:hidden mx-8">
                            Diferente modalidades de crédito para você escolher
                        </p>
                        <WordRotate words={texts} className="text-white lg:text-4xl text-2xl text-center lg:text-left font-medium tracking-tight"/>
                    </div>

                    <div className="content-start mt-96 lg:mt-0 col-span-1 select-none lg:pt-12 pt-0">
                        
                        <p className="text-white text-left mx-0 text-xl col-span-1 lg:pr-14 hidden lg:block mb-4">
                            Modalidades de crédito para atender diferentes necessidades, tudo em um só lugar!
                        </p>

                        <div className="mb-8 hidden w-130 max-w-3xl overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] mask-[linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] lg:block">
                            <Marquee pauseOnHover repeat={5} className="[--duration:24s] [--gap:0.75rem] p-0">
                                {creditWidgets.map(({ id, Component }) => (
                                    <Component
                                        key={id}
                                        className="w-52 shrink-0 bg-white/25 opacity-90 shadow-lg shadow-black/10"
                                    />
                                ))}
                            </Marquee>
                        </div>

                        <div className="">
                            <BtnHome className="" onClick={handleRedirect}>
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
