import Image from 'next/image'
import Persona from '../../public/img/mulher_azul.png'
import { Card, CardFront, CardBack } from './STYLES'
import { MdMoneyOff } from 'react-icons/md'
import { VscSearchStop } from 'react-icons/vsc'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { GiMoneyStack } from 'react-icons/gi'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function SectionVantagens() {
    return (
        <section className='bg-gradient-to-b from-[#002CBD] via-blue-700 to-blue-600'>
            
            <div className='container-custom'>

                <div className='text-justify lg:pt-8 pt-8 lg:mb-8'>
                    <h1 className="text-blue-300 mx-4 lg:text-4xl text-2xl font-semibold tracking-tighter lg:mb-6 mb-2 p-3 text-center">
                        O que é a antecipação Saque-Aniversário?
                    </h1>

                    <p className="text-white text-xs lg:text-lg text-center lg:px-28 px-4">
                        É uma modalidade de empréstimo para quem tem saldo no FGTS em contas ativas ou inativas, e optou
                        pelo saque-aniversário. Vejam algunas vantagens do Empréstimo FGTS na ValoReal
                    </p>
                </div>

                <div className='grid lg:grid-cols-5 grid-cols-2 select-none justify-items-center lg:mx-20'>

                    <div className='lg:my-auto my-0 lg:px-0 px-2 lg:pt-12 pt-8 lg:order-1'>
                        <Card>
                            <CardFront>
                                <MdMoneyOff className='text-5xl text-white mx-auto mb-3' />
                                <h2 className='text-blue-300 lg:text-2xl text-sm tracking-tighter m-3'>
                                    Sem mensalidades para pagar
                                </h2>

                                <div className='flex justify-end'>
                                    <HiOutlineArrowNarrowRight className='text-white text-lg' />
                                </div>
                            </CardFront>

                            <CardBack>
                                <p>Não compromete sua renda com pagamento de mensalidades.</p>
                            </CardBack>
                        </Card>

                        <Card>
                            <CardFront>
                                <AiOutlineFieldTime className='text-5xl text-white mx-auto mb-3' />
                                <h2 className='text-blue-300 lg:text-2xl text-sm m-3'>
                                    Liberação mais rápida do mercado
                                </h2>

                                <div className='flex justify-end'>
                                    <HiOutlineArrowNarrowRight className='text-white text-xl' />
                                </div>
                            </CardFront>

                            <CardBack>
                                <p>Em até 30 minutos o dinheiro já estará na sua conta!</p>
                            </CardBack>
                        </Card>
                    </div>

                    <div className='pt-0 lg:pt-8 content-end lg:px-4 lg:col-span-3 col-span-2 grid justify-center lg:order-2 order-3'>
                        <Image src={Persona} alt='' />
                    </div>

                    <div className='lg:my-auto my-0 lg:px-0 px-2 lg:pt-12 pt-8 lg:order-3'>

                        <Card>
                            <CardFront>
                                <GiMoneyStack className='text-5xl text-white mx-auto mb-3' />
                                <h2 className='text-blue-300 lg:text-2xl text-sm m-3'>Antecipe até 12 saques do seu FGTS</h2>

                                <div className='flex justify-end'>
                                    <HiOutlineArrowNarrowRight className='text-white text-xl' />
                                </div>
                            </CardFront>

                            <CardBack>
                                <p>Até 12 parcelas anuais do seu Saque FGTS, contrate a partir de R$ 200,00</p>
                            </CardBack>
                        </Card>

                        <Card>
                            <CardFront>
                                <VscSearchStop className='text-5xl text-white mx-auto mb-3' />
                                <h2 className='text-blue-300 lg:text-2xl text-sm m-3'>Sem consulta no SPC/SERASA</h2>

                                <div className='flex justify-end'>
                                    <HiOutlineArrowNarrowRight className='text-white text-xl' />
                                </div>
                            </CardFront>

                            <CardBack>
                                Se estiver negativado, não tem problema. Não consulta SPC e SERASA.
                            </CardBack>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    )
}