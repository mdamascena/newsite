import tw from 'tailwind-styled-components'
import {useState} from "react"
import { motion } from 'framer-motion'
import { Slider } from '../../ui/slider'
import '../SIMULADOR/PMT/MODAL_CALC'

const Btn = tw.button`
    col-span-1    
    py-6
    lg:py-6 
    px-3 
    bg-btncalc
    saturate-150
    hover:bg-yellow-300
    focus:bg-yellow-500
    duration-300
    text-white 
    rounded-md
`
const BtnMaisValor = tw.button`
    bg-white/30
    flex
    items-center 
    justify-center
    text-white
    lg:text-md
    text-sm 
    tracking-tighter
    py-1
    px-12
    rounded-md
    hover:bg-sky-500
    hover:scale-105
    active:scale-90 
    duration-150
`
const BtnCalc = tw.button`
    text-white
    text-xl
    w-[98%]
    mx-1
    mb-2
    mt-1
    py-6
    bg-yellow-400
    saturate-150
    tracking-tighter
    rounded-lg
    hover:bg-yellow-500
    hover:scale-105
    active:scale-90 
    duration-300
`
const MotionBtn = motion(Btn); //Não está sendo usado
const MotionMais = motion(BtnMaisValor); //Não está sendo usado

export default function Valores({showSimulador, itemVariants}) {
    
    const [values, setValues] = useState([700]);
    
    const handleValueChange = (newValues) => {
        setValues(newValues)
    };

    const formatCurrency = (value) => {
        return Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        
        <div initial="hidden" animate="visible" variants={itemVariants}>

            <div className='p-1'>
                <h2 className='text-center mt-2 mb-3 poppins text-white'>Qual o valor desejado?</h2>
                
                <div className='rounded-lg bg-white/25 text-md pb-5 px-3 mx-1 mb-2'>
                
                    <div className=' text-white text-center font-medium tracking-tighter text-4xl mx-1 py-5'>
                        {formatCurrency(values[0])}
                    </div>

                    <div>
                        
                        <Slider
                            defaultValue={[700]}
                            min={700}
                            max={3300}
                            step={100}
                            onValueChange={handleValueChange}
                            value={values}
                            aria-label="Range Slider"
                        />
                        
                        {/*<div className="grid grid-cols-3 gap-1 mb-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT700')}>R$ 700</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT800')}>R$ 800</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT900')}>R$ 900</MotionBtn>
                        </div>*/}
                    </div>
                    <div className='text-white text-center mt-6 font-light'>
                        Escolha um valor entre R$ 700 a R$ 3.000  
                    </div>
                    
                </div>
                <BtnCalc onClick={()=>showSimulador(values[0])}>Simular valor</BtnCalc>
            </div>
        </div>
        
    )
}