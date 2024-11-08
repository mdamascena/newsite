import { RiShieldCheckLine } from 'react-icons/ri'
import { IoPodiumOutline } from 'react-icons/io5'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { CardVantMais, DesCardMais, BtnMais } from '../STYLES'
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
                            <BtnMais>Solicite agora</BtnMais>
                        </div>

                    </div>

                    <div className='lg:grid lg:col-span-1 col-span-2 justify-center items-end'>
                        {/* <Image src={celulares} width={500} alt=''/> */}
                        <div className='grid grid-cols-2 gap-3 lg:p-3'>

                            <CardVantMais className='hover:rotate-12 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <IoWalletOutline/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Opções</h1>
                                    <div className='items-center flex'>
                                        <DesCardMais>Diversas modalidades de empréstimo ao seu alcance em um só lugar</DesCardMais>
                                    </div>
                                </div>
                            </CardVantMais>

                            <CardVantMais className='hover:-rotate-6 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <AiOutlineFieldTime/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Rápido</h1>
                                    <div className='items-center flex'>
                                        <DesCardMais>A gente faz tudo mais rápido para seu empréstimo ser liberado</DesCardMais>
                                    </div>
                                </div>
                            </CardVantMais>

                            <CardVantMais className='hover:scale-110 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <IoPodiumOutline/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Ofertas</h1>
                                    <div className='items-center flex'>
                                        <DesCardMais>Os melhores bancos com as melhores ofertas de crédito do mercado</DesCardMais>
                                    </div>
                                </div>
                            </CardVantMais>

                            <CardVantMais className='hover:bg-black/50 hover:shadow-md duration-200'>
                                <div className='text-3xl text-white pb-3'>
                                    <RiShieldCheckLine/>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl font-semibold mb-3'>Mais Seguro</h1>
                                    <div className='items-center flex'>
                                        <DesCardMais>
                                            Desde 2015 no mercado. Levando crédito seguro e confiável
                                        </DesCardMais>
                                    </div>
                                </div>
                            </CardVantMais>
                            
                        </div>

                        <div className='mt-5 justify-center lg:hidden block'>
                            <BtnMais>Solicite agora</BtnMais>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </section>
    )
}
