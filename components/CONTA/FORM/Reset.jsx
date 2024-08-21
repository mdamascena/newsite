import tw from 'tailwind-styled-components'
import { HiOutlineKey } from "react-icons/hi2"
import { Input } from '../../ui/input'
import InputMask from 'react-input-mask'
import { motion, AnimatePresence } from 'framer-motion'
import { DialogContent, DialogHeader, DialogDescription, DialogClose, Dialog, DialogTrigger } from '../../ui/dialog_noclose'
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

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

                <Dialog>
                    <DialogTrigger asChild>
                        <BtnReset className='mt-2'>Esqueci o e-mail</BtnReset>
                    </DialogTrigger>
                    
                    <DialogContent className={`${mainFontFamily.className}`}>
            
                        <DialogHeader className='select-none'>
                            <div className='bg-white border border-l-4 border-l-blue-600 rounded-md mb-5'>
                                <p className='text-center py-4 px-8 text-slate-400 font-light text-sm'>
                                    Informe o seu CPF para localizarmos seu cadastrado
                                </p>
                            </div>
                            <DialogDescription>
                                <InputMask 
                                    className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                                    mask="999.999.999-99"
                                    maskChar = {null}
                                    placeholder='Digite seu CPF'
                                    inputMode='numeric'>

                                    {(inputProps) => <Input {...inputProps} />}
                                </InputMask>
                            </DialogDescription>
                            <BtnPass>Localizar cadastro</BtnPass>
                        </DialogHeader>

                        <div className='border border-slate-200 rounded-lg p-3'>
                            <div className='text-slate-400 font-light text-sm text-center mb-2'>
                                Dica do e-mail cadastrado para o CPF
                            </div>
                                
                            <div className='text-center p-2 rounded-md bg-slate-100'>
                                ms*******na@gmail.com
                            </div>

                            <div className='text-slate-400 font-light text-xs text-center mt-2'>
                                Se não tiver mais acesso ao e-mail ou a dica não ajudou, fale com nosso atendimento.
                            </div>
                        </div>

                        <DialogClose className='' asChild>
                            <BtnReset>Fechar</BtnReset>
                        </DialogClose>
            
                    </DialogContent>
                
                </Dialog>

            </motion.div>

        </AnimatePresence>
    )
}