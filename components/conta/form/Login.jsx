import { useState } from 'react'
import BtnNext from "../../geral/button/BtnBlueNext"
import BtnBack from "../../geral/button/BtnBlueBack"
import { Input } from '../../ui/input'
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"
import { validateCPF } from "schema/validations"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { ToastContainer } from "react-toastify"

export default function Login({ setShowLogin }) {
    
    const [passType, setPassType] = useState('password');
    const [isPassVisible, setIsPassVisible] = useState(false);

    const togglePassVisibility = () => {
        setIsPassVisible(!isPassVisible);
        setPassType(passType === 'password' ? 'text' : 'password');
    };

    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const registerWithMask = useHookFormMask(register);

    const onSubmit = (data) => {
        console.log("Login data:", data);
    };

    const handleResetClick = async () => {
        const isValid = await trigger("cpf");
        if (!isValid) {
            toastErrorColored("Informe CPF para redefinir a senha");
            return;
        }
        setShowLogin(false);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                exit={{ scale: 0 }}>

                <ToastContainer />

                <form className='gap-y-3 grid' onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <Input
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder='Digite seu CPF'
                            {...registerWithMask("cpf", ["999.999.999-99"], {
                                validate: (value) => validateCPF(value) || "CPF inválido",
                            })}
                        />
                        {errors.cpf && (<p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>)}
                    </div>

                    <div className='relative'>
                        <Input
                            type={passType}
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            placeholder='Digite sua senha'
                            {...register("senha", { required: "Senha é obrigatória" })}
                        />

                        {isPassVisible ? (
                            <PiEye className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.senha ? "text-red-400" : "text-slate-400"} text-4xl p-2 cursor-pointer`} onClick={togglePassVisibility}/>
                            ) : (
                            <PiEyeClosedBold className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.senha ? "text-red-400" : "text-slate-400"} text-4xl p-2 cursor-pointer`} onClick={togglePassVisibility}/>
                        )}
                    </div>
                    {errors.senha && (<p className="text-red-500 text-xs -mt-1">{errors.senha.message}</p>)}

                    <BtnNext nome={"Acessar"} tipo={'submit'}/>

                </form>

                <BtnBack nome={"Esqueci senha"} classN={'mt-2'} event={handleResetClick}/>

            </motion.div>
        </AnimatePresence>
    );
}
