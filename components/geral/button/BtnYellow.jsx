import tw from 'tailwind-styled-components'

const Btn = tw.button`
    bg-yellow-400
    rounded-xl 
    text-white
    text-xl
    py-4
    lg:w-96
    w-[100%]
    lg:px-28 
    mt-8
    hover:bg-yellow-500
    hover:scale-105
    active:scale-90
    active:bg-yellow-600
    duration-150
    shadow-lg
`
export default function BtnYellow ({nome}){
    return(
        <Btn>{nome}</Btn>
    )
}