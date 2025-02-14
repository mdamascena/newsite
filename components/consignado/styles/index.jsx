import tw from "tailwind-styled-components";

export const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    lg:text-2xl 
    text-xl 
    lg:px-32 
    py-3
    px-18
    lg:flex-none
    flex-1
    rounded-xl
    text-white
    mt-8
    shadow-md
    shadow-amber-400 
    border-b-2 
    border-amber-300
    focus:outline-none
    hover:shadow-md
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:scale-105
    active:scale-90 
    duration-150
`

export const EmpTitle = tw.h1`
    text-blue-600 
    lg:text-6xl
    text-[48px] 
    text-center 
    lg:text-left 
    font-[600]
    tracking-tighter
`

export const Card = tw.div`
    bg-blue-200
    rounded-md
    py-1 
    px-2 
    text-blue-600 
    text-sm 
    flex 
    items-center
`