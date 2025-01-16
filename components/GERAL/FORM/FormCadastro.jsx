import { useState } from "react"
import Link from "next/link"
import { Input } from "components/ui/input"
import { useHookFormMask } from "use-mask-input"
import { useFormContext } from "react-hook-form"
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { useFormData } from "../../../context/FormContext"
import {useDisclosure} from "@nextui-org/react"
import { motion } from 'framer-motion'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import ModalOpt from '../modal/ModalOpt'
import BtnNext from '../button/BtnBlueNext'

export default function FormCadastro({onNext}) {

    const { register, watch, handleSubmit, formState: { errors }, setValue } = useFormContext();
    const registerWithMask = useHookFormMask(register);

    const acceptedTerms = watch("termos");
    const acceptedWhatsapp = watch("aceite_whatsapp");
    const {atualizarForm} = useFormData();

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
    
    const handleCheckboxChange = (event) => {
        setIsAccepted(true);
        setValue("termos", true);
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
                <div className="container-form-head">
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
                <div className="grid-cols-6 container-form-body">

                    <div className="col-span-6">
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder='Digite seu CPF'
                            value={watch('cpf') || ''}
                            {...registerWithMask("cpf", ['999.999.999-99'])}
                        />
                        {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                    </div>

                    <div className="col-span-6 grid grid-cols-6 gap-2.5">
                        <div className="lg:col-span-3 col-span-6">
                            <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.email ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type="email"
                                value={watch('email') || ''}
                                placeholder="Seu e-mail *"
                                {...register('email')} 
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="lg:col-span-3 col-span-6 relative">
                            <Input 
                                className={`py-6 pl-9 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type="text"
                                value={watch('celular') || ''}
                                placeholder="Seu celular *"
                                {...registerWithMask("celular", ['99 99999-9999'])}
                            />
                            <HiOutlineDevicePhoneMobile className={`absolute top-3 left-2 text-2xl ${errors.celular ? 'text-red-500' : 'text-slate-400'}`} />
                            {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                        </div>
                    </div>
                    
                    <h5 className="col-span-6 lg:mb-2 lg:mt-5 my-2 text-slate-400 font-light lg:text-md text-sm">
                        Crie uma senha simples
                    </h5>
                    
                    <div className="lg:col-span-3 col-span-6">
                        <div className="relative">
                            <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type={inputSenha}
                                value={watch('senha') || ''}
                                placeholder="Digite uma senha"
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
                    
                    <div className="lg:col-span-3 col-span-6">
                        <div className="relative">
                            <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senhaConfirmacao ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type={inputSenhaConfirmacao}
                                value={watch('senhaConfirmacao') || ''}
                                placeholder="Confirme sua senha" 
                                {...register('senhaConfirmacao')}
                            />

                            {visivelSenhaConfirmacao ? (
                                <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaConfirmacaoVisibility} />
                            ) : (
                                <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaConfirmacaoVisibility} />
                            )}
                        </div>
                        {errors.senhaConfirmacao && <p className="text-red-500 text-xs mt-1">{errors.senhaConfirmacao.message}</p>}
                    </div>

                    <div className="col-span-6 mt-3 flex items-center">
                        
                        <input
                            type="checkbox"
                            name="termos"
                            id="termos"
                            className="text-blue-600 h-8 w-8 lg:h-5 lg:w-5 mr-4 ml-2"
                            checked={acceptedTerms || false}
                            onChange={handleCheckboxChange} // Usar a função para atualizar o valor
                            {...register("termos", { required: "Você deve aceitar os termos para continuar." })}
                        />
                        
                        <label className='text-slate-400 font-light lg:text-md text-sm w-96' htmlFor="termos">
                            <span className="mr-2">
                                Li e aceito os termos.
                            </span>
                         
                            <Link className="text-blue-400" href="#" onClick={(e) => { e.preventDefault(); onOpen(); }}> 
                                Ver termos de uso e política de privacidade.
                            </Link>

                            {errors.termos && <p className="text-red-500 text-sm mt-1">{errors.termos.message}</p>}
                        </label>
                    </div>

                    <ModalOpt isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleAccept}/>

                    <div className="col-span-6 my-2 flex items-center">
                        <input 
                            type="checkbox"
                            name="aceite_whatsapp"
                            id="aceite_whatsapp"
                            className="text-blue-600 h-8 w-8 lg:h-5 lg:w-5 mr-4 ml-2"
                            checked={acceptedWhatsapp || false}
                            onChange={handleCheckboxChange} // Usar a função para atualizar o valor
                            {...register("aceite_whatsapp", { required: "Você deve aceitar os termos para continuar." })}
                        />
                        <label className='text-slate-400 font-light lg:text-md text-sm w-96' htmlFor="aceite_whatsapp">
                            <span className="mr-2">
                                Autorizo a Valoreal entrar em contato comigo por celular, e-mail ou WhatsApp.
                            </span>
                            {errors.aceite_whatsapp && <p className="text-red-500 text-sm mt-1">{errors.aceite_whatsapp.message}</p>}
                        </label>
                    </div>

                </div>

                {/*Botão do step*/}
                <div className="!grid-cols-1 container-form-footer">
                    <BtnNext nome={'Criar conta'} type="submit"/>
                </div>
            
            </motion.div>

        </form>
    )
}
