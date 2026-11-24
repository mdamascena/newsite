import Image from 'next/image'
import PersV from '../../public/img/pers_v.png'

export default function SectionBrifing (){
    return(
        <section className='bg-white'>
            
            <div className="container-custom py-24">

                <div className="grid grid-cols-3 gap-5">

                    <div className='hidden lg:block lg:col-span-1 col-span-3 justify-self-end '>
                        <div className='col-span-1'>
                            <Image src={PersV} width={280} alt="" />
                        </div>
                    </div>

                    <div className='lg:hidden lg:col-span-1 col-span-3 justify-self-end '>
                        <div className='flex justify-center items-center'>    
                            <div className=''>
                                <Image src={PersV} width={180} alt="" />
                            </div>
                            <h1 className="lg:hidden text-5xl font-semibold tracking-tighter text-blue-700">
                                Nossa história
                            </h1>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-2 col-span-3 my-auto lg:mx-8">
                        
                        <h1 className="hidden lg:block lg:text-6xl font-semibold tracking-tighter text-blue-700 mb-5">
                            Nossa história
                        </h1>

                        <div className="text-slate-400 text-lg text-justify">
                            <p className="">
                                A ValoReal nasceu em 2015 com um propósito simples: <span className='font-bold'>facilitar o acesso 
                                ao crédito com honestidade, clareza e atendimento de verdade.</span> O que começou em lojas físicas, em São Gonçalo, evoluiu para uma operação 
                                digital capaz de atender clientes em todo o Brasil. Unimos tecnologia, experiência e transparência para tornar 
                                cada etapa mais simples, segura e confiável.
                            </p>
                            {/* <p className="">
                                A ValoReal nasceu em 2015 com um propósito simples: facilitar o acesso 
                                ao crédito com honestidade, clareza e atendimento de verdade.
                            </p>

                            <p className="mt-">
                                O que começou em lojas físicas, em São Gonçalo, evoluiu para uma operação 
                                digital capaz de atender clientes em todo o Brasil.
                            </p>

                            <p className="mt-">
                                Unimos tecnologia, experiência e transparência para tornar 
                                cada etapa mais simples, segura e confiável.
                            </p> */}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
