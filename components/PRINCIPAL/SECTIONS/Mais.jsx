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
    bg-[#0005a0]
    col-span-2
    rounded-xl 
    p-5
    rounded-md
    duration-300
    mb-3
    flex 
    items-center
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
`;


export default function Mais (){
    return(
        <section className='bgMainPrincipal select-none'>

            <div className='px-6 lg:px-44 lg:pt-20 pt-12'>

                <div className='grid grid-cols-2'>

                    <div className='col-span-2 lg:col-span-1 mb-14'>

                        <div>
                            <h1 className="text-white tracking-tight lg:text-4xl text-3xl mb-6">
                                Aqui vc encontra <span className='text-blue-600 lg:text-5xl text-4xl'>muuuuito mais...</span>
                            </h1>
                        </div>

                        <CardVant className=''>
                            <div className='text-5xl text-blue-600 pr-5'>
                                <IoWalletOutline/>
                            </div>
                            <div className=''>
                                <h1 className='text-blue-600 text-2xl font-semibold'>Mais Opções</h1>
                                <div className='items-center flex'>
                                    <DesCard>Diversas modalidades de empréstimo ao seu alcance em um só lugar</DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <CardVant>
                            <div className='text-5xl text-blue-600 pr-5'>
                                <AiOutlineFieldTime/>
                            </div>
                            <div className=''>
                                <h1 className='text-blue-600 text-2xl font-semibold'>Mais Rápido</h1>
                                <div className='items-center flex'>
                                    <DesCard>A gente faz tudo mais rápido para seu empréstimo ser liberado</DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <CardVant>
                            <div className='text-5xl text-blue-600 pr-5'>
                                <IoPodiumOutline/>
                            </div>
                            <div className=''>
                                <h1 className='text-blue-600 text-2xl font-semibold'>Mais Ofertas</h1>
                                <div className='items-center flex'>
                                    <DesCard>Os melhores bancos com as melhores ofertas de crédito do mercado</DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <CardVant className=''>
                            <div className='text-5xl text-blue-600 pr-5'>
                                <RiShieldCheckLine/>
                            </div>
                            <div className=''>
                                <h1 className='text-blue-600 text-2xl font-semibold'>Mais Seguro</h1>
                                <div className='items-center flex'>
                                    <DesCard>
                                        Desde 2015 no mercado. Levando crédito seguro e confiável
                                    </DesCard>
                                </div>
                            </div>
                        </CardVant>

                        <div className='mt-5 justify-center'>
                            <Btn>Solicite agora</Btn>
                        </div>

                    </div>

                    <div className='lg:grid col-span-1 hidden justify-center items-end'>
                        <Image src={celulares} width={500} alt=''/>
                    </div>

                </div>
                
            </div>
            
        </section>
    )
}
