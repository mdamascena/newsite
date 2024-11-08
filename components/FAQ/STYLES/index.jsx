import tw from "tailwind-styled-components";

//MAIN
//MAIN FAQ
export const InputSearch = tw.input`
    font-light 
    text-white 
    placeholder-white 
    border-none 
    focus:outline-none 
    focus:ring-1 
    focus:ring-blue-600 
    ring-0 
    p-3 
    lg:p-4 
    w-[40vh] 
    lg:w-[30rem] 
    rounded-xl 
    lg:rounded-2xl 
    bg-blue-500/50
`;

//MODALIDADE
//MODALIDADES FAQ
export const CardMod = tw.div`
    group
    bg-white
    hover:bg-blue-800
    hover:scale-105
    hover:saturate-500
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
    rounded-lg
`;