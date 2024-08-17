import { useState } from 'react'
import tw from 'tailwind-styled-components'
import { Input } from '../../ui/input'
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import InputMask from 'react-input-mask'

const Btn = tw.button`
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
`;

const BtnReset = tw.button`
    items-center 
    justify-center
    text-blue-700
    w-full
    py-2
    lg:px-5 
    rounded-lg
    active:text-blue-900
    hover:text-blue-600
    hover:scale-105
    active:scale-90 
    duration-150
`;

export default function Login() {
    const [passwordType, setPasswordType] = useState('password');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    return (
        <div>
            <form className='gap-y-3 grid'>

                <InputMask 
                    className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                    mask="999.999.999-99"
                    placeholder='Digite seu CPF'
                    inputMode='numeric'>

                    {(inputProps) => <Input {...inputProps} />}
                </InputMask>
                
                <div className='relative'>
                    <Input type={passwordType} className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' placeholder='Digite sua senha'/>
                    
                    {isPasswordVisible ? (
                        <PiEye className='absolute bottom-2 left-[90%] p-2 text-4xl text-slate-400 cursor-pointer' onClick={togglePasswordVisibility}/>
                    ) : (
                        <PiEyeClosedBold className='absolute bottom-2 left-[90%] p-2 text-4xl text-slate-400 cursor-pointer' onClick={togglePasswordVisibility}/>
                    )}
                    
                </div>

                <Btn type='submit'>Acessar</Btn>
            </form>
            
            <BtnReset className='mt-2 hover:underline'>Esqueci senha</BtnReset>
        </div>
    );
}
