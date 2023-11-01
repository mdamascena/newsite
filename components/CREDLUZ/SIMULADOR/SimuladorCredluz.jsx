import tw from 'tailwind-styled-components'
import {HiArrowUturnLeft} from 'react-icons/hi2'
import { useState } from "react"

const Btn = tw.button`
    col-span-1    
    py-6 
    px-3 
    bg-[#000055ea]
    saturate-150
    hover:bg-yellow-300
    focus:bg-yellow-500
    duration-300
    text-white 
    rounded-md
`
const BtnVolta = tw.button`
    col-span-1    
    py-6 
    px-3
    flex
    justify-center 
    items-center
    saturate-150
    bg-blue-700
    hover:bg-blue-800 
    focus:bg-blue-900
    duration-300
    text-white 
    rounded-md
`


export default function SimuladorCredLuz(props) {

    const [titleCalc, setTitleCalc] = useState('Simule seu Empréstimo');
    const [titleParc, setTitleParc] = useState('Qual o valor desejado?');

    const handleTitleCalc = (props)=>{
        setTitleCalc('Simulação de ')
    };

    return (

        <div className="max-w-md">
            
            <h1 className='text-center text-xl text-white mb-3 poppins duration-150 bg-base-calc p-2 rounded-lg'>{titleCalc}</h1>
            
            <div className='p-1 rounded-lg bg-base-calc'>

                <h2 className='text-center mb-2 poppins text-white'>{titleParc}</h2>

                <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1'>
                    
                    <div id='valores'>
                        <div className="grid grid-cols-3 gap-1 mb-1">
                            <Btn id="V700" valorBtn='R$ 700'onClick={()=>setTitleCalc('Simulação de R$ 700,00')}>R$ 700</Btn>
                            <Btn id="V800" valorBtn='R$ 800'onClick={()=>setTitleCalc('Simulação de R$ 800,00')}>R$ 800</Btn>
                            <Btn id="V900" valorBtn='R$ 900'onClick={()=>setTitleCalc('Simulação de R$ 900,00')}>R$ 900</Btn>
                        </div>

                        <div className="grid grid-cols-3 gap-1 mb-1">
                            <Btn id="V1000" valor='R$ 1000' onClick={()=>setTitleCalc('Simulação de R$ 1.000,00')}>R$ 1000</Btn>
                            <Btn id="V1100" valor='R$ 1100' onClick={()=>setTitleCalc('Simulação de R$ 1.100,00')}>R$ 1100</Btn>
                            <Btn id="V1200" valor='R$ 1000' onClick={()=>setTitleCalc('Simulação de R$ 1.200,00')}>R$ 1200</Btn>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                            <Btn id="V1300" valor='R$ 1300' onClick={()=>setTitleCalc('Simulação de R$ 1.300,00')}>R$ 1300</Btn>
                            <Btn id="V1400" valor='R$ 1400' onClick={()=>setTitleCalc('Simulação de R$ 1.400,00')}>R$ 1400</Btn>
                            <Btn id="V1500" valor='R$ 1500' onClick={()=>setTitleCalc('Simulação de R$ 1.500,00')}>R$ 1500</Btn>
                        </div>
                    </div>

                    

                </div>
            </div>

            <div className='bg-base-calc p-2 my-2 rounded-lg border-l-4 border-yellow-500'>
                <p className='lg:text-xs text-[10px] text-white text-center'>
                    Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%.
                    Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                </p>
            </div>
        </div>
    
    )
}