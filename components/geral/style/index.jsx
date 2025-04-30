import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const OptLabel = tw(motion.label)`
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