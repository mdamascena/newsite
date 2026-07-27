import React, { useEffect, useState } from "react"
import { useHookFormMask } from "use-mask-input"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { Input } from "../../ui/input"
import BtnBlueNext from "../button/BtnBlueNext"
import BtnBlueBack from "../button/BtnBlueBack"
import { RiShieldKeyholeLine } from "react-icons/ri"
import { motion, AnimatePresence } from 'framer-motion'
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { loginAuth } from "../../../services/serviceAuth/apiAuth"
import { CURRENT_USER_CPF_STORAGE_KEY } from "../../../services/serviceAuth/apiPessoa"

export default function CadLogin({setShowLogin, cpf}) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: { cpf, senha: "" },
    });
    const registerWithMask = useHookFormMask(register);
    const [inputSenha, setInputSenha] = useState('password');
    const [visivelSenha, setVisivelSenha] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        reset({ cpf, senha: "" });
    }, [cpf, reset]);

    const toggleSenhaVisibility = () => {
        setVisivelSenha((prev) => !prev);
        setInputSenha((prev) => prev === 'password' ? 'text' : 'password');
    };

    const handleResetClick = () => {
        setShowLogin(false);
    };

    const onSubmit = async (data) => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);
        const resultado = await loginAuth(data);
        setIsLoading(false);

        if (!resultado.success) {
            toastErrorColored(resultado.message);
            return;
        }

        window.localStorage.setItem(CURRENT_USER_CPF_STORAGE_KEY, data.cpf.replace(/\D/g, ""));
        router.push("/acompanhamento");
    };
  
    return (
  
        <AnimatePresence>
            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}
                >

                <ToastContainer />

                <form className="gap-4 grid" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-slate-400 mb-5 bg-white flex rounded-lg p-2 items-center border-l-8 border-blue-500 shadow-sm">
                        <p className="font-light text-sm">
                            Para sua proteção, entre com sua conta Valoreal para continuar.
                        </p>
                        <div className="bg-blue-500 rounded-md text-white items-center flex">
                            <RiShieldKeyholeLine className="text-5xl p-2"/>
                        </div>
                    </div>
                                            
                    <div className=" grid gap-2">
                        <div className="col-span-1">
                            <Input
                                className='py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 disabled:opacity-75 disabled:text-slate-400' 
                                type="text"
                                disabled
                                inputMode="numeric"
                                placeholder="CPF *"
                                {...registerWithMask('cpf', ["999.999.999-99"])}
                            />
                        </div>

                        <div className="col-span-1">
                            <div className="relative">
                                <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type={inputSenha}
                                    disabled={isLoading}
                                    placeholder="Digite sua senha"
                                    {...register("senha", { required: "Informe sua senha" })}
                                />

                                {visivelSenha ? (
                                    <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaVisibility} />
                                ) : (
                                    <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaVisibility} />
                                )}
                            </div>
                            {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <BtnBlueNext tipo="submit" nome={isLoading ? 'Acessando...' : 'Acessar'} habilitado={isLoading} />
                        <BtnBlueBack tipo="button" nome={'Esqueci a senha'} event={handleResetClick} habilitado={isLoading} />
                    </div>                         
                </form>
                

            </motion.div>
        </AnimatePresence>

    );
}
