import tw from "tailwind-styled-components";

//MAIN
//MAIN FGTS
export const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500 
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
    shadow-amber-400/50
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
    lg:text-7xl
    text-[48px] 
    text-center 
    lg:text-left 
    font-semibold
    tracking-tighter
`

//REGRAS
//REGRAS GERAIS FGTS
export const BtnCalcRegras = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    text-xl 
    w-full
    lg:w-96
    lg:py-4
    py-3
    rounded-xl
    text-white
    shadow-md
    shadow-amber-400/50 
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
`;

//SIMULADOR
//SIMULADOR FGTS
export const BtnSolic = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    text-xl
    py-3
    flex-1
    rounded-lg
    text-white
    border-b-2 
    border-amber-300
    focus:outline-none
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:scale-105
    active:scale-90
    duration-150
`
export const IntSolic = tw.input`
    w-full
    focus:outline-none
    rounded-lg
    pr-3
    pl-10
    py-3
    border-0
    placeholder-slate-400
    focus:ring-2
    focus:ring-blue-300
    focus:ring-opacity-70
`
//VANTAGENS
//VANTASGENS FGTS
export const Card = tw.div`
    flex 
    justify-center
    items-stretch
    group
    hover:scale-110
    duration-300
    mb-4
    rounded-xl 
    p-2 
    bg-blue-600
    shadow-lg
    shadow-blue-700
    hover:bg-blue-50
    lg:h-[230px]
    lg:w-[230px]
    h-[24vh]
    relative
`

export const CardFront = tw.div`
    self-center
    text-md 
    tracking-tighter
    mx-2 
    lg:mx-4 
    text-center 
    group-hover:scale-0 
    absolute 
    duration-500
`

export const CardBack = tw.div`
    px-2 
    self-center
    text-center 
    lg:text-lg
    text-slate-400
    text-md
    tracking-tighter 
    scale-0 
    group-hover:scale-100 
    duration-500
`