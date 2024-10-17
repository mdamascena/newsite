import tw from 'tailwind-styled-components'
import { RiShieldCheckLine } from 'react-icons/ri'
import { IoPodiumOutline } from 'react-icons/io5'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlineFieldTime } from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import celulares from '../../../public/img/model_cel.png'
import Image from 'next/image'

const CardVant = tw.div`
    col-span-1
    bg-[#0006b0]
    rounded-xl 
    lg:p-6
    p-3 
    lg:h-52
`;

const DesCard = tw.p`
    text-blue-400
    text-left
    text-[15px]
    lg:text-sm
    leading-tight
`;

const Btn = tw.button`
  focus:outline-none
  bg-blue-700
  text-lg
  lg:px-32
  lg:mx-0
  py-3
  mt-3
  w-full
  lg:w-96
  rounded-lg
  text-white
  hover:bg-blue-500
  hover:scale-105
  active:scale-90
  active:bg-blue-800
  duration-150
`

export default function Mais (){
    return(
        <section className='bgMainPrincipal select-none'>

            <div className='container-custom py-[10vh] grid'>

                <div className='grid grid-cols-2 content-center items-center'>

                    <div className='col-span-2 lg:col-span-1'>

                        <h1 className="text-blue-600 tracking-tight lg:text-4xl text-3xl">
                            Aqui vc encontra <span className='text-white lg:text-5xl text-4xl'>muuuuito mais...</span>
                        </h1>
                        <h2 className='text-white text-xs lg:text-base my-4 lg:mr-12'>
                            Aqui, você resolve tudo: crédito rápido, seguro e com as melhores 
                            opções do mercado, sem complicação. Fácil, do seu jeito!
                        </h2>
                        
                        <div className='mt-5 justify-center hidden lg:block'>
                            <Btn>Solicite agora</Btn>
                        </div>

                    </div>

                    <div className='lg:grid lg:col-span-1 col-span-2 justify-center items-end'>
                        {/* <Image src={celulares} width={500} alt=''/> */}
                        <div className='grid grid-cols-2 gap-3 lg:p-3'>

                            <CardVant className='hover:rotate-12 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <IoWalletOutline/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Opções</h1>
                                    <div className='items-center flex'>
                                        <DesCard>Diversas modalidades de empréstimo ao seu alcance em um só lugar</DesCard>
                                    </div>
                                </div>
                            </CardVant>

                            <CardVant className='hover:-rotate-6 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <AiOutlineFieldTime/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Rápido</h1>
                                    <div className='items-center flex'>
                                        <DesCard>A gente faz tudo mais rápido para seu empréstimo ser liberado</DesCard>
                                    </div>
                                </div>
                            </CardVant>

                            <CardVant className='hover:scale-110 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <IoPodiumOutline/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Ofertas</h1>
                                    <div className='items-center flex'>
                                        <DesCard>Os melhores bancos com as melhores ofertas de crédito do mercado</DesCard>
                                    </div>
                                </div>
                            </CardVant>

                            <CardVant className='hover:bg-black/50 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <RiShieldCheckLine/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Seguro</h1>
                                    <div className='items-center flex'>
                                        <DesCard>
                                            Desde 2015 no mercado. Levando crédito seguro e confiável
                                        </DesCard>
                                    </div>
                                </div>
                            </CardVant>
                            
                        </div>

                        <div className='mt-5 justify-center lg:hidden block'>
                            <Btn>Solicite agora</Btn>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </section>
    )
}
