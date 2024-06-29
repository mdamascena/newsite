import { DialogContent, DialogHeader, DialogDescription } from "../../../ui/dialog_noclose"
import Image from "next/image"
import LogoCrefaz from '../../../../public/img/LOGO_CREFAZ.png'
import tw from 'tailwind-styled-components'
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import {HiArrowUturnLeft} from 'react-icons/hi2'
import { IoIosCheckmarkCircle } from "react-icons/io"

const BtnSolicita = tw.button`
    bg-yellow-500
    saturate-150
    flex 
    items-center 
    justify-center
    text-white
    lg:text-md
    text-lg 
    tracking-tighter
    px-20
    lg:w-[95%]
    py-3
    lg:px-5 
    rounded-lg
    active:bg-yellow-900
    hover:bg-yellow-600
    hover:scale-105
    active:scale-90 
    duration-50    
`

const BtnRecalc = tw.button`
    flex 
    items-center 
    justify-center 
    border 
    border-blue-500 
    text-blue-500 
    py-1.5 
    px-2
    rounded-md
    mt-2
    active:bg-blue-600
    hover:bg-blue-600
    hover:text-white
    hover:scale-105
    active:scale-90 
    duration-200
`

export default function Modal({ valor, pmt }){
    
    return(

        <DialogContent className='Poppins sm:max-w-[500px] px-3 lg:px-5 py-5'>
            
            <DialogHeader className='select-none'>
                
                <DialogDescription>

                    <div className="bg-slate-200 p-2 rounded-md text-center">
                        <p className="text-slate-400 tracking-tight text-sm">
                            Empréstimo concedido pela financeira
                        </p>

                        <div className="flex justify-center">
                            <Image src={LogoCrefaz} width={100} alt=""/>
                        </div>
                    </div>

                </DialogDescription>

                <h1 className="text-slate-400 text-2xl tracking-tighter text-center">
                    Simulação do empréstimo
                </h1>

            </DialogHeader>

            <div className=" rounded-lg p-3 grid grid-cols-6 border-2 border-dashed border-slate-300">

                <div className="overflow-hidden bg-blue-600 rounded-lg text-blue-200/50 col-span-1 justify-center items-center flex">
                    <RiMoneyDollarCircleLine className="text-9xl relative bottom-8 right-6"/>
                </div>

                <div className="col-span-5">

                    <div className=" ml-3 justify-items-end grid">
                        <p className="text-slate-400 font-light">Parcelamento</p>
                        <div className="text-blue-600 text-4xl font-[600] tracking-tight">
                            {valor}
                        </div>
                        <span className="border-b border-slate-400 border-dashed w-full"/>
                            
                        <div className="text-blue-700 font-light mt-1 w-40 text-lg bg-blue-200 rounded-md">
                            <div className="text-center">{pmt}</div>
                        </div>
                    </div>

                    <div className="text-[8px] lg:text-[10px] mt-2 p-2 bg-slate-100 rounded-lg ml-2 text-end">
                        <p className="text-slate-400 font-light">
                            Pagamento de 8 a 22 meses. Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%. Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                        </p>
                    </div>

                </div>

                <div className="justify-center flex col-span-6">
                    <BtnRecalc className="w-full">
                        <HiArrowUturnLeft className="text-2xl mr-1"/>
                        Simular outro valor
                    </BtnRecalc>
                </div>
                
            </div>

            <h2 className="text-center text-slate-400">
                Para solicitar esse valor, clique em botão abaixo
            </h2>

            <div className="justify-center flex">
                <BtnSolicita className="animate-pulse duration-700 shadow-lg hover:animate-none">Solicitar Empréstimo</BtnSolicita>
            </div>

            <ul className="text-slate-400 font-light ml-12 mt-3">

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-500"/>
                    Sem comprovação de renda
                </li>

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-500"/>
                    Possibilidade para negativado*
                </li>

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-500"/>
                    Liberação no mesmo dia
                </li>

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-500"/>
                    Sem taxas antecipadas
                </li>

            </ul>
            
            <div className="mt-2">
                <p className="text-slate-400 text-sm">*Crédito sujeito a análise</p>
            </div>
            
        </DialogContent>
    )
}
