import BtnBlueNext from "components/geral/button/BtnBlueNext"
import { HiOutlineKey } from "react-icons/hi2"
import { TbMessage2Filled } from "react-icons/tb"
import { IoMail } from "react-icons/io5"
import { MdRadioButtonChecked } from "react-icons/md"
import { MdRadioButtonUnchecked } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation";
import ModalSemCad from "../../geral/modal/ModalSemCad"
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

export default function FormPass({ cpf, onSemCadClose }) {

    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null)
    const [contato, setContato] = useState({
        telefone: "",
        email: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSemCadOpen, setIsSemCadOpen] = useState(false);

    useEffect(() => {
        const cpfDigits = (cpf || "").replace(/\D/g, "");

        if (cpfDigits.length !== 11) {
            setContato({
                telefone: "",
                email: "",
            });
            setSelectedOption(null);
            setIsLoading(false);
            return;
        }

        let ignore = false;

        const loadDadosReset = async () => {
            setIsLoading(true);
            setSelectedOption(null);

            const dadosReset = await getDadosResetPorCpf(cpfDigits);

            if (!ignore) {
                if (!dadosReset) {
                    setContato({
                        telefone: "",
                        email: "",
                    });
                    setIsSemCadOpen(true);
                } else {
                    setContato({
                        telefone: dadosReset.telefone || "",
                        email: dadosReset.email || "",
                    });
                }

                setIsLoading(false);
            }
        };

        loadDadosReset();

        return () => {
            ignore = true;
        };
    }, [cpf]);

    const celular = isLoading ? "Carregando..." : maskCelular(contato.telefone);
    const email = isLoading ? "Carregando..." : maskEmail(contato.email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedOption) {
            toastErrorColored("Selecione uma opção para continuar.");
            return;
        }

        // Aqui você pode chamar o backend para enviar o SMS ou e-mail
        console.log("Opção escolhida:", selectedOption);
    };

    const handleCriarConta = () => {
        router.push("/cadastro");
    };

    const handleSemCadClose = () => {
        setIsSemCadOpen(false);
        onSemCadClose?.();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={ {scale: 0} }
                animate={ {scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                exit={ {scale: 0 }}>

                <ToastContainer />
            
                <div className='bg-white border border-l-4 border-l-blue-600 border-slate-200 rounded-md mb-5'>
                    <p className='text-center py-2 px-2 text-slate-400 font-light text-xs lg:text-sm'>
                        Para recuperar sua senha, vamos te enviar um link. Selecine como deseja receber: SMS ou e-mail?
                    </p>
                </div>

                <form className='grid gap-y-4' onSubmit={handleSubmit}>
                    {/* <Input type='email' className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' placeholder='Digite seu e-mail'/> */}
                    
                    <div className="gap-4 grid">
                        <div className=" grid gap-1 my-1">

                            <div className="relative">
                                
                                <input
                                    type="radio"
                                    className="peer hidden"
                                    name="opcaoEnvio"
                                    id="enviaSMS"
                                    value="1"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                />

                                <label htmlFor="enviaSMS" key="enviaSMS" className="col-span-1 border border-transparent hover:ring-2 hover:ring-blue-500 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-200 bg-slate-200 rounded-lg p-2 items-center flex constant">
                                
                                    <div className="grid grid-cols-6 items-center">
                                        <TbMessage2Filled className="text-4xl bg-blue-300 text-blue-600 p-2 col-span-1 rounded-md"/>
                                        <div className="col-span-5">
                                            <div className="flex-1 ml-1">
                                                <div className="text-slate-400 text-sm font-medium ml-2">SMS</div>
                                                <div className="text-xs ml-2">{celular}</div>
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
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                />

                                <label htmlFor="enviaMail" key="enviaMail" className="col-span-1 border border-transparent hover:ring-2 hover:ring-blue-500 duration-300 peer-checked:border-blue-500 peer-checked:bg-blue-200 bg-slate-200 rounded-lg p-2 items-center flex constant">
                                
                                    <div className="grid grid-cols-6 items-center">
                                        <IoMail className="text-4xl bg-blue-300 text-blue-600 p-2 col-span-1 rounded-md"/>
                                        <div className="col-span-5">
                                            <div className="flex-1 ml-1 wrap-break-word">
                                                <div className="text-slate-400 text-sm font-medium ml-2">e-mail</div>
                                                <div className="text-xs ml-2">{email}</div>
                                            </div>
                                        </div>
                                    </div>

                                </label>

                                <MdRadioButtonChecked className="absolute top-4 right-3 peer-checked:block hidden text-blue-500 text-xl"/>
                                <MdRadioButtonUnchecked className="absolute top-4 right-3 peer-checked:hidden block text-blue-500 text-xl"/>
                            
                            </div>

                        </div>
                    </div>

                    <BtnBlueNext 
                        tipo={"submit"} 
                        classN={'flex'} 
                        nome={"Recuperar senha"} 
                        iconLeft={<HiOutlineKey className='text-xl mr-2'/>}
                    />

                </form>
 
                <ModalSemCad
                    isOpen={isSemCadOpen}
                    onClose={handleSemCadClose}
                    onCriarConta={handleCriarConta}
                />
 
            </motion.div>

        </AnimatePresence>
    )
}
