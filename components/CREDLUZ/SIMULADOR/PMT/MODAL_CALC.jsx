import { DialogContent, DialogHeader, DialogDescription, DialogClose } from "../../../ui/dialog_noclose"
import Image from "next/image"
import LogoCrefaz from '../../../../public/img/LOGO_CREFAZ.png'
import tw from 'tailwind-styled-components'
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { HiArrowUturnLeft } from 'react-icons/hi2'
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

export default function Modal({prazo, parcela, valor, showSimulador }){

    const handleRecalcClick = () => {
        setTimeout(() => {
            showSimulador();
        }, 800);
    };
    
    return(

        <DialogContent className='sm:max-w-[500px] px-3 lg:px-5 py-5'>
            
            <DialogHeader className='select-none'>
                
                <DialogDescription>
                    <div className="bg-slate-200 p-2 rounded-md text-center lg:flex justify-center lg:py-4">
                        <p className="text-slate-400 tracking-tight text-md">
                            Empréstimo concedido pela financeira
                        </p>

                        <div className="flex justify-center lg:ml-2">
                            <Image src={LogoCrefaz} width={100} alt=""/>
                        </div>
                    </div>
                </DialogDescription>

            </DialogHeader>

            <div className=" rounded-lg p-3 grid grid-cols-6 border-2 border-dashed border-slate-300">

                <div className="overflow-hidden bg-blue-600 rounded-lg text-blue-200/50 col-span-1 justify-center items-center flex">
                    <RiMoneyDollarCircleLine className="text-9xl relative"/>
                </div>

                <div className="col-span-5">

                    <div className=" ml-3 justify-items-end grid">
                        <p className="text-slate-400 font-light">Simulação de crédito</p>
                        <div className="text-blue-600 text-4xl font-[700] tracking-tight">
                            {Number(valor).toLocaleString('pt-BR', {style:'currency', currency: 'BRL',})}
                        </div>
                        
                        <span className="border-b border-slate-400 border-dashed w-full"/>
                            
                        <div className="text-blue-700 font-light mt-1 w-40 text-lg bg-blue-200 rounded-md">
                            <div className="text-center">
                                {prazo}X de R$ {Number(parcela).toLocaleString('pt-BR')}
                            </div>
                        </div>
                    </div>

                    <div className="text-[8px] lg:text-[10px] mt-2 p-2 bg-slate-200 rounded-lg ml-2 text-justify">
                        <p className="text-slate-400 font-light">
                            Pagamento de 8 a 22 meses. Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%. Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                        </p>
                    </div>

                </div>

                
                
            </div>
            <div className="justify-center flex -mt-4">
                    <DialogClose asChild>
                        <BtnRecalc className="w-full" onClick={handleRecalcClick}>
                            <HiArrowUturnLeft className="text-2xl mr-1"/>
                            Simular outro valor
                        </BtnRecalc>
                    </DialogClose>
                </div>

            <h2 className="text-center text-slate-400">
                Para solicitar esse valor, clique em botão abaixo
            </h2>

            <div className="justify-center flex">
                <BtnSolicita className="animate-pulse duration-700 shadow-lg hover:animate-none">
                    Solicitar Empréstimo
                </BtnSolicita>
            </div>

            <ul className="text-slate-400 font-light mx-5 mt-3">

                <li className="flex items-center justify-between">
                    
                    Sem comprovação de renda
                    <div className="border-b border-dashed border-slate-400 lg:w-24"/>
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-400"/>
                </li>

                <li className="flex items-center justify-between">
                    Possibilidade para negativado*
                    <div className="border-b border-dashed border-slate-400 lg:w-24"/>
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-400"/>
                </li>

                <li className="flex items-center justify-between">
                    
                    Liberação no mesmo dia
                    <div className="border-b border-dashed border-slate-400 lg:w-24"/>
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-400"/>
                </li>

                <li className="flex items-center justify-between">
                    
                    Limite de até R$ 3.300,00*
                    <div className="border-b border-dashed border-slate-400 lg:w-24"/>
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-yellow-400"/>
                </li>

            </ul>
            
            <div className="mt-2">
                <p className="text-slate-400 text-sm text-end">*Crédito sujeito a análise</p>
            </div>
            
        </DialogContent>
    )
}
