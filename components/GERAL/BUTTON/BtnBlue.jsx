import React from 'react'
import tw from 'tailwind-styled-components'

const Btn = tw.button`
    bg-blue-700
    items-center 
    justify-center
    text-white
    w-full
    py-3
    lg:px-5 
    rounded-lg
    active:bg-blue-900
    hover:bg-blue-600
    hover:scale-105
    active:scale-90 
    duration-150   
`

export default function BtnBlue ({nome}){
    return <Btn>{nome}</Btn>
}