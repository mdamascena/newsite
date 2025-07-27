import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "schema/validations";
import { Input } from "components/ui/input";
import { PiEyeClosedBold, PiEye } from "react-icons/pi";
import BtnNext from "components/geral/button/BtnBlueNext";
import { SiKeepassxc } from "react-icons/si";

export default function FormSenha({ onSubmit }) {
    
    const {register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(loginSchema),});

    const [inputSenha, setInputSenha] = useState("password");
    const [visivelSenha, setVisivelSenha] = useState(false);

    const toggleSenhaVisibility = () => 
    {
        setVisivelSenha(!visivelSenha); 
        setInputSenha(inputSenha === "password" ? "text" : "password");
    };

    return (
        <>
            <div className="mb-5 flex items-center gap-3">
                <SiKeepassxc className="text-7xl text-blue-600 bg-blue-100 p-2 rounded-lg" />
                <div className="flex flex-col">
                    <h1 className="text-slate-400 font-semibold text-lg lg:text-2xl">
                        Atualize sua senha
                    </h1>
                    <p className="text-slate-400 font-light text-xs lg:text-sm">
                        Digite abaixo a nova senha que você deseja utilizar
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-2">
                    <div className="relative">
                        <Input
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? "border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50" : ""}`}
                            type={inputSenha}
                            placeholder="Digite a nova senha"
                            {...register("senha")}
                        />

                        {visivelSenha ? 
                        (
                            <PiEye className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.senha ? "text-red-400" : "text-slate-400"} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility}/>
                            ) : (
                            <PiEyeClosedBold className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.senha ? "text-red-400" : "text-slate-400"} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility}/>
                        )}
                    </div>
                    {errors.senha && (<p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>)}
                </div>

                <div className="mb-5">
                    <div className="relative">
                        <Input
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senhaConfirmacao ? "border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50" : ""}`}
                            type={inputSenha}
                            placeholder="Confirme senha"
                            {...register("senhaConfirmacao")}
                        />

                        {visivelSenha ? 
                        (
                            <PiEye className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.senhaConfirmacao ? "text-red-400" : "text-slate-400"} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility}/>
                            ) : (
                            <PiEyeClosedBold className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${errors.senhaConfirmacao ? "text-red-400" : "text-slate-400"} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility}/>
                        )}
                    </div>
                    {errors.senhaConfirmacao && (<p className="text-red-500 text-xs mt-1">{errors.senhaConfirmacao.message}</p>)}
                </div>

                <BtnNext nome={"Atualizar senha"} type="submit" />
            
            </form>
        </>
    );
}
