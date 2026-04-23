import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const OptLabel = tw(motion.label)`
    bg-white
    grid
    grid-cols-6
    lg:p-3
    py-4
    max-h-[110px]
    lg:py-4
    items-center 
    justify-center 
    text-slate-400 
    shadow-md
    rounded-md
    cursor-pointer
    duration-300
    hover:ring-2
    hover:ring-blue-500
    hover:bg-blue-100
    hover:text-blue-500
    peer-checked:bg-blue-600 
    peer-checked:text-white
    peer-checked:shadow-nome
`;

export const OptBnt = tw(motion.button)`
    bg-white
    grid
    grid-cols-6
    lg:p-3
    p-2
    lg:py-4
    items-center 
    justify-center 
    text-slate-400 
    shadow-md
    rounded-md
    w-full
    duration-100
    hover:ring-2
    hover:ring-blue-500
    hover:bg-blue-100
    hover:text-blue-500
    active:bg-blue-600 
    active:text-white
    active:shadow-nome
`;

//SECTIONS
//LINKFAQ
export const Btn = tw.button`
    bg-yellow-600
    cursor-pointer
    flex 
    items-center 
    justify-center
    text-white 
    tracking-tighter
    w-72
    py-3
    lg:px-5 
    rounded-3xl
    active:bg-yellow-700
    hover:bg-yellow-600
    hover:scale-105
    active:scale-90 
    duration-150      
`;