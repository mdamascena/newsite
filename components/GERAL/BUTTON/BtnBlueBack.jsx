import React from 'react'
import tw from 'tailwind-styled-components'

const BtnBack = tw.button`
    bg-blue-100
    items-center
    justify-center
    flex
    text-blue-500
    w-full
    py-3
    lg:px-5 
    rounded-lg
    active:bg-blue-300
    hover:bg-blue-50
    hover:scale-105
    active:scale-90 
    duration-150
`;

export default function BtnBlueBack
 ({nome, event, iconLeft, iconRight}){
    return(
        <BtnBack onClick={event}>
            {iconLeft}
            {nome}
            {iconRight}
        </BtnBack>
    )
}



