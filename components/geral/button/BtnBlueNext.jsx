import React from 'react'
import tw from 'tailwind-styled-components'

const BtnNext = tw.button`
    bg-blue-700
    items-center 
    justify-center
    text-white
    
    flex

    w-full
    py-3 
    rounded-lg
    active:bg-blue-900
    hover:bg-blue-600
    hover:scale-105
    active:scale-90 
    duration-400
    disabled:opacity-50  
`

export default function BtnBlueNext ({nome, event, iconLeft, iconRight}){
    return(
        <BtnNext onClick={event}>
            {iconLeft}
            {nome}
            {iconRight}
        </BtnNext>
    ) 
}