import { useEffect, useState, useRef } from "react"
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
import { toastInfoColored } from "shared/toastUtils/toastValidation"
import { GoCheckCircleFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";

export default function FormCadastro({ onNext }) {

    const { register, watch, handleSubmit, formState: { errors }, setValue} = useFormContext();
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

    const [inputAction, setInputAction] = useState(0); // true = desabilita campos/btn
    
    const [showForm, setShowForm] = useState(false);

    const cpfValue = watch("cpf") || "";

// 1) crie um ref para o timer
const validateTimerRef = useRef(null);

    useEffect(() => {
        
        // 2) sempre cancele o timer anterior ao mudar o CPF
        if (validateTimerRef.current) {
            clearTimeout(validateTimerRef.current);
            validateTimerRef.current = null;
        }

        const cleanedCpf = (cpfValue || '').replace(/\D/g, '');

        // menos de 11 -> interrompe tudo e sai
        if (cleanedCpf.length < 11) {
            setShowForm(0);
            return;
        }

        // chegou a 11 -> inicia validação
        toastInfoColored("Validando CPF...", {
            autoClose: 1000,
            pauseOnHover: false,
            theme: "light"
        });

        // 3) agenda um único timeout e guarda o id
        validateTimerRef.current = setTimeout(() => {
            
            const isValidCPF = validateCPF(cpfValue);

            const limpaCampos = () => {
                setValue("dataNascimento", "");
                setValue("nome", "");
                setValue("email", "");
                setValue("celular", "");
                setValue("senha", "");
                setValue("senhaConfirmacao", "");
                setValue("termos", false);
                setValue("aceite_whatsapp", false);
            }

            if (isValidCPF) {
                
                limpaCampos();

                if (cpfValue === "555.555.555-55") {
                    onLoginOpen(cpfValue);
                } else {
                    setShowForm(1)
                }

            } else {
                setShowForm(2)
            }

            // 4) limpa referência após executar
            validateTimerRef.current = null;
            
        }, 1500);

        // 5) limpeza ao desmontar
        return () => {
            if (validateTimerRef.current) {
                clearTimeout(validateTimerRef.current);
                validateTimerRef.current = null;
            }
        };
    }, [cpfValue, onLoginOpen, setValue]);

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
                    
                    {showForm === 1 &&
                        <motion.p variants={container} className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                            Complete seu cadastro e crie uma senha simples, que seja fácil de lembrar
                        </motion.p>
                    }
                    
                    {(showForm === 2 || showForm === 0) &&
                        <motion.p variants={container} className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                            Começe digitando o seu CPF e siga o passo a passo
                        </motion.p>
                    }
                </div>

                {/*Form do step*/}
                <div className="grid-cols-6 container-form-body">

                    <div className={`relative lg:col-span-6 ${showForm === 1 ? 'col-span-3' : 'col-span-6'}`}>
                        
                        <Input 
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${showForm === 2 ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder="Digite seu CPF"
                            {...registerWithMask("cpf", ["999.999.999-99"], {showMaskOnHover: false})}
                        />

                        {showForm === 1 &&
                            <GoCheckCircleFill className="absolute lg:text-xl text-lg top-4 right-4 text-blue-500"/>
                        }
                        {showForm === 2 &&
                            <GoXCircleFill className="absolute lg:text-xl text-lg top-4 right-4 text-red-500"/>
                        }
                        {showForm === 2 && 
                            <motion.div variants={container} className="p-3 bg-red-100 rounded-md border-l-4 border-red-500 mt-3 ">
                                <p className="text-red-500 text-sm mt-1 text-center">
                                    CPF inválido. Verifique o número digitado
                                </p> 
                            </motion.div>
                        }
                        
                    </div>
                    
                    {showForm === 1 &&(
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
                {showForm === 1 && ( 
                    <motion.div className="!grid-cols-1 container-form-footer" variants={item}>
                        <BtnNext habilitado={inputAction} nome={'Criar conta'} type="submit" />
                    </motion.div>
                )}

            </motion.div>  
        
        </form>
    )
}
