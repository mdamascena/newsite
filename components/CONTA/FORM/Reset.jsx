import tw from 'tailwind-styled-components'
import { HiOutlineKey } from "react-icons/hi2"
import InputTW from '../../GERAL/FORM/InputTW'

const BtnPass = tw.button`
    bg-blue-600
    flex
    w-full
    items-center 
    justify-between
    text-white
    lg:text-md
    text-sm 
    tracking-tighter
    lg:py-3
    py-3
    px-5
    rounded-full
    active:bg-blue-900
    hover:bg-blue-700
    hover:scale-105
    active:scale-90 
    duration-150 
`
 const InputRest = tw.input`
    focus:outline-none
    focus:border-blue-600
    rounded-lg 
    bg-slate-200 
    p-3
    my-5
    border
    border-slate-400
    placeholder:text-slate-400 
    placeholder:font-extralight 
    placeholder:text-sm 
    w-full
`
export default function FormPass() {
    return (
        <div className=''>
            <div className='bg-white border border-l-8 border-l-blue-600 rounded-md'>
                <p className='text-center p-5 text-slate-400 tracking-tight font-light text-sm shadow-md'>
                    Informe seu e-mail cadastrado que te enviaremos um link para você criar uma nova senha.
                </p>
            </div>
            <div className='relative'>
                <InputRest type="email" placeholder='Digite seu e-mail' inputmode='email'/>
                <InputTW className="w-full"  placeholder='ddd'/>
                <BtnPass>
                    Recuperar senha
                    <HiOutlineKey className='text-xl'/>
                </BtnPass>
            </div>
        </div>
    )
}