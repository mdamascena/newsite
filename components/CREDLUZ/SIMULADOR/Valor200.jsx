import tw from 'tailwind-styled-components'
import {HiArrowUturnLeft} from 'react-icons/hi2'
import { useState } from "react"

const Btn = tw.button`
    col-span-1    
    py-5
    lg:py-6 
    px-3 
    bg-btncalc
    saturate-150
    hover:bg-yellow-400
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

export default function Valor200(){
    return(
        <>
            <div id='calc_200' name='btnParc'>
                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='btnCalc_200_8'>08 X</Btn>
                    <Btn id='btnCalc_200_12'>12 X</Btn>
                </div>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='btnCalc_200_15'>15 X</Btn>
                    <Btn id='btnCalc_200_16'>16 X</Btn>
                </div>

                <div className="grid grid-cols-1 gap-1">
                    <BtnVolta id='BtnVolta'>
                        <HiArrowUturnLeft className='text-xl mr-2'/>
                        Simular outro valor
                    </BtnVolta>
                </div>
            </div>

            <div id='calc_300' name='btnParc'>
                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='btnCalc_200_8'>08 X</Btn>
                    <Btn id='btnCalc_200_12'>12 X</Btn>
                </div>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='btnCalc_200_15'>15 X</Btn>
                    <Btn id='btnCalc_200_16'>16 X</Btn>
                </div>

                <div className="grid grid-cols-1 gap-1">
                    <BtnVolta id='BtnVolta'>
                        <HiArrowUturnLeft className='text-xl mr-2'/>
                        Simular outro valor
                    </BtnVolta>
                </div>
            </div>
        </>
        
    )
}