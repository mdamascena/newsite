import Simulador from "../SIMULADOR/SimuladorGeral"
import SeuPerfil from "../SECTIONS/Perfil"
import { BtnHome } from "../STYLES"
import Modalidades from "../MODALIDADES/Modalidades"
import SlideModalidade from "../SECTIONS/SlideModalidade"
import Taxa from "../SECTIONS/Taxas"
import Mais from "../SECTIONS/Mais"
import SeuPotencial from "../SECTIONS/LiberePotencial"
import Protecao from "../SECTIONS/Protecao"
import { useRouter } from 'next/router'
import { MarqueeDemo } from "../../GERAL/MarqueeDemo"

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