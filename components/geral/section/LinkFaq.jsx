import Image from 'next/image';
import Modelo from '../../../public/img/pers_faq_amarelo.png'
import { Btn } from '../style';
import { FaRegQuestionCircle } from "react-icons/fa"
import Link from 'next/link'
import { PiQuestionMarkBold } from "react-icons/pi"

export default function LinkFaq(){
    return(
        <section className='lg:px-56 bg-linear-to-b from-slate-100 to-white'>
            <div className='lg:pt-32 pt-8 container-custom'>
                
                <div className='z-0 relative overflow-hidden bg-linear-to-l from-yellow-200 to-yellow-500 lg:h-96 lg:mb-10 h-180 lg:w-250 rounded-3xl mx-auto shadow-lg'>
                    <PiQuestionMarkBold className='text-9xl absolute -left-1 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-5xl absolute left-20 top-32 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-5xl absolute left-20 top-0 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-8xl absolute left-0 top-32 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-4xl absolute left-12 top-52 text-yellow-300/40'/>

                    <PiQuestionMarkBold className='text-6xl absolute left-12 top-60 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-7xl absolute left-32 top-24 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-3xl absolute left-28 top-6 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-7xl absolute left-16 top-16 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-3xl absolute left-20 top-48 text-yellow-300/40'/>

                    <PiQuestionMarkBold className='text-7xl absolute left-44 top-8 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-2xl absolute left-16 top-44 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-5xl absolute left-6 top-72 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-2xl absolute left-5 top-28 text-yellow-300/40'/>
                    <PiQuestionMarkBold className='text-5xl absolute left-36 top-12 text-yellow-300/40'/>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 -mt-168 lg:-mt-118'>

                    <div className='col-span-1 grid lg:order-0 order-4 lg:justify-end justify-center z-10'>
                        <Image className='lg:w-87.5 w-75'src={Modelo} alt=''/>
                    </div>
                        
                    <div className='col-span-1 content-center lg:w-105 lg:ml-5 mx-8 z-10'>
                        <div className='lg:text-4xl text-3xl font-medium tracking-tight text-center lg:text-left'>
                            <h1 className='text-white'>Ainda está com</h1>
                            <h1 className='text-yellow-600 font-bold'>dúvidas?</h1>
                        </div>

                        <div className='text-white font-light my-5'>
                            <p className='lg:mb-2 text-center lg:text-left '>
                                Acesse nossa página de perguntas frequentes, tenho certeza que vamos conseguir te ajudar!
                            </p>
                        </div>
                            
                        <div className='flex lg:justify-start justify-center my-6 lg:my-0'>
                            
                            <Btn>
                                <Link className='flex items-center' passHref href="/faq">
                                    Dúvidas 
                                    <FaRegQuestionCircle className='ml-1'/>
                                </Link>
                            </Btn>
                            
                        </div>
                    </div>

                </div>

            </div>
            
        </section>
    )
}