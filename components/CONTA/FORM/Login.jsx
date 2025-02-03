import { useState } from 'react'
import { Btn, BtnReset } from '../styles'
import { Input } from '../../ui/input'
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import InputMask from 'react-input-mask'
import { motion, AnimatePresence } from 'framer-motion'


export default function Login({ setShowLogin }) {
    const [passType, setPassType] = useState('password');
    const [isPassVisible, setIsPassVisible] = useState(false);

    const togglePassVisibility = () => {
        setIsPassVisible(!isPassVisible);
        setPassType(passType === 'password' ? 'text' : 'password');
    };

    const handleResetClick = () => {
        setShowLogin(false);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}>

                <form className='gap-y-3 grid'>
                    <InputMask 
                        className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                        mask="999.999.999-99"
                        maskChar = {null}
                        placeholder='Digite seu CPF'>

                        {(inputProps) => <Input {...inputProps} />}
                    </InputMask>
                    
                    <div className='relative'>
                        <Input type={passType} className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' placeholder='Digite sua senha'/>
                        
                        {isPassVisible ? (
                            <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={togglePassVisibility}/>
                        ) : (
                            <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={togglePassVisibility}/>
                        )}
                        
                    </div>

                    <Btn type='submit'>Acessar</Btn>


                </form>
                <BtnReset className='mt-2' onClick={handleResetClick}>Esqueci senha</BtnReset>
                
            </motion.div>
            
        </AnimatePresence>
    );
}
