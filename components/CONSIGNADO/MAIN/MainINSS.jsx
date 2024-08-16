import Image from 'next/image'
import ImgMain from '../../../public/img/modelo_main_inss3.png'
import tw from 'tailwind-styled-components'
import Taxas from '../TAXA/TaxaINSS'
import Analise from '../../GERAL/ANALISE/Analise'
import { LuCheckCircle } from "react-icons/lu"
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
})

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
    hover:scale-105
    active:scale-90 
    duration-150
`;

const EmpTitle = tw.h1`
    text-blue-600 
    lg:text-6xl
    text-[48px] 
    text-center 
    lg:text-left 
    font-[600]
    tracking-tighter
`;

const Card = tw.div`
    bg-blue-200
    rounded-md
    py-1 
    px-2 
    text-blue-600 
    text-sm 
    flex 
    items-center
`

export default function MainFGTS() {

    return (
        <main className={mainFontFamily.className}>
            <div className="bgMainFGTS px-6 lg:px-44 lg:pt-20 pt-20 grid grid-cols-1 lg:grid-cols-2">

                <div className='lg:my-auto mb-10'>
                    <div className='my-5 gap-2 lg:gap-4 justify-center lg:justify-start hidden lg:flex'>
                        <Card>
                            <LuCheckCircle className='mr-2'/>
                            Aposentado
                        </Card>
                        <Card>
                            <LuCheckCircle className='mr-2'/>
                            Pensionista
                        </Card>
                        <Card>
                            <LuCheckCircle className='mr-2'/>
                            LOAS/BPC
                        </Card>
                    </div>

                    <div className=''>
                        <EmpTitle>Empréstimo</EmpTitle>
                        <h1 className='text-blue-600 lg:text-5xl text-4xl text-center lg:text-left font-semibold tracking-tighter'>
                            Consignado <span className='font-semibold tracking-tighter'>INSS</span>
                        </h1>
                    </div>
                    
                    <div className='my-5 gap-1 lg:gap-4 justify-center lg:justify-start lg:hidden flex'>
                        <Card>
                            <LuCheckCircle className='mr-2'/>
                            Aposentado
                        </Card>
                        <Card>
                            <LuCheckCircle className='mr-2'/>
                            Pensionista
                        </Card>
                        <Card>
                            <LuCheckCircle className='mr-2'/>
                            LOAS/BPC
                        </Card>
                    </div>

                    <p className='text-blue-500 lg:text-xl text-md lg:mt-7 lg:text-left lg:pr-20 text-center'>
                        Mais agilidade, mais tranquilidade, mais crédito com limite que atende às suas necessidades. 
                    </p>

                    <div className='flex justify-center lg:justify-start'>
                        <BtnCalc>Contrate agora</BtnCalc>
                    </div>

                </div>

                <div className='-mb-1 flex lg:mt-6'>
                    <Image width={580} src={ImgMain} alt='' />
                </div>
            </div>
            
            <Taxas />
            <Analise/>
        </main>
    )
}