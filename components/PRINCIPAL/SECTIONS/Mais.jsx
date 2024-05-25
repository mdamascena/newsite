import tw from 'tailwind-styled-components'
import { RiShieldCheckLine } from 'react-icons/ri'
import { IoPodiumOutline } from 'react-icons/io5'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlineFieldTime } from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CardVant = tw.div`
    lg:col-span-1
    bg-black
    bg-opacity-10
    col-span-2
    border-2 
    border-blue-600 
    rounded-xl 
    p-5
    lg:p-12
    lg:mx-0
    lg:mb-0
    rounded-md
    duration-300
`;

const DesCard = tw.p`
    text-white 
    text-left
    text-[15px]
    lg:text-sm
    tracking-tight 
    font-extralight
    leading-tight
`;

const Btn = tw.button`
  focus:outline-none
  bg-blue-600
  mx-auto
  text-lg
  lg:px-32
  lg:mx-0
  py-3
  px-20
  flex
  rounded-2xl
  text-white
  hover:bg-blue-500
  hover:scale-105
  active:scale-90
  active:bg-blue-800
  duration-150
`;


export default function Mais (){
    return(
        <section className='bg-blue-950 saturate-200 select-none'>

            <div className='px-6 lg:px-44 lg:py-20 py-12'>

                <h1 className="text-white tracking-tight lg:text-4xl text-3xl text-center lg:mb-16 mb-6">
                    Aqui vc encontra <span className='text-blue-600 lg:text-5xl text-4xl'>muuuuito mais...</span>
                </h1>

                <div className='grid lg:grid-cols-4 grid-cols-2'>

                    <div className='col-span-4 grid grid-cols-4 self-start lg:order-2 order-1 lg:gap-6 gap-3'>

                        <CardVant className=''>
                            <div className=''>
                                <div className='text-5xl text-blue-600 mb-5'>
                                    <IoWalletOutline/>
                                </div>
                                
                                <div className='my-auto'>
                                    <DesCard>Diversas modalidades de empréstimo ao seu alcance em um só lugar.</DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <CardVant>
                            <div className=''>
                                <div className='text-5xl text-blue-600 mb-5'>
                                    <AiOutlineFieldTime/>
                                </div>

                                <div className='my-auto'>
                                    <DesCard>Nossa tecnologia torna tudo mais agil para seu empréstimo ser liberado.</DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <CardVant className=''>
                            <div className=''>
                                <div className='text-5xl text-blue-600 mb-5'>
                                    <IoPodiumOutline/>
                                </div>

                                <div className='my-auto'>
                                    <DesCard>Os melhores bancos com as melhores ofertas de crédito do mercado.</DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <CardVant className=''>
                            <div className=''>
                                <div className='text-5xl text-blue-600 mb-5'>
                                    <RiShieldCheckLine/>
                                </div>

                                <div className='my-auto'>
                                    <DesCard>Desde 2015 no mercado. Levando crédito seguro e confiável.</DesCard>
                                </div>
                            </div>
                        </CardVant>

                    </div>

                </div>
                <div className='lg:mt-16 mt-10 justify-center flex'>
                    <Btn>Solicite agora</Btn>
                </div>
                
            </div>
            
        </section>
    )
}
