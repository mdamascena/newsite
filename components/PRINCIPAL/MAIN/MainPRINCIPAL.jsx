import Modalidades from "../MODALIDADES/Modalidades"
import Simulador from "../SIMULADOR/SimuladorGeral"
import SlideModalidade from "../MODALIDADES/SlideModalidade"
import SeuPotencial from "../SECTIONS/LiberePotencial"
import SeuPerfil from "../SECTIONS/Perfil"
import tw from 'tailwind-styled-components'
import Taxa from "../SECTIONS/Taxas"
import Mais from "../SECTIONS/Mais"

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
    mb-14
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
        <div className="grid grid-cols-1 lg:grid-cols-2 bgMainHome">
            
            <div className="col-span-1 px-5 lg:pl-40 lg:pr-10 lg:mt-44 lg:mb-36 mb-[5vh]">

                <div className="mt-24 lg:mt-0">
                    <h1 className="text-yellow-400 lg:text-5xl text-3xl text-center lg:text-left font-semibold tracking-tight">
                        Empréstimo <span className="font-extralight">ONLINE</span>
                    </h1>
                    <h1 className="text-white lg:text-4xl text-2xl text-center lg:text-left font-medium tracking-tight">
                        com múltiplas opções de créditos
                    </h1>
                </div>

                <div className="lg:mt-8 mt-64">
                    <p className="text-white lg:text-left text-justify lg:mx-0 mx-2 text-xl">
                        Mais autonomia, muito mais controle e economia de tempo para você. Feito para seu perfil.
                    </p>
                    <BtnHome>Simular agora</BtnHome>
                </div>

            </div>
            
            <div className="hidden lg:block col-span-1"></div>
        </div>
        <SlideModalidade/>
        <Mais/>
        <Taxa/>
        <SeuPerfil/> 
        <SeuPotencial/>      
        <Simulador />
        <Modalidades />
    </main>
  )
}