import tw from 'tailwind-styled-components'
import { HiOutlineKey } from "react-icons/hi2"
import { Input } from '../../ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import ModalReset from '../../GERAL/MODAL/ModalReset'
import { useState } from 'react'

const BtnPass = tw.button`
    bg-blue-700
    items-center 
    justify-center
    text-white
    w-full
    py-3
    lg:px-5 
    rounded-lg
    active:bg-blue-900
    hover:bg-blue-600
    hover:scale-105
    active:scale-90 
    duration-150 
`
const BtnReset = tw.button`
    bg-blue-100
    items-center
    justify-center
    text-blue-500
    w-full
    py-3
    lg:px-5 
    rounded-lg
    active:bg-blue-300
    hover:bg-blue-50
    hover:scale-105
    active:scale-90 
    duration-150
`;

export default function FormPass() {

    const [abrirModal, setAbrirModal] = useState(false)

    return (
        <AnimatePresence>

            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}>
            
                <div className='bg-white border border-l-4 border-l-blue-600 rounded-md mb-5'>
                    <p className='text-center py-4 px-8 text-slate-400 font-light text-xs lg:text-sm'>
                        Informe o e-mail cadastrado que te enviaremos um link para você criar uma nova senha.
                    </p>
                </div>

                <form className='grid gap-y-4'>
                    <Input type='email' className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' placeholder='Digite seu e-mail'/>
                    
                    <BtnPass className='flex'>
                        <HiOutlineKey className='text-xl mr-2'/>
                        Recuperar senha
                    </BtnPass>
                </form>
 
                <BtnReset onClick={()=>{setAbrirModal(true)}} className='mt-2'>Esqueci o e-mail</BtnReset>
                
                <ModalReset isOpen={abrirModal} onClose={() => setAbrirModal(false)}/>
 
            </motion.div>

        </AnimatePresence>
    )
}