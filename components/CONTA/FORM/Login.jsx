import Image from 'next/image'
import tw from 'tailwind-styled-components'
import InputSimples from '../../GERAL/FORM/InputSimples'
import { UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import Link from 'next/link'

const Inp = tw.input`
    focus:outline-none
    focus:border-blue-600
    rounded-lg 
    bg-slate-200 
    p-3
    my-2
    border
    border-slate-400
    focos
    placeholder:text-slate-400 
    placeholder:font-extralight 
    placeholder:text-sm 
    w-full
`

export default function Login() {

    return (
        <div>
            <Input status='' className='bg-slate-300 my-2 placeholder:text-slate-300' size="large" placeholder="large size" prefix={<UserOutlined />} />
    
            <InputSimples/>

            <div className='relative w-60'>
                <Inp />
                <span className='absolute left-0 p-5 pointer-events-none focus:translate-y-3'>Nome</span>
            </div>
            
            <div className='text-center '>
                Esqueci minha senha
            </div>
            
        </div>
    )
}