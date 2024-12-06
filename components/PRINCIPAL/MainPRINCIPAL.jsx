import Simulador from "./SimuladorGeral"
import SeuPerfil from "./sections/Perfil"
import { BtnHome } from "./styles"
import Modalidades from "./Modalidades"
import SlideModalidade from "./sections/SlideModalidade"
import Taxa from "./sections/Taxas"
import Mais from "./sections/Mais"
import SeuPotencial from "./sections/LiberePotencial"
import Protecao from "./sections/Protecao"
import { useRouter } from 'next/router'
import { MarqueeDemo } from "../geral/MarqueeDemo"

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
                        <h1 className="text-white lg:text-4xl text-2xl text-center lg:text-left font-medium tracking-tight">
                            com múltiplas opções de créditos
                        </h1>
                    </div>

                    <div className="lg:content-start content-end col-span-1">
                        <p className="text-white lg:text-left text-justify lg:mx-0 mx-2 lg:text-xl col-span-1">
                            Mais autonomia, muito mais controle e economia de tempo para você. Feito para seu perfil.
                        </p>
                        <div className="pb-8 lg:pb-0">
                            <BtnHome onClick={handleRedirect}>Simular agora</BtnHome>
                        </div>
                    </div>

                </div>
                
                
            </div>
        </div>

        <SlideModalidade/>
        <Mais/>
        <Taxa/>
        <MarqueeDemo />
        <Protecao/>
        <SeuPerfil/> 
        <SeuPotencial/>      
        <Simulador/>
        <Modalidades/>

    </main>
  )
}