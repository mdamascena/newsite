import tw from 'tailwind-styled-components'
import { useState, useEffect } from "react"
import {AiOutlineBarcode} from "react-icons/ai"
import {RiBankLine} from "react-icons/ri"
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {MdOutlineCake} from 'react-icons/md'
import {RiShieldCheckLine} from 'react-icons/ri'
import {IoStopwatchOutline} from 'react-icons/io5'
import {IoPodiumOutline} from 'react-icons/io5'
import {IoWalletOutline} from 'react-icons/io5'
import Image from 'next/image'
import Pers from '../public/img/valoreal_mobile_s.png'


const CardMod = tw.div`
    group
    bg-white
    hover:bg-blue-800
    
    hover:scale-110 
    col-span-1
    text-white 
    hover:z-10
    py
    px-2
    mx-1
    shadow-lg
    shadow-blue-800/30
    duration-300
    cursor-pointer 
    flex 
    justify-center 
    items-center
    rounded-sm
`;

export default function SessaoModalidades(){

    const [valorEmp, setValorEmp] = useState(1);

    const handleChange = (e, newValue) =>{
        parseInt(setValorEmp(newValue))
    }

    return(
        <section className="bg-slate-50">
            <div className="px-5 lg:px-28 grid grid-cols-1 md:grid-cols-4 poppins relative -top-5 md:-top-20">
                {/*Energia*/}
                <CardMod>
                    <div className="p-3 duration-300">
                        <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full"/>
                        <p className="poppins text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="poppins text-lg text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                    </div>      
                </CardMod>

                {/*Boleto*/}
                <CardMod>
                    <div className="p-3 duration-300">
                        <AiOutlineBarcode className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full"/>
                        <p className="poppins text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="poppins text-lg text-slate-400 mb-2 group-hover:text-white">Pessoal CredBoleto</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                    </div>
                </CardMod>

                {/*FGTS*/}
                <CardMod>
                   <div className="p-3 duration-300">
                        <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full"/>
                        <p className="poppins text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                        <p className="poppins text-lg text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p> 
                    </div>         
                </CardMod>

                {/*Consignado*/}
                <CardMod>
                    <div className="p-3 duration-300">
                        <RiBankLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full"/>
                        <p className="poppins text-xl font-bold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="poppins text-lg text-slate-400 mb-2 group-hover:text-white">Consignado</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Para beneficiários do INSS com pagamento em 10 minutos</p>
                    </div> 
                </CardMod>
            </div>

            <div className="lg:mx-28 mx-4 relative -top-8">
                <h1 className="poppins text-center text-slate-400 font-bold tracking-tight text-3xl mb-3">
                    Aqui vc encontra o que precisa
                </h1>
            </div>

            <div className='grid grid-cols-12 md:grid-cols-12 justify-items-stretch items-stretch'>

                <div className='justify-self-end col-span-5 pl-52'>

                    <div className='flex p-2 mb-5'>
                        <div className='my-auto'>
                            <p className='poppins text-blue-500 font-semibold text-xl text-right mb-0'>Mais opções</p>
                            <p className='poppins text-slate-400 text-right'>Diversas modalidades de empréstimo em um só lugar.</p> 
                        </div>
                        <IoWalletOutline className='text-7xl text-cyan-400 bg-white rounded-lg p-3 m-4 shadow-md'/>
                    </div>
                        
                    <div className='flex p-2'>
                        <div className='my-auto'>
                            <p className='poppins text-blue-500 font-semibold text-xl text-right mb-0'>Mais rápido</p>
                            <p className='poppins text-slate-400 text-right'>Nossa tecnologia agiliza tudo para empréstimo ser liberado.</p>
                        </div>
                        <IoStopwatchOutline className='text-7xl text-cyan-400 bg-white rounded-lg p-3 m-4 shadow-md'/>
                    </div>
                    
                </div>

                <div className='w-56 grid justify-self-center col-span-2'>
                    <Image src={Pers} />
                </div>

                <div className='w-9/12 justify-self-center col-span-5'>

                    <div className='p-2'>
                        <IoPodiumOutline className='text-5xl text-cyan-400 mx-auto'/>
                        <p className='poppins text-blue-500 font-semibold text-xl text-center mb-2'>Mais ofertas</p>
                        <p className='poppins text-slate-400 text-center'>Os melhores bancos, com as melhores condições do mercado.</p> 
                    </div>
                    
                    <div className='p-2'>
                        <RiShieldCheckLine className='text-5xl text-cyan-400 mx-auto'/>
                        <p className='poppins text-blue-500 font-semibold text-xl text-center mb-2'>Mais confiança</p>
                        <p className='poppins text-slate-400 text-center'>Desde 2015, atuante no mercado. Empréstimo com muito mais segurança.</p> 
                    </div>
                    
                </div>
            </div>

        </section>
    )
}