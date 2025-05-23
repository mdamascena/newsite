import { useState } from "react"
import { Input } from "components/ui/input"
import { useHookFormMask } from "use-mask-input"
import { useFormContext } from "react-hook-form"
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { useFormData } from "../../../context/FormContext"
import { useDisclosure } from "@nextui-org/react"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { motion } from 'framer-motion'
import { container } from "shared/motionUtils/motionTransation"
import Link from "next/link"
import ModalOpt from '../modal/ModalOpt'
import BtnNext from '../button/BtnBlueNext'

export default function FormCadastro({ onNext }) {

    const { register, watch, handleSubmit, formState: { errors }, setValue } = useFormContext();
    const registerWithMask = useHookFormMask(register);

    const acceptedTerms = watch("termos");
    const acceptedWhatsapp = watch("aceite_whatsapp");
    const { atualizarForm } = useFormData();

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

    return (

        <form className="lg:min-h-[100vh]" onSubmit={handleSubmit(onSubmit)}>

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
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Crie uma senha simples para você acessar a sua proposta e acompanhar a análise
                    </p>
                </div>

                {/*Form do step*/}
                <div className="grid-cols-6 container-form-body">

                    <div className="col-span-6">
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder='Digite seu CPF'
                            {...registerWithMask("cpf", ['999.999.999-99'])}
                        />
                        {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                    </div>

                    <div className="lg:col-span-4 col-span-6">
                        <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.nome ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                            placeholder="Seu nome completo? *"
                            pattern="[a-zA-Z\s]*"
                            {...register('nome')}
                        />
                        {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                    </div>

                    <div className="lg:col-span-2 col-span-6">
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.dataNascimento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder="Nascimento *"
                            {...registerWithMask("dataNascimento", ['99/99/9999'])}
                        />
                        {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento.message}</p>}
                    </div>

                    <div className="col-span-6 grid grid-cols-6 gap-2">
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
                                inputMode="numeric"
                                placeholder="Seu celular *"
                                {...registerWithMask("celular", ['99 99999-9999'])}
                            />
                            <HiOutlineDevicePhoneMobile className={`absolute top-3 left-2 text-2xl ${errors.celular ? 'text-red-500' : 'text-slate-400'}`} />
                            {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                        </div>
                    </div>

                    <h5 className="col-span-6 lg:mb-2 lg:mt-4 my-2 text-slate-400 font-light lg:text-base text-sm">
                        Crie uma senha simples
                    </h5>

                    <div className="lg:col-span-3 col-span-6">
                        <div className="relative">
                            <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type={inputSenha}
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

                    <div className="col-span-6 lg:mt-3 mt-2 flex items-center">

                        <input
                            type="checkbox"
                            name="termos"
                            id="termos"
                            className="text-blue-600 h-5 w-5 mr-4 ml-2"
                            checked={acceptedTerms || false}
                            onChange={handleCheckboxChange} // Usar a função para atualizar o valor
                            {...register("termos", { required: "Você deve aceitar os termos para continuar." })}
                        />

                        <label className='text-slate-400 font-light lg:text-md text-xs w-full' htmlFor="termos">
                            <span className="mr-2">
                                Li e aceito os termos.
                            </span>

                            <Link className="text-blue-400" href="#" onClick={(e) => { e.preventDefault(); onOpen(); }}>
                                Ver termos de uso e política de privacidade.
                            </Link>

                            {errors.termos && <p className="text-red-500 text-sm mt-1">{errors.termos.message}</p>}
                        </label>
                    </div>

                    <ModalOpt isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleAccept} />

                    <div className="col-span-6 my-2 flex items-center">
                        <input
                            type="checkbox"
                            name="aceite_whatsapp"
                            id="aceite_whatsapp"
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
                    </div>

                </div>

                {/*Botão do step*/}
                <div className="!grid-cols-1 container-form-footer">
                    <BtnNext nome={'Criar conta'} type="submit" />
                </div>

            </motion.div>

        </form>
    )
}
