import tw from "tailwind-styled-components";

//MAIN
//MAIN FALE CONOSCO
export const Title = tw.div`
    py-5
    lg:text-5xl
    text-3xl
    text-center 
    lg:text-left 
    font-[600]
    tracking-tighter
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    from-blue-800 
    via-blue-500 
    to-blue-200 
    saturate-150
`

//FORM
export const Btn = tw.button`
    bg-blue-600
    saturate-150
    flex 
    items-center 
    justify-center
    text-white
    w-full
    lg:py-4
    py-3
    lg:px-5 
    rounded-md
    active:bg-blue-900
    hover:bg-blue-500
    hover:scale-105
    active:scale-90 
    duration-150    
`