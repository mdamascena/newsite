import tw from 'tailwind-styled-components'

const Btn = tw.button`
    bg-yellow-400
    rounded-2xl 
    text-white 
    py-3
    px-24 
    lg:px-28 
    mt-8
    hover:bg-yellow-500
    hover:scale-105
    active:scale-90
    active:bg-yellow-600
    duration-150
`
export default function BtnYellow (props){
    return(
        <Btn>{props.nome}</Btn>
    )
}