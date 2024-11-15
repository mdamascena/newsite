import { HiArrowTrendingUp } from "react-icons/hi2"
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoArrowDownOutline } from "react-icons/io5"

export default function SeuPotencial(){
    return(
        <section className='bg-white'>
            
            <div className='container-custom pb-[25vh]'>
                
                <div className='mb-10'>
                    <h1 className='text-center text-4xl font-semibold text-slate-400 tracking-tight'>
                        Proteja seu dinheiro com precisão exata
                    </h1>
                </div>    
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 lg:mx-16'>

                    <div className='col-span-1 rounded-xl bg-blue-600 p-5 text-white'>
                        e33
                    </div>

                    <div className='col-span-1 rounded-xl bg-slate-100 p-5 text-slate-400'>
                        <div className="relative flex flex-col gap-2">
                            <div className="bg-white rounded-lg shadow-lg h-16 top-1">
                                Limite 1
                            </div>
                            <div className="bg-white rounded-lg shadow-lg h-16 top-1">
                                Limite 2
                            </div>
                            <div className="bg-white rounded-lg shadow-lg h-16">
                                Limite 3
                            </div>
                            <div className="bg-white rounded-lg shadow-lg h-16">
                                Limite 4
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 rounded-xl bg-slate-100 p-5 text-slate-400'>
                        
                        <div className='text-center'>

                            <div className='mb-5'>
                                <h1 className='text-2xl tracking-tight font-semibold'>Aqui o seu valor é real</h1>
                                <p className='text-sm tracking-tight font-light'>
                                    Descubra seu limite exato e receba orientação personalizada em nossa plataforma.
                                </p>
                            </div>

                            <p className='bg-white p-1 rounded-3xl text-[10px] w-24 shadow-md -rotate-6 ml-10 text-blue-500 font-semibold'>Pré-aprovado</p>
                            
                            <div className='grid grid-cols-3 items-end mx-8 mb-5'>
                                
                                <div className='col-span-1 justify-end grid'>
                                    <HiArrowTrendingUp className='rounded-full bg-white p-1.5 text-3xl shadow-xl'/>
                                </div>

                                <div className='col-span-2 text-start -rotate-12'>
                                    <div className='bg-white shadow-xl rounded-xl p-5'>
                                        <div className='flex items-center'>
                                            <p className='font-semibold tracking-tighter'>Total de limite</p>
                                            <BiMoneyWithdraw className='text-blue-500 text-xl ml-1 font-semibold'/>
                                        </div>

                                        <div className='py-3'>
                                            <p className='lg:text-2xl text-xl font-semibold tracking-tighter text-blue-600'>R$ 15.035,00</p>
                                        </div>

                                        <div className='flex items-center'>
                                            <IoArrowDownOutline className='text-blue-600 bg-blue-100 saturate-200 rounded-full p-1 text-xl mr-2'/>
                                            <p className='text-sm'>1,59% a.m</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}