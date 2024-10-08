import Image from 'next/image';
import Modelo from '../../../public/img/perso_secion.png'
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const Btn = tw.button`
    bg-blue-500
    saturate-150
    flex 
    items-center 
    justify-center
    text-white 
    tracking-tighter
    w-72
    py-3
    lg:px-5 
    rounded-3xl
    active:bg-blue-900
    hover:bg-blue-700
    hover:scale-105
    active:scale-90 
    duration-150      
`

export default function SeuPotencial(){
    return(
        <section className='lg:px-56 bg-slate-200'>
            <div className='lg:pt-32 pt-8'>
                <div className='bg-white lg:h-96 h-[45rem] rounded-3xl mx-4 lg:mx-8'/>
                    
                    <div className='grid lg:grid-cols-2 grid-cols-1 mt-[-42rem] lg:mt-[-29.5rem] lg:mx-28 mx-4'>
                        <div className='col-span-1 mx-auto lg:order-none order-4'>
                            <Image className='lg:w-[350px] w-[300px]'src={Modelo} alt=''/>
                        </div>
                        <div className='col-span-1 content-center'>
                            <div className='lg:text-4xl text-3xl font-medium tracking-tight text-center lg:text-left'>
                                <h1 className='text-slate-500'>Libere o potencial</h1>
                                <h1 className='text-blue-600'>do seu crédito</h1>
                            </div>

                            <div className='text-slate-500 font-light my-5 px-10 lg:px-0'>
                                <p className='lg:mb-2 text-center lg:text-left '>Desbloqueie seu potencial de crédito aqui! Acesse diversas ofertas de empréstimos em um só lugar. 
                                    Crédito certo para seu perfil, facilidades e conveniência garantidas. Simplifique sua vida financeira hoje mesmo!
                                </p>
                            </div>
                            
                            <div className='flex lg:justify-start justify-center my-6 lg:my-0'>
                                <Btn>Pedir seu crédito</Btn>
                            </div>
                        </div>
                    <div/>
                    
                </div>
            </div>
        </section>
    )
}