import React, { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import BtnBlueNext from "../button/BtnBlueNext"
import BtnBlueBack from "../button/BtnBlueBack"
import { LiaTelegramPlane } from "react-icons/lia"
import {HiArrowUturnLeft} from 'react-icons/hi2'
import { TbMessage2Filled } from "react-icons/tb"
import { IoMail } from "react-icons/io5"
import { MdRadioButtonChecked } from "react-icons/md"
import { MdRadioButtonUnchecked } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
import { getDadosResetPorCpf } from "../../../services/serviceAuth/apiDadosReset"

const maskCelular = (celular) => {
    const digits = String(celular ?? "").replace(/\D/g, "");

    if (!digits) {
        return "Sem dado cadastrado";
    }

    return `** *****-${digits.slice(-4).padStart(4, "*")}`;
};

const maskEmail = (email) => {
    const emailValue = String(email ?? "").trim();

    if (!emailValue) {
        return "Sem dado cadastrado";
    }

    const [user, domain] = emailValue.split("@");

    if (!user || !domain) {
        return "Sem dado cadastrado";
    }

    return `${"*".repeat(Math.max(user.length - 4, 3))}${user.slice(-4)}@${domain}`;
};

export default function CadReset({setShowLogin}) {
    const { watch } = useFormContext();
    const cpf = watch("cpf") || "";
    const [contato, setContato] = useState({
        telefone: "",
        email: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleResetClick = () => {
        setShowLogin(true);
    };

    useEffect(() => {
        const cpfDigits = (cpf || "").replace(/\D/g, "");

        if (cpfDigits.length !== 11) {
            setContato({
                telefone: "",
                email: "",
            });
            setIsLoading(false);
            return;
        }

        let ignore = false;

        const loadPessoa = async () => {
            setIsLoading(true);

            const dadosReset = await getDadosResetPorCpf(cpfDigits);

            if (!ignore) {
                setContato({
                    telefone: dadosReset?.telefone || "",
                    email: dadosReset?.email || "",
                });
                setIsLoading(false);
            }
        };

        loadPessoa();

        return () => {
            ignore = true;
        };
    }, [cpf]);

    const celular = isLoading ? "Carregando..." : maskCelular(contato.telefone);
    const email = isLoading ? "Carregando..." : maskEmail(contato.email);
  
    return (
  
        <AnimatePresence>
            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}
                >
                <div className="text-slate-400 lg:mb-4 mb-2 bg-white flex rounded-lg p-2 items-center border-l-8 border-blue-500 shadow-sm">
                    <p className="font-light text-sm">
                        Para recriar sua senha, enviaremos um link. Como deseja receber: SMS ou e-mail?
                    </p>
                </div>
                                            
                <div className="gap-4 grid">

                    <div className=" grid gap-1 my-1">

                        <div className="relative">
                            
                            <input
                                type="radio"
                                className="peer hidden"
                                name="opcaoEnvio"
                                id="enviaSMS"
                                value="1"
                            />

                            <label htmlFor="enviaSMS" key="enviaSMS" className="col-span-1 border hover:ring-1 hover:ring-blue-500 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-100 bg-white rounded-lg p-2 items-center flex constant">
                            
                                <div className="grid grid-cols-6 items-center">
                                    <TbMessage2Filled className="text-4xl bg-blue-200 text-blue-500 p-2 col-span-1 rounded-md"/>
                                    <div className="col-span-5">
                                        <div className="flex-1 ml-1">
                                            <div className="text-slate-400 text-sm font-medium ml-1">SMS</div>
                                            <div className="text-xs ml-1">{celular}</div>
                                        </div>
                                    </div>
                                </div>

                            </label>

                            <MdRadioButtonChecked className="absolute top-4 right-3 peer-checked:block hidden text-blue-500 text-xl"/>
                            <MdRadioButtonUnchecked className="absolute top-4 right-3 peer-checked:hidden block text-blue-500 text-xl"/>
                        
                        </div>

                        <div className="relative">
                            <input
                                type="radio"
                                className="hidden peer"
                                name="opcaoEnvio"
                                id="enviaMail"
                                value="0"
                            />

                            <label htmlFor="enviaMail" key="enviaMail" className="col-span-1 border hover:ring-1 hover:ring-blue-500 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-100 bg-white rounded-lg p-2 items-center flex constant">
                            
                                <div className="grid grid-cols-6 items-center">
                                    <IoMail className="text-4xl bg-blue-200 text-blue-500 p-2 col-span-1 rounded-md"/>
                                    <div className="col-span-5">
                                        <div className="flex-1 ml-1 wrap-break-word">
                                            <div className="text-slate-400 text-sm font-medium">e-mail</div>
                                            <div className="text-xs">{email}</div>
                                        </div>
                                    </div>
                                </div>

                            </label>

                            <MdRadioButtonChecked className="absolute top-4 right-3 peer-checked:block hidden text-blue-500 text-xl"/>
                            <MdRadioButtonUnchecked className="absolute top-4 right-3 peer-checked:hidden block text-blue-500 text-xl"/>
                        
                        </div>

                    </div>

                    <div className="grid gap-2">

                        <BtnBlueNext 
                            nome={'Enviar'} 
                            iconLeft={<LiaTelegramPlane className="mr-2 text-xl"/>} 
                        />

                        <BtnBlueBack 
                            event={handleResetClick} 
                            nome={'Voltar'} 
                            iconLeft={<HiArrowUturnLeft className="mr-2 text-xl"/>} 
                        />

                    </div>
                                                    
                </div>
            </motion.div>
        </AnimatePresence>

    );
}
