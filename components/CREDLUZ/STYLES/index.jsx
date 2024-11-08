import tw from "tailwind-styled-components";

//COMO FUNCIONA
export const NumCard = tw.span`
    relative 
    bottom-52
    font-semibold
    text-[15rem] 
    bg-clip-text 
    text-transparent 
    bg-gradient-to-t 
    from-blue-600/10
    via-blue-600/80
    to-blue-400
`

//DESCRIÇÃO
export const Card = tw.div`
    col-span-1 
    p-5 rounded-xl 
    bg-white 
    shadow-lg
    duration-200 
    hover:scale-110
`

//MAIN CREDLUZ FAST
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

//REGRAS
export const CardRegras = tw.div`
    bg-blue-800 
    saturate-150 
    rounded-xl 
    shadow-lg
    px-5 
    py-3
`

//SIMULADOR
//VALORES
export const Btn = tw.button`
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
export const BtnMaisValor = tw.button`
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
export const BtnCalcValores = tw.button`
    text-white
    text-xl
    w-[98%]
    mx-1
    mb-2
    mt-1
    py-6
    bg-yellow-400
    saturate-150
    tracking-tighter
    rounded-lg
    hover:bg-yellow-500
    hover:scale-105
    active:scale-90 
    duration-300
`

//PMT
//DIALOG CALC
export const BtnSolicita = tw.button`
    flex 
    items-center 
    justify-center 
    text-white
    py-3
    px-2
    rounded-md
    mt-2
    bg-amber-400
    active:bg-amber-600
    hover:bg-amber-600
    hover:scale-105
    active:scale-90 
    duration-200  
`
export const BtnRecalc = tw.button`
    flex 
    items-center 
    justify-center
    text-yellow-400
    bg-white 
    py-3 
    px-2
    rounded-md
    mt-2
    hover:scale-105
    active:bg-slate-200
    active:scale-90 
    duration-200
`

//PMT GERAL
export const BtnPmtGeral = tw.button`
    w-full
    py-6
    px-3 
    bg-btncalc
    saturate-150
    hover:bg-yellow-400
    focus:bg-yellow-500
    duration-300
    text-white 
    rounded-md
`
export const BtnVolta = tw.button`
    w-full
    py-6
    px-3
    col-span-2
    flex
    justify-center 
    items-center
    saturate-150
    bg-blue-700
    hover:bg-blue-800 
    focus:bg-blue-950
    duration-300
    text-white 
    rounded-md
`
