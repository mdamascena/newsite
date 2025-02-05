import tw from 'tailwind-styled-components'

//MAIN
//MAIN PRINCIPAL
export const BtnHome = tw.button`
    focus:outline-none
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    mx-auto
    text-xl
    lg:px-32
    lg:mx-0
    py-4
    lg:w-[450px]
    w-full
    rounded-xl
    text-white 
    mt-8
    hover:to-amber-600 
    hover:from-yellow-500
    hover:scale-105
    active:scale-90 
    duration-150
`;

//MODALIDADES
export const CardMod = tw.div`
    group
    bg-white
    hover:bg-blue-800
    hover:scale-110 
    col-span-1
    text-white 
    hover:z-10
    p-2
    mx-2
    my-2
    shadow-lg
    shadow-blue-800/30
    duration-300
    cursor-pointer 
    flex 
    justify-center 
    items-center
    rounded-md
`;

export const CardVant = tw.div`
    justify-self-center 
    self-center 
    lg:col-span-1
    col-span-2 
    p-5 
    lg:m-2
    m-0
    rounded-md
    hover:shadow-lg 
    hover:bg-white
    duration-300
`;

export const TitleCard = tw.p`
    text-blue-500 
    font-semibold 
    lg:text-2xl
    text-xl 
    mb-0 
    self-center
`;

export const DesCard = tw.p`
    text-slate-400 
    text-left
    text-sm
    lg:text-md
`;

export const Circle = tw.span`
    lg:p-8
    p-6 
    rounded-full 
    bg-blue-200
    absolute 
    lg:right-7
    lg:top-2
    right-1
    mix-blend-multiply
`;

//SECTIONS
//LIBERE POTENCIAL
export const Btn = tw.button`
    bg-blue-500
    saturate-150
    flex 
    items-center 
    justify-center
    text-white 
    tracking-tighter
    w-72
    py-3
    lg:px-5 
    rounded-3xl
    active:bg-blue-900
    hover:bg-blue-700
    hover:scale-105
    active:scale-90 
    duration-150      
`;

//MAIS
export const CardVantMais = tw.div`
    col-span-1
    bg-[#0006b0]
    rounded-xl 
    lg:p-6
    p-3 
    lg:h-52
`;

export const DesCardMais = tw.p`
    text-blue-400
    text-left
    text-[15px]
    lg:text-sm
    leading-tight
`;

export const BtnMais = tw.button`
    focus:outline-none
    bg-blue-700
    text-lg
    lg:px-32
    lg:mx-0
    py-3
    mt-3
    w-full
    lg:w-96
    rounded-lg
    text-white
    hover:bg-blue-500
    hover:scale-105
    active:scale-90
    active:bg-blue-800
    duration-150
`

//SLIDE MODALIDADE
export const LiMod = tw.li`
    select-none
    group
    lg:pl-8
    py-3
    my-6
    cursor-pointer
    hidden
    lg:block
    duration-150
    ${(p) => (p.$isActive ? 'text-blue-500 block' : 'text-slate-300 hover:text-blue-500')}
    ${(p) => (p.$isActive ? 'lg:border-l-4 lg:border-blue-500' : 'lg:hover:border-l-4 lg:hover:border-blue-500')}
`

export const Title = tw.h2`
    select-none
    text-2xl
    tracking-tight
    font-semibold
    text-center
    lg:text-left
    mb-3
    lg:mb-0
`

export const Desc = tw.p`
    select-none
    font-light
    ${(p) => (p.$isActive ? 'text-slate-400' : 'text-slate-200 group-hover:text-slate-400')}
    text-center
    lg:text-left
`