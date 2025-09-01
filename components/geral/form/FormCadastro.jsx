import { useEffect, useState } from "react"
import { Input } from "components/ui/input"
import { useHookFormMask } from "use-mask-input"
import { useFormContext } from "react-hook-form"
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { useFormData } from "../../../context/FormContext"
import { useDisclosure } from "@nextui-org/react"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { motion } from 'framer-motion'
import { container, item } from "shared/motionUtils/motionTransation"
import Link from "next/link"
import ModalOpt from '../modal/ModalOpt'
import BtnNext from '../button/BtnBlueNext'
import ModalLogin from '../../geral/modal/ModalLogin'
import { validateCPF } from "schema/validations"
import { ToastContainer } from "react-toastify"
import { toastErrorColored, toastInfoColored, toastSuccessColored } from "shared/toastUtils/toastValidation"
import { LuCircleCheckBig } from "react-icons/lu";

export default function FormCadastro({ onNext }) {

    const { register, watch, handleSubmit, formState: { errors }, setValue, clearErrors } = useFormContext();
    const registerWithMask = useHookFormMask(register);

    const acceptedTerms = watch("termos");
    const acceptedWhatsapp = watch("aceite_whatsapp");
    const { atualizarForm } = useFormData();

    // State para definir o campo password visivel.
    const [inputSenha, setInputSenha] = useState('password');
    const [visivelSenha, setVisivelSenha] = useState(false);

    // Função para tornar o campo password type text
    const toggleSenhaVisibility = () => {
        setVisivelSenha(!visivelSenha);
        setInputSenha(inputSenha === 'password' ? 'text' : 'password');
    }

    const onSubmit = (data) => {
        atualizarForm(data)
        onNext();
    }

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAccept = () => {
        setIsAccepted(true);
        setValue("termos", true);
    };

    const handleCheckboxChange = (event) => {
        setIsAccepted(true);
        setValue("termos", true);
    };

    const {
        isOpen: isOptOpen,
        onOpen: onOptOpen,
        onOpenChange: onOptOpenChange,
    } = useDisclosure();

    const {
        isOpen: isLoginOpen,
        onOpen: onLoginOpen,
        onOpenChange: onLoginOpenChange,
    } = useDisclosure();

    const [inputAction, setInputAction] = useState(true); 
    
    //Para testar o modal, apagar depois que fizer pelo back
    const cpfValue = watch("cpf") || "";
    
    useEffect(() => {
        const cleanedCpf = (cpfValue || '').replace(/\D/g, '');

        if (cleanedCpf.length < 11) {
            setInputAction(true);
            clearErrors('cpf'); // some com vermelho enquanto digita
            return;
        }

        if (cleanedCpf.length === 11) {
            const isValidCPF = validateCPF(cpfValue);

            if (isValidCPF) {
                setInputAction(false);
                
                toastInfoColored("Validando CPF...",{
                    autoClose: 1500,
                    pauseOnHover: false,
                    theme: "light"

                });
                setTimeout(() => {setInputAction(false);}, 1500);
                
                // opcional: clearErrors para garantir UI limpa
                clearErrors('cpf');
            } else {
                setInputAction(true);
                setValue("dataNascimento", "");
                setValue("nome", "");
                setValue("email", "");
                setValue("celular", "");
                setValue("senha", "");
                setValue("senhaConfirmacao", "");
                setValue("termos", false);
                setValue("aceite_whatsapp", false);
                toastErrorColored("CPF inválido!",{
                    autoClose: 1500,
                    pauseOnHover: false,
                    theme: "light"
                });
            }

            
        }
    }, [cpfValue, onLoginOpen, setValue, clearErrors]);

    // const handleResetClick = async () => {
    //     const isValid = await trigger("cpf");
    //     if (!isValid) {
    //         toastErrorColored("Informe CPF para redefinir a senha");
            
    //     }else{
    //         toastSuccessColored("CPF Válido!");
    //     }
    //     setShowLogin(false);
    // };

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        
        if (!inputAction) {
            setTimeout(() => {
                
                if (cpfValue === "555.555.555-55") onLoginOpen(cpfValue);
                
                setShowForm(true);

            }, 1500);
        } else {
            setShowForm(false); // esconde se inputAction mudar
        }
        }, [cpfValue, inputAction, onLoginOpen]
    );

    return (

        <form className="lg:min-h-[100vh]" onSubmit={handleSubmit(onSubmit)}>

            <ToastContainer/>

            <ModalLogin isOpen={isLoginOpen} onOpenChange={(open) => {onLoginOpenChange(open);
                if (!open) {setValue("cpf", "")}}}
            />

            <motion.div
                initial={'hidden'}
                animate={'visible'}
                variants={container}
                className="lg:px-5"
                >

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="flex col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Cadastro de conta
                        </h1>
                    </div>
                    {inputAction &&(
                        <motion.p variants={container} className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                            Começe digitando o seu CPF e siga o passo a passo
                        </motion.p>
                    )}

                    {!inputAction &&(
                        <motion.p variants={container} className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                            Complete seu cadastro e crie uma senha simples, que seja fácil de lembrar
                        </motion.p>
                    )}
                </div>

                {/*Form do step*/}
                <div className="grid-cols-6 container-form-body">

                    <div className={`lg:col-span-6 ${showForm ? 'col-span-3' : 'col-span-6'}`}>
                        <Input 
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder="Digite seu CPF"
                            
                            {...registerWithMask("cpf", ["999.999.999-99"], {showMaskOnHover: false})}
                            //     validate: (v) => {
                            //     const digits = (v || "").replace(/\D/g, "");
                            //     // enquanto não tiver 11 dígitos, NÃO mostre erro
                            //     if (digits.length < 11) {
                            //         return true
                            //         // com 11 dígitos, valida de verdade
                            //     }
                            //     return validateCPF(v) || "CPF inválido";
                            // },})}
                        >
                            
                        </Input>
                        {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                    </div>
                    
                    {showForm &&(
                        <>
                            <motion.div variants={item} className="lg:col-span-2 col-span-3">
                                <Input
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.dataNascimento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="Nascimento *"
                                    {...registerWithMask("dataNascimento", ['99/99/9999'])}
                                />
                                {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento.message}</p>}
                            </motion.div>
                        
                            <motion.div variants={item} className="lg:col-span-4 col-span-6">
                                <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.nome ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                    }`}
                                    placeholder="Seu nome completo? *"
                                    pattern="[a-zA-Z\s]*"
                                    {...register('nome')}
                                />
                                {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                            </motion.div>

                            <motion.div variants={item} className="col-span-6 grid grid-cols-6 gap-2">
                                <div className="lg:col-span-3 col-span-6">
                                    <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.email ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="email"
                                        placeholder="Seu e-mail *"
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div className="lg:col-span-3 col-span-6 relative">
                                    <Input
                                        className={`py-6 pl-9 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        disabled={inputAction}
                                        inputMode="numeric"
                                        placeholder="Seu celular *"
                                        {...registerWithMask("celular", ['99 99999-9999'])}
                                    />
                                    <HiOutlineDevicePhoneMobile className={`absolute top-3 left-2 text-2xl ${errors.celular ? 'text-red-500' : `${ inputAction ? 'text-slate-300':'text-slate-400'}`}`} />
                                    {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                                </div>
                            </motion.div>

                            <motion.div variants={item} className="col-span-6 lg:mb-2 lg:mt-4 my-2 text-slate-400 font-light lg:text-base text-sm">
                                Crie uma senha simples
                            </motion.div>

                            <motion.div variants={item} className="col-span-3">
                                <div className="relative">
                                    <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type={inputSenha}
                                        disabled={inputAction}
                                        placeholder="Crie um senha"
                                        {...register('senha')}
                                    />

                                    {visivelSenha ? (
                                        <PiEye className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${ inputAction ? 'text-slate-300':'text-slate-400'} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility} />
                                    ) : (
                                        <PiEyeClosedBold className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${ inputAction ? 'text-slate-300':'text-slate-400'} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility} />
                                    )}
                                </div>
                                {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
                            </motion.div>

                            <motion.div variants={item} className="col-span-3">
                                <div className="relative">
                                    <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senhaConfirmacao ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type={inputSenha}
                                        disabled={inputAction}
                                        placeholder="Confirme senha"
                                        {...register('senhaConfirmacao')}
                                    />

                                    {visivelSenha ? (
                                        <PiEye className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${ inputAction ? 'text-slate-300':'text-slate-400'} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility} />
                                    ) : (
                                        <PiEyeClosedBold className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${ inputAction ? 'text-slate-300':'text-slate-400'} text-4xl p-2 cursor-pointer`} onClick={toggleSenhaVisibility} />
                                    )}
                                </div>
                                {errors.senhaConfirmacao && <p className="text-red-500 text-xs mt-1">{errors.senhaConfirmacao.message}</p>}
                            </motion.div>

                            <motion.div variants={item} className="col-span-6 lg:mt-3 mt-2 flex items-center">
                                <input
                                    type="checkbox"
                                    name="termos"
                                    id="termos"
                                    disabled={inputAction}
                                    className="text-blue-600 h-5 w-5 mr-4 ml-2"
                                    checked={acceptedTerms || false}
                                    onChange={handleCheckboxChange} // Usar a função para atualizar o valor
                                    {...register("termos", { required: "Você deve aceitar os termos para continuar." })}
                                />

                                <label className='text-slate-400 font-light lg:text-md text-xs w-full' htmlFor="termos">
                                    <span className="mr-2">
                                        Li e aceito os termos.
                                    </span>

                                    <Link className="text-blue-400" href="#" onClick={(e) => { e.preventDefault(); onOptOpen(); }}>
                                        Ver termos de uso e política de privacidade.
                                    </Link>

                                    {errors.termos && <p className="text-red-500 text-sm mt-1">{errors.termos.message}</p>}
                                </label>
                            </motion.div>

                            <ModalOpt isOpen={isOptOpen} onOpenChange={onOptOpenChange} onAccept={handleAccept} />

                            <motion.div variants={item} className="col-span-6 my-2 flex items-center">
                                <input
                                    type="checkbox"
                                    name="aceite_whatsapp"
                                    id="aceite_whatsapp"
                                    disabled={inputAction}
                                    className="text-blue-600 h-5 w-5 mr-4 ml-2"
                                    checked={acceptedWhatsapp || false}
                                    onChange={handleCheckboxChange} // Usar a função para atualizar o valor
                                    {...register("aceite_whatsapp", { required: "Você deve aceitar os termos para continuar." })}
                                />

                                <label className='text-slate-400 font-light lg:text-md text-xs w-full' htmlFor="aceite_whatsapp">
                                    <span className="mr-2">
                                        Autorizo a Valoreal entrar em contato comigo por celular, e-mail ou WhatsApp.
                                    </span>
                                    {errors.aceite_whatsapp && <p className="text-red-500 text-sm mt-1">{errors.aceite_whatsapp.message}</p>}
                                </label>
                            </motion.div>
                        </>
                    )}

                </div>

                {/*Botão do step*/}
                {showForm && ( 
                    <motion.div className="!grid-cols-1 container-form-footer" variants={item}>
                        <BtnNext habilitado={inputAction} nome={'Criar conta'} type="submit" />
                    </motion.div>
                )}

            </motion.div>  
        
        </form>
    )
}
