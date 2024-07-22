import { DialogContent, DialogHeader, DialogDescription, DialogClose } from "../../../ui/dialog_noclose"
import Image from "next/image"
import LogoCrefaz from '../../../../public/img/logocrefaz.png'
import tw from 'tailwind-styled-components'
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { IoIosCheckmarkCircle } from "react-icons/io"
import { BsFillCalculatorFill } from "react-icons/bs"
import { FaCheck } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

const BtnSolicita = tw.button`
    flex 
    items-center 
    justify-center 
    text-white
    py-3
    px-2
    rounded-md
    mt-2
    bg-amber-400
    active:bg-amber-600
    hover:bg-amber-600
    hover:scale-105
    active:scale-90 
    duration-200  
`
const BtnRecalc = tw.button`
    flex 
    items-center 
    justify-center 
    
    text-yellow-400
    bg-white 
    py-3 
    px-2
    rounded-md
    mt-2
    hover:scale-105
    active:bg-white/30
    hover:bg-white/40
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

        <DialogContent className={`${mainFontFamily.className} sm:max-w-[450px] px-5 lg:px-8 py-5 bg-[#000055ea] border-0`}>
            
            <DialogHeader className='select-none'>
                
                <DialogDescription>
                    
                    <div className="flex items-center justify-between">
                        
                        <p className="text-amber-400 tracking-tight text-md">
                            Empréstimo pela financeira
                        </p>

                        <div className="lg:ml-2">
                            <Image src={LogoCrefaz} width={90} alt=""/>
                        </div>

                    </div>

                </DialogDescription>

            </DialogHeader>
            
            <div className="">

                <div className="flex items-center justify-between">
                    
                    <div className="pb-3">
                    
                        <p className="text-white font-light mb-2">Simulação</p>

                        <div className="text-white lg:text-5xl text-4xl font-[700] tracking-tight">
                            {Number(valor).toLocaleString('pt-BR', {style:'currency', currency: 'BRL',})}
                        </div>

                        <div className="text-white lg:text-2xl text-xl flex mt-2">
                            <div className="text-start">
                                {prazo}X de R$ {Number(parcela).toLocaleString('pt-BR')}
                            </div>
                        </div>

                    </div>

                    <div className="">
                        <div className="text-6xl bg-blue-900 text-yellow-400 p-3 rounded-xl">
                            <BiMoneyWithdraw />
                        </div>
                    </div>

                </div>

                <div className="lg:text-xs text-[10px]">
                    <p className="text-white font-light">
                        Pagamento de 8 a 22 meses. Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%. Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                    </p>
                </div>
                
                <div className="border-b border-dashed border-white w-full my-5"/>

                <div className="justify-center">
                    <BtnSolicita className="w-full">
                        Solicitar Empréstimo
                    </BtnSolicita>
                            
                    <DialogClose asChild>
                        <BtnRecalc className="w-full" onClick={handleRecalcClick}>
                            Simular outro valor
                        </BtnRecalc>
                    </DialogClose>
                </div>

            </div>
            
            <ul className="text-white font-light mt-3 gap-y-2 grid">

                <li className="flex items-center">
                    <FaCheck className="bg-blue-900 p-1 text-2xl rounded-lg text-yellow-400 mr-2"/>
                    Sem comprovação de renda
                </li>

                <li className="flex items-center">
                    <FaCheck className="bg-blue-900 p-1 text-2xl rounded-lg text-yellow-400 mr-2"/>
                    Possibilidade para negativado*
                </li>

                <li className="flex items-center">
                    <FaCheck className="bg-blue-900 p-1 text-2xl rounded-lg text-yellow-400 mr-2"/>
                    Liberação no mesmo dia
                </li>

                <li className="flex items-center">
                    <FaCheck className="bg-blue-900 p-1 text-2xl rounded-lg text-yellow-400 mr-2"/>
                    Limite de até R$ 3.300,00*
                </li>

            </ul>
            <div className="my-2">
                <p className="text-white text-sm">*Crédito sujeito a análise</p>
            </div>
            
        </DialogContent>
    )
}
