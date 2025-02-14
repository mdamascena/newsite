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
    hover:scale-110
    hover:saturate-500
    col-span-1
    lg:h-44
    mx-1
    lg:mx-0
    px-2
    hover:z-10
    flex
    shadow-lg
    duration-300
    cursor-pointer
    rounded-lg
    items-center 
    justify-center
`;