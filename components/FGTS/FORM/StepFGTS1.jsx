import { Input } from 'antd';
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import Btn from '../../GERAL/BUTTON/Btn'



export default function stepUm() {
    return (
        <div className=''>
            <div className='lg:pr-60 mb-8'>
                <span className='text-slate-400 poppins text-3xl'>Nos conte mais <span className='font-extrabold'>sobre você!</span></span>
                <div className='bg-gradient-to-r from-sky-500 to-blue-700 w-10 h-3 rounded-xl saturate-150 my-2' />
                <p className='text-slate-400 poppins py-2'>
                    Precisamos que informe alguns dados seus para confirmarmos sua identidade.
                </p>
            </div>

            <Input className='poppins text-slate-300 border-slate-300 rounded-2xl p-3 my-3' size="large" placeholder="Seu nome completo" prefix={<AiOutlineUser className='text-2xl' />} />
            <Input className='poppins text-slate-300 border-slate-300 rounded-2xl p-3 my-3' size="large" placeholder="Seu e-mail" prefix={<AiOutlineMail className='text-2xl' />} />
            <Input className='poppins text-slate-300 border-slate-300 rounded-2xl p-3 my-3' size="large" placeholder="Seu telefone" prefix={<AiOutlinePhone className='text-2xl' />} />

            <div className='mt-12'>
                <p className='poppins text-slate-400 mb-5'>
                    Ao continuar, você aceita os <span className='font-bold'>Termos de uso</span> e a <span className='font-bold'>Política de Privacidadeda</span> aplicação.
                </p>
                <Btn nome="Aceitar e continuar" />
            </div>
        </div>
    )

}