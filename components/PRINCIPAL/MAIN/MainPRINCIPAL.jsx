import Modalidades from "../MODALIDADES/Modalidades"
import Simulador from "../SIMULADOR/SimuladorGeral"
import tw from 'tailwind-styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
  border-b-4
  border-orange-700 
  text-2xl
  lg:py-2
  lg:px-32
  lg:mx-0
  mb-14
  py-2
  px-20
  flex
  poppins
  font-semibold 
  rounded-2xl
  text-white 
  mt-8
  hover:to-amber-600 
  hover:from-yellow-500
  focus:to-amber-700 
  focus:from-yellow-600
  focus:ring-offset-0
  focus:ring-opacity-70        
  focus:ring-4
  focus:ring-amber-200'
`;

export default function MainHome() {

  return (
    <main className="">

        <div className="grid grid-cols-1 lg:grid-cols-2 bgMainHome">

            <div className="col-span-1 px-5 lg:pl-40 lg:pr-10 lg:mt-44 lg:mb-36 mb-[5vh]">

                <div className="mt-24 lg:mt-0">
                    <h1 className="text-white lg:text-5xl text-[30px] text-center lg:text-left poppins font-medium tracking-tighter">
                        <span className="text-yellow-400">Seu Empréstimo ONLINE</span> com múltiplas opções de créditos
                    </h1>
                </div>

                <div className="lg:mt-8 mt-64">
                    <p className="text-white poppins lg:text-left text-justify lg:mx-0 mx-2 text-xl">
                        Mais autonomia, muito mais controle e economia de tempo para você. Feito para seu perfil.
                    </p>
                    <BtnHome>Simular agora</BtnHome>
                </div>

            </div>

            <div className="hidden lg:block col-span-1"></div>

        </div>

        <Modalidades />
        <Simulador />
        
    </main>

  )
}