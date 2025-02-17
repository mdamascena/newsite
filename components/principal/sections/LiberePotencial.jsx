import Image from 'next/image';
import Modelo from '../../../public/img/perso_secion.png'
import { Btn } from '../styles';

export default function SeuPotencial(){
    return(
        <section className='lg:px-56 bg-slate-100'>
            
            <div className='lg:pt-48 pt-8 container-custom'>
                
                <div className='bg-blue-700 lg:h-96 h-[45rem] lg:w-[1000px] rounded-3xl mx-auto shadow-lg'/>
                    
                <div className='grid lg:grid-cols-2 grid-cols-1 mt-[-42rem] lg:mt-[-29.5rem]'>

                    <div className='col-span-1 grid lg:order-none order-4 lg:justify-end justify-center'>
                        <Image className='lg:w-[350px] w-[300px]'src={Modelo} alt=''/>
                    </div>
                        
                    <div className='col-span-1 content-center lg:w-[420px] lg:ml-5 mx-8'>
                        <div className='lg:text-4xl text-3xl font-medium tracking-tight text-center lg:text-left'>
                            <h1 className='text-white'>Libere o potencial</h1>
                            <h1 className='text-blue-600'>do seu crédito</h1>
                        </div>

                        <div className='text-slate-500 font-light my-5'>
                            <p className='lg:mb-2 text-center lg:text-left '>Desbloqueie seu potencial de crédito aqui! Acesse diversas ofertas de empréstimos em um só lugar. 
                                Crédito certo para seu perfil, facilidades e conveniência garantidas. Simplifique sua vida financeira hoje mesmo!
                            </p>
                        </div>
                            
                        <div className='flex lg:justify-start justify-center my-6 lg:my-0'>
                            <Btn>Pedir seu crédito</Btn>
                        </div>
                    </div>

                </div>

            </div>
            
        </section>
    )
}