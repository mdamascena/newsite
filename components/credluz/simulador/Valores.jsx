import { BtnMaisValor, Btn, BtnCalcValores } from '../STYLES'
import {useState} from "react"
import { motion } from 'framer-motion'
import { Slider } from '../../ui/slider'

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
        
        <div className='p-1'>
            <h2 className='text-center mt-2 mb-3 text-white'>
                Qual o valor desejado?
            </h2>
                
            <div className='rounded-lg bg-white/25 text-md pb-5 px-3 mx-1 mb-2'>
                
                <div className=' text-white text-center font-medium tracking-tighter text-4xl mx-1 py-5'>
                    {formatCurrency(values[0])}
                </div>

                <Slider
                    defaultValue={[700]}
                    min={700}
                    max={3300}
                    step={100}
                    onValueChange={handleValueChange}
                    value={values}
                    aria-label="Range Slider"
                />
               
                <div className='text-white text-center mt-6 font-light'>
                    Escolha entre R$ 700,00 a R$ 3.300,00
                </div>
                
            </div>

            <BtnCalcValores onClick={()=>showSimulador(values[0])}>
                Simular valor
            </BtnCalcValores>
                
        </div> 
        
    )
}