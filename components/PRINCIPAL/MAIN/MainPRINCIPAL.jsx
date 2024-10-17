import Simulador from "../SIMULADOR/SimuladorGeral"
import SeuPerfil from "../SECTIONS/Perfil"
import tw from 'tailwind-styled-components'
import Modalidades from "../MODALIDADES/Modalidades"
import SlideModalidade from "../SECTIONS/SlideModalidade"
import Taxa from "../SECTIONS/Taxas"
import Mais from "../SECTIONS/Mais"
import SeuPotencial from "../SECTIONS/LiberePotencial"

const CardMod = tw.div`
    group
    bg-white
    hover:bg-blue-800
    hover:scale-110 
    col-span-1
    text-white 
    hover:z-10
    p-2
    mx-1
    shadow-lg
    shadow-blue-800/30
    duration-300
    cursor-pointer 
    flex 
    justify-center 
    items-center
    rounded-md
`;

const BtnHome = tw.button`
    focus:outline-none
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    mx-auto
    text-xl
    lg:px-32
    lg:mx-0
    py-4
    lg:w-[450px]
    w-full
    rounded-xl
    text-white 
    mt-8
    hover:to-amber-600 
    hover:from-yellow-500
    hover:scale-105
    active:scale-90 
    duration-150
`;

export default function MainHome() {
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
                            <BtnHome>Simular agora</BtnHome>
                        </div>
                    </div>

                </div>
                
                
            </div>
        </div>

        <SlideModalidade/>
        <Mais/>
        <Taxa/>
        <SeuPerfil/> 
        <SeuPotencial/>      
        <Simulador/>
        <Modalidades/>

    </main>
  )
}