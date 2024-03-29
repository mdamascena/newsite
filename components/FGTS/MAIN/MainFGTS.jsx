import Image from 'next/image'
import ImgMain from '../../../public/img/pers_home.png'
import tw from 'tailwind-styled-components'
import SimuladorFGTS from '../FORM/SimuladorFGTS'
import Vantagens from '../VANTAGENS/VantagensFGTS'
import Taxas from '../TAXAS/TaxaFGTS'
import Regras from '../REGRAS/RegrasGeraisFGTS'

const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    lg:text-2xl 
    text-xl 
    lg:px-32 
    py-3
    px-18
    lg:flex-none
    flex-1
    poppins
    font-semibold
    rounded-xl
    text-white
    mt-8
    shadow-md
    shadow-amber-400 
    border-b-2 
    border-amber-300
    focus:outline-none
    hover:shadow-md
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:ring-offset-0
    hover:ring-4
    hover:ring-amber-200
`;

const EmpTitle = tw.h1`
    text-blue-600 
    lg:text-6xl
    text-[48px] 
    text-center 
    lg:text-left 
    font-extrabold
`;

export default function MainFGTS() {

    return (
        <main>

            <div className="bgMainFGTS px-4 lg:px-40 lg:pt-20 pt-20 grid grid-cols-1 lg:grid-cols-2">

                <div className='poppins lg:my-auto mb-10'>
                    <EmpTitle>Empréstimo</EmpTitle>
                    <h1 className='text-blue-600 lg:text-5xl text-2xl text-center lg:text-left font-extrabold'>
                        Saque Aniversário <span className='font-bold tracking-tighter'>FGTS</span>
                    </h1>

                    <p className='poppins text-blue-500 lg:text-xl text-md mt-7 lg:mt-7 lg:pr-36 lg:text-left text-center'>
                        Antecipe seu <b className='text-2xl'>FGTS</b>, até <span className='text-2xl font-extrabold tracking-tighter'>12 parcelas</span> com a melhor taxa do mercado e sem descontos mensais!
                    </p>

                    <div className='flex justify-center lg:justify-start'>
                        <BtnCalc>Contrate agora</BtnCalc>
                    </div>

                </div>

                <div className='-mb-1'>
                    <Image src={ImgMain} alt='' />
                </div>
            </div>

            <SimuladorFGTS />
            <Vantagens />
            <Taxas />
            <Regras />

        </main>
    )
}