import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
import { TbSquareRoundedArrowUp } from "react-icons/tb"
import ModalCalc from "../../GERAL/MODAL/ModalCalc"

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

const MotionBtn = motion(Btn);
const MotionMais = motion(BtnMaisValor);

export default function SimuladorCredLuz({setShowCalc, itemVariants}) {

    return (
        
        <div initial="hidden" animate="visible" variants={itemVariants}>
            <div className='p-1'>
                <h2 className='text-center mb-2 poppins text-white'>Qual o valor desejado?</h2>
                
                <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1 mb-2'>

                    <div>
                        <div className="grid grid-cols-3 gap-1 mb-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT700')}>R$ 700</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT800')}>R$ 800</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT900')}>R$ 900</MotionBtn>
                        </div>

                        <div className="grid grid-cols-3 gap-1 mb-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1000')}>R$ 1000</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1100')}>R$ 1100</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1200')}>R$ 1200</MotionBtn>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1300')}>R$ 1300</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1400')}>R$ 1400</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1500')}>R$ 1500</MotionBtn>
                        </div>
                    </div>

                    <div className='hidden'>
                        <div className="grid grid-cols-3 gap-1 mb-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1600')}>R$ 1600</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1700')}>R$ 1700</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1800')}>R$ 1800</MotionBtn>
                        </div>

                        <div className="grid grid-cols-3 gap-1 mb-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT1900')}>R$ 1900</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT2000')}>R$ 2000</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT2100')}>R$ 2100</MotionBtn>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT2200')}>R$ 2200</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT2300')}>R$ 2300</MotionBtn>
                            <MotionBtn variants={itemVariants} onClick={()=>setShowCalc('PMT2400')}>R$ 2400</MotionBtn>
                        </div>
                    </div>
                     
                    <div className="justify-center pt-2 hidden">
                        <BtnMaisValor variants={itemVariants}>
                            <TbSquareRoundedArrowUp className='mr-2'/>
                            Valores maiores
                        </BtnMaisValor>
                    </div>
                    
                </div>

            </div>
        </div>
        
    )
}