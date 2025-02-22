import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const OptLabel = tw(motion.label)`
        bg-white
        grid
        grid-cols-6
        p-3
        lg:py-4
        items-center 
        justify-center 
        text-slate-400 
        shadow-md
        rounded-md
        cursor-pointer
        duration-100
        hover:ring-2
        hover:ring-blue-500
        hover:bg-blue-100
        hover:text-blue-500
        peer-checked:bg-blue-600 
        peer-checked:text-white
        peer-checked:shadow-nome
    `;