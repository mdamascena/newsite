import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

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
const MotionBtn = motion(Btn);

export default function SimuladorCredLuz({setShowCalc, itemVariants}) {

    return (
        
        <div initial="hidden" animate="visible" variants={itemVariants}>
            <div className='p-1'>
                <h2 className='text-center mb-2 poppins text-white'>Qual o valor desejado?</h2>
                
                <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1'>
                    <div className='delay-100 duration-200' id='valores'>
                        
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

                </div>

            </div>
        </div>
        
    )
}