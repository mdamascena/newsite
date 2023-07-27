import tw from 'tailwind-styled-components'

const Btn = tw.button`
    bg-yellow-500 
    border-yellow-500 
    hover:border-2 
    hover:text-yellow-500 
    hover:-translate-y-2 
    hover:bg-opacity-0 
    rounded-2xl 
    text-white 
    py-3 
    px-28 
    mt-8 
    duration-500
`

export default function BtnYellow (props){
    return(
        <Btn>{props.nome}</Btn>
    )
}