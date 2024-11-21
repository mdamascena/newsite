import { HiArrowTrendingUp } from "react-icons/hi2"
import { BiMoneyWithdraw } from "react-icons/bi"
import { GoHeartFill } from "react-icons/go"
import { MdOutlinePix } from "react-icons/md"

export default function SeuPotencial(){
    return(
        <section className='bg-white '>
            
            <div className='container-custom pb-32 pt-24'>
                
                <div className='mb-16'>
                    <h1 className='text-3xl lg:text-5xl text-blue-600 tracking-tighter'>
                        Seu bolso, suas regras!
                    </h1>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 lg:mx-3'>
                    
                    {/*Propostas*/}
                    <div className='col-span-1 rounded-xl bg-gradient-to-t from-blue-800 to-blue-600 p-5 lg:p-8 text-white relative h-80'>
                        <div className="text-center mb-5">
                            <h1 className='text-xl tracking-tight font-semibold'>
                                Propostas pré-aprovadas
                            </h1>

                            <p className='text-sm tracking-tight font-light'>
                                Aqui você recebe várias propostas com um único cadastro
                            </p>
                        </div>
                        
                        {/*propostas*/}
                        <div className="">
                            <div className="relative flex justify-center">
                                <div className="bg-slate-300 rounded-lg shadow-lg p-2 absolute w-full top-14 scale-90">
                                    
                                    <div className="flex items-center bg-slate-100 rounded-lg p-1 justify-between">
                                        <div className="ml-2">
                                            <p className="text-[12px] -mb-1 font-extralight">Limite pré-aprovado</p>
                                            <p className="text-[10px] font-semibold">Empréstimo consignado</p>
                                        </div>
                                        <BiMoneyWithdraw className="p-1.5 text-4xl text-white bg-blue-700 rounded-md"/>
                                    </div>

                                    <div className="mt-2 flex items-center">
                                        <p className="text-lg tracking-tight font-semibold text-blue-800">
                                            R$ 8.056,33
                                        </p>

                                        <div className=" items-center flex space-x-1 ml-1">
                                            <span className="text-[10px] bg-blue-300 text-blue-800 rounded-small py-1 px-2">
                                                3,00% a.m
                                            </span>

                                            <span className="text-[10px] bg-blue-300 text-blue-800 rounded-small py-1 px-2">
                                                Até 12x
                                            </span>

                                            <div className="flex items-center bg-blue-300 text-blue-800 rounded-small py-0.5 px-2 mr-1">
                                                <MdOutlinePix className="text-blue-500 mr-0.5"/>
                                                <span className="text-[10px] text-blue-800">pix</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-lg shadow-lg p-2 absolute w-full top-7 scale-95">
                                    
                                    <div className="flex items-center bg-slate-100 rounded-lg p-1 justify-between">
                                        <div className="ml-2">
                                            <p className="text-[12px] -mb-1 font-extralight">Limite pré-aprovado</p>
                                            <p className="text-[10px] font-semibold">Empréstimo consignado</p>
                                        </div>
                                        <BiMoneyWithdraw className="p-1.5 text-4xl text-white bg-blue-600 rounded-md"/>
                                    </div>

                                    <div className="mt-2 flex items-center">
                                        <p className="text-lg tracking-tight font-semibold text-blue-600">
                                            R$ 10.000,00
                                        </p>

                                        <div className=" items-center flex space-x-1 ml-1">
                                            <span className="text-[10px] bg-blue-100 text-blue-600 rounded-small py-1 px-2">
                                                2,05% a.m
                                            </span>

                                            <span className="text-[10px] bg-blue-100 text-blue-600 rounded-small py-1 px-2">
                                                Até 24x
                                            </span>

                                            <div className="flex items-center bg-blue-100 text-blue-600 rounded-small py-0.5 px-2 mr-1">
                                                <MdOutlinePix className="text-blue-500 mr-0.5"/>
                                                <span className="text-[10px] text-blue-500">pix</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-lg shadow-lg p-2 absolute w-full">
                                    
                                    <div className="flex items-center bg-blue-100 rounded-lg p-1 justify-between">
                                        <div className="ml-2 text-blue-500">
                                            <p className="text-[12px] -mb-1 font-extralight">Limite pré-aprovado</p>
                                            <p className="text-[10px] font-semibold">Empréstimo consignado</p>
                                        </div>
                                        <BiMoneyWithdraw className="p-1.5 text-4xl text-white bg-blue-600 rounded-md"/>
                                    </div>

                                    <div className="mt-2 flex items-center">
                                        <p className="text-lg tracking-tight font-semibold text-blue-500">
                                            R$ 20.056,33
                                        </p>

                                        <div className=" items-center flex space-x-1 ml-1">
                                            <span className="text-[10px] bg-blue-50 text-blue-500 rounded-small py-1 px-2">
                                                1,50% a.m
                                            </span>

                                            <span className="text-[10px] bg-blue-50 text-blue-500 rounded-small py-1 px-2">
                                                Até 84x
                                            </span>

                                            <div className="flex items-center bg-blue-50 text-blue-500 rounded-small py-0.5 px-2 mr-1">
                                                <MdOutlinePix className="text-blue-500 mr-0.5"/>
                                                <span className="text-[10px] text-blue-500">pix</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/*Card grafico*/}
                    <div className='col-span-1 rounded-xl bg-gradient-to-t from-slate-200 to-slate-100 p-5 lg:p-8 text-slate-400 h-80'>

                        <div className="text-center mb-5">
                            <h1 className='text-xl tracking-tight font-semibold'>
                                O melhor para você!
                            </h1>

                            <p className='text-sm tracking-tight font-light'>
                                Compare e escolha a opção que cabe melhor no seu bolso
                            </p>
                        </div>

                        <div className="flex justify-center items-end mt-8">
                            <div className="flex space-x-3 items-end">
                                <div className="bg-gradient-to-b from-slate-300 to-slate-100 rounded-t-md w-12 h-24"/>
                                <div className="bg-gradient-to-b from-blue-500 to-blue-50 rounded-t-md w-12 h-16">
                                    <GoHeartFill className="text-xl text-blue-500 -mt-5 mx-auto"/>
                                </div>
                                <div className="bg-gradient-to-b from-slate-300 to-slate-100 rounded-t-md w-12 h-32"/>
                                <div className="bg-gradient-to-b from-slate-300 to-slate-100 rounded-t-md w-12 h-24"/>
                            </div>
                        </div>

                        <hr className="w-60 mx-auto border-slate-300"/>

                    </div>
                    
                    {/*Limite*/}
                    <div className='col-span-1 rounded-xl bg-gradient-to-t from-slate-200 to-slate-100 p-5 lg:p-8 text-slate-400 h-80'>
                        
                        <div className='text-center'>

                            <div className='mb-5'>
                                <h1 className='text-xl tracking-tight font-semibold'>Aqui o seu valor é real</h1>
                                <p className='text-sm tracking-tight font-light'>
                                    Descubra seu limite exato e receba orientação personalizada.
                                </p>
                            </div>

                            <p className='bg-white p-1 rounded-3xl text-[10px] w-24 shadow-md -rotate-6 ml-10 text-blue-500 font-semibold'>Pré-aprovado</p>
                            
                            <div className='grid grid-cols-3 items-end justify-items-center mb-2'>
                                
                                <div className='col-span-3 text-start flex justify-center '>
                                    <div className='mt-20'>
                                        <HiArrowTrendingUp className='rounded-full bg-white p-1.5 text-3xl shadow-xl'/>
                                    </div>
                                    <div className='bg-white shadow-xl rounded-xl p-2 -rotate-12 border-blue-500 border-r-[30px]'>
                                        <div className='flex items-center'>
                                            <p className='font-semibold tracking-tighter'>Total de limite</p>
                                            <BiMoneyWithdraw className='text-blue-500 text-xl ml-1 font-semibold'/>
                                        </div>

                                        <div className='py-3'>
                                            <p className='lg:text-2xl text-xl font-semibold tracking-tighter text-blue-500'>
                                                R$ 15.035,00
                                            </p>
                                        </div>

                                        <div className=" items-center flex space-x-1 ml-1">
                                            <span className="text-[10px] bg-blue-50 text-blue-500 rounded-small py-1 px-2">
                                                1,59% a.m
                                            </span>

                                            <span className="text-[10px] bg-blue-50 text-blue-500 rounded-small py-1 px-2">
                                                Até 12x
                                            </span>
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