import { DialogContent, DialogHeader, DialogDescription, DialogClose } from "../../../ui/dialog_noclose"
import Image from "next/image"
import LogoCrefaz from '../../../../public/img/logocrefaz.png'
import tw from 'tailwind-styled-components'
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { IoIosCheckmarkCircle } from "react-icons/io"
import { BsFillCalculatorFill } from "react-icons/bs"
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
    active:bg-blue-600
    hover:bg-blue-600
    hover:scale-105
    active:scale-90 
    duration-200  
`
const BtnRecalc = tw.button`
    flex 
    items-center 
    justify-center 
    
    text-amber-400
    bg-white 
    py-3 
    px-2
    rounded-md
    mt-2
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

            <div className="py-5">
                <p className="text-white font-light">Simulação</p>
                       
                <div className="flex">
                            
                    <div className="text-white text-6xl font-[700] tracking-tight">
                        {/* {Number(valor).toLocaleString('pt-BR', {style:'currency', currency: 'BRL',})} */}
                        R$ {valor}
                    </div>

                    <div className="text-white text-lg ml-2">
                        <div className="text-start">
                            {prazo} X
                        </div>
                        <div className="text-start">
                            R$ {Number(parcela).toLocaleString('pt-BR')}
                        </div>
                    </div>

                </div>

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

                <div className="lg:text-xs text-[10px] mt-2">
                    <p className="text-white font-light">
                        Pagamento de 8 a 22 meses. Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%. Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                    </p>
                </div>
                        
            </div>
            
            <div className="border-b border-dashed border-white w-full"/>

            

            <ul className="text-white font-light mt-3">

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-amber-400"/>
                    Sem comprovação de renda
                </li>

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-amber-400"/>
                    Possibilidade para negativado*
                </li>

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-amber-400"/>
                    Liberação no mesmo dia
                </li>

                <li className="flex items-center">
                    <IoIosCheckmarkCircle className="text-3xl mr-1 text-amber-400"/>
                    Limite de até R$ 3.300,00*
                </li>

            </ul>
            <div className="mt-2">
                <p className="text-white text-sm">*Crédito sujeito a análise</p>
            </div>
            
        </DialogContent>
    )
}
