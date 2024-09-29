import { useState, useEffect } from "react"
import Link from "next/link"
import { Input } from "components/ui/input"
import InputMask from 'react-input-mask'
import { useFormContext } from "react-hook-form"
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import {useDisclosure, Checkbox} from "@nextui-org/react"
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import ModalOpt from '../../GERAL/ModalOpt'
import BtnNext from '../../GERAL/BUTTON/BtnBlueNext'

export default function FormCadastro({onNext, setTitulo, setDescricao}) {

    //Titulos que devem ser redenrizados no form Base
    useEffect(() => {
        setTitulo("Vamos começar!");    
        setDescricao("Preencha seus dados iniciais para criarmos a sua conta");
    }, [setTitulo, setDescricao]);

    // Controle de formulario react-hook-form
    const { register, handleSubmit, formState: { errors }, setValue } = useFormContext();
    const {atualizarForm} = useFormDataLuz();

    // State para definir o campo password visivel.
    const [inputSenha, setInputSenha] = useState('password');
    const [inputSenhaConfirmacao, setInputSenhaConfirmacao] = useState('password')
    const [visivelSenha, setVisivelSenha] = useState(false);
    const [visivelSenhaConfirmacao, setVisivelSenhaConfirmacao] = useState(false)

    // Função para tornar o campo password type text
    const toggleSenhaVisibility = () => {
        setVisivelSenha(!visivelSenha);
        setInputSenha(inputSenha === 'password' ? 'text' : 'password');
    }

    // Função para tornar o campo password type text
    const toggleSenhaConfirmacaoVisibility = () => {
        setVisivelSenhaConfirmacao(!visivelSenhaConfirmacao)
        setInputSenhaConfirmacao(inputSenhaConfirmacao === 'password' ? 'text' : 'password');
    }

    const onSubmit = (data) => {
        atualizarForm(data)
        onNext();
    }
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isAccepted, setIsAccepted] = useState(false);
    
    const handleAccept = () => {
        setIsAccepted(true);
        setValue("termos", true);
    };   
    
    const handleCheckboxChange = () => {
        setIsAccepted((prev) => !prev);
        setValue("termos", !isAccepted);
    };

    const container = {
        hidden: {y: 50, opacity: 0 },
        visible: {y: 0, opacity: 1, 
            transition: {delayChildren: 0.3, staggerChildren: 0.2,},
        },
    };
      
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {y: 0, opacity: 1,
            transition: {duration: 0.5, ease:"easeOut"},
        },
    }

    return (

        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>
            
            <motion.div
                initial={'hidden'} 
                animate={'visible'}
                variants={container} 
                className="grid grid-cols-6 xl:px-7"
                >
                
                {/*Titulo do step*/}
                <div className="col-span-6 lg:min-h-[20vh] min-h-[10vh] lg:content-end content-center mb-3 lg:mb-0">
                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Cadastro de conta
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Crie uma senha simples para você acessar a sua proposta e acompanhar a análise
                    </p>
                </div>

                {/*Form do step*/}
                <div className="col-span-6 grid grid-cols-6 gap-2.5 content-center lg:min-h-[60vh] min-h-[55vh]">
                    <div className="col-span-3">
                        <InputMask
                            mask="999.999.999-99"
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                            placeholder='Digite seu CPF *'
                            inputMode='numeric'
                            maskChar={null}
                            {...register("cpf")}>
                            {(inputProps) => <Input {...inputProps} />}
                        </InputMask>
                        {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                    </div>

                    <div className="col-span-3">
                        <InputMask
                            mask="99/99/9999"
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.dataNascimento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                            placeholder='Nascimento *'
                            inputMode='numeric'
                            maskChar={null}
                            {...register("dataNascimento")}
                            >
                            {(inputProps) => <Input {...inputProps} />}
                        </InputMask>
                        {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.nome ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                            placeholder="Seu nome completo? *"
                            {...register('nome')} 
                        />
                        {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                    </div>

                    <div className="col-span-6 grid grid-cols-6 gap-2.5">
                        <div className="col-span-3">
                            <Input type="email" className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.email ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                                placeholder="Seu e-mail? *"
                                {...register('email')} 
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="col-span-3 relative">
                            <InputMask
                                mask="(99) 99999-9999"
                                className={`py-6 pl-8 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                    }`}
                                maskChar={null}
                                placeholder='Telefone *'
                                inputMode='numeric'
                                {...register("celular")}
                                >
                                {(inputProps) => <Input {...inputProps} />}
                            </InputMask>
                            <HiOutlineDevicePhoneMobile className={`absolute top-3 left-2 text-2xl ${errors.celular ? 'text-red-500' : 'text-slate-400'}`} />
                            {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                        </div>
                    </div>
                    
                    <h5 className="col-span-6 lg:mb-2 lg:mt-5 my-2 text-slate-400 font-light lg:text-md text-sm">
                        Crie uma senha simples
                    </h5>
                    
                    <div className="col-span-3">
                        <div className="relative">
                            <Input type={inputSenha} className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                                placeholder="Senha"
                                {...register('senha')} 
                            />

                            {visivelSenha ? (
                                <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaVisibility} />
                            ) : (
                                <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaVisibility} />
                            )}
                        </div>
                        {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
                    </div>
                    
                    <div className="col-span-3">
                        <div className="relative">
                            <Input type={inputSenhaConfirmacao} className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senhaConfirmacao ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                                {...register('senhaConfirmacao')}
                                placeholder="Confirme" 
                            />

                            {visivelSenhaConfirmacao ? (
                                <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaConfirmacaoVisibility} />
                            ) : (
                                <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaConfirmacaoVisibility} />
                            )}
                        </div>
                        {errors.senhaConfirmacao && <p className="text-red-500 text-xs mt-1">{errors.senhaConfirmacao.message}</p>}
                    </div>

                    <div className="col-span-6 mt-2">
                        <Checkbox
                            id="termos"
                            radius="md"
                            isSelected={isAccepted} 
                            onValueChange={handleCheckboxChange}
                            {...register("termos", { required: "Você deve aceitar os termos para continuar." })}
                        />
                        
                        <label className='text-slate-400 mb-5 font-light lg:text-md text-sm' htmlFor="termos">
                            Li e aceito os termos de uso e política de privacidade.
                            
                            <Link className="text-blue-400" href="#" onClick={(e) => { e.preventDefault(); onOpen(); }}> 
                                Ver termos de uso e política de privacidade.
                            </Link>

                            {errors.termos && <p className="text-red-500 text-sm mt-1">{errors.termos.message}</p>}
                        </label>
                    </div>

                    <ModalOpt isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleAccept}/>
                </div>

                {/*Botão do step*/}
                <div className="col-span-6 lg:min-h-[20vh] min-h-[10vh] content-center">
                    <BtnNext nome={'Criar conta'} type="submit"/>
                </div>
            
            </motion.div>

        </form>
    )
}
