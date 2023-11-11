import tw from 'tailwind-styled-components'

const Btn = tw.button`
    bg-yellow-400 
    border-yellow-400 
    hover:border-2 
    hover:text-yellow-400 
    hover:-translate-y-2 
    hover:bg-opacity-0 
    rounded-2xl 
    text-white 
    py-3
    px-24 
    lg:px-28 
    mt-8 
    duration-500
`
export default function BtnYellow (props){
    return(
        <Btn>{props.nome}</Btn>
    )
}