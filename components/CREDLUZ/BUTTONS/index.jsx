import tw from 'tailwind-styled-components'

export const BtnSend = tw.button`
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

export const BtnBack = tw.button`
    bg-blue-100
    items-center
    justify-center
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
`