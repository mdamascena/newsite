import tw from 'tailwind-styled-components'
import {HiArrowUturnLeft} from 'react-icons/hi2'

const Btn = tw.button`
    col-span-1    
    py-6
    px-3
    flex
    justify-center 
    items-center
    saturate-150
    bg-blue-700
    hover:bg-blue-800 
    focus:bg-blue-950
    duration-300
    text-white 
    rounded-md
`
export default function BtnVolta({setShowCalc}){

    return(
        <Btn onClick={() => setShowCalc('Valores')}>
            <HiArrowUturnLeft className='text-xl mr-2'/>
            Simular outro valor
        </Btn>
    )
}