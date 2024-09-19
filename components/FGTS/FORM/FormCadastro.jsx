import { useState } from "react";
import Link from "next/link";
import { useFormContext } from "react-hook-form"
import { Input, Button, Checkbox } from "@nextui-org/react"
import { useDisclosure } from "@nextui-org/react";
import InputMask from "react-input-mask";
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import { MdEmail, MdDateRange } from "react-icons/md";
import { FaUser, FaIdCard } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import ModalOpt from '../../GERAL/ModalOpt'

export default function FormCadastro() {
    const { register, handleSubmit, formState: { errors }, setValue } = useFormContext();

    const [visivel, setVisivel] = useState(false);
    const [visivelConfirmacao, setVisivelConformacao] = useState(false)

    const toggleVisibility = () => setVisivel(!visivel);
    const visibilityConfirmation = () => setVisivelConformacao(!visivelConfirmacao);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAccept = () => {
        setIsAccepted(true);
        setValue("termos", true);
    };

    const handleCheckboxChange = () => {
        setIsAccepted((prev) => !prev);
        setValue("termos", !isAccepted);
    };

    function onSubmit(data) {
        atualizarForm(data)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="col-span-6 content-start lg:mt-8 mt-2 mb-8">
                    <h1 className="text-slate-400 text-xl mb-2">
                        Vamos começar!
                    </h1>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Crie uma senha simples para você acessar a sua proposta e acompanhar a análise
                    </p>
                </div>

                <div className="col-span-6 grid grid-cols-6 gap-2.5 content-center">

                    <div className="col-span-3">
                        <Input
                            {...register('cpf')}
                            placeholder="CPF"
                            startContent={<FaIdCard className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            status={errors.cpf ? 'error' : 'default'}
                            helperText={errors.cpf?.message}
                            isClearable
                        />
                    </div>

                    <div className="col-span-3">
                        <Input
                            {...register('dataNascimento')}
                            placeholder="Data de Nascimento"
                            startContent={<MdDateRange className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            status={errors.dataNascimento ? 'error' : 'default'}
                            helperText={errors.dataNascimento?.message}
                            isClearable
                        />
                    </div>

                    <div className="col-span-6">
                        <Input
                            {...register('nome')}
                            placeholder="Nome completo"
                            startContent={<FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            status={errors.nome ? 'error' : 'default'}
                            helperText={errors.nome?.message}
                            isClearable

                        />
                    </div>

                    <div className="col-span-6">
                        <Input
                            type="email"
                            {...register('email')}
                            placeholder="E-mail"
                            startContent={<MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            status={errors.email ? 'error' : 'default'}
                            helperText={errors.email?.message}
                            isClearable
                        />
                    </div>

                    <h5 className="col-span-6 mb-2 mt-5 text-slate-400 font-light lg:text-md text-sm">
                        Crie uma senha simples
                    </h5>

                    <div className="col-span-6 lg:col-span-3">
                        <Input
                            type={visivel ? 'text' : 'password'}
                            className="max-w-xs"
                            {...register('senha')}
                            placeholder="Senha"
                            status={errors.senha ? 'error' : 'default'}
                            helperText={errors.senha?.message}
                            startContent={<GiPadlock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {visivel ?
                                        (<PiEyeClosedBold className="text-2xl text-default-400 pointer-events-none" />)
                                        :
                                        (<PiEye className="text-2xl text-default-400 pointer-events-none" />)}
                                </button>
                            }
                        />
                    </div>

                    <div className="col-span-6 lg:col-span-3">
                        <Input
                            type={visivelConfirmacao ? 'text' : 'password'}
                            className="max-w-xs"
                            {...register('senhaConfirmacao')}
                            placeholder="Senha"
                            status={errors.senhaConfirmacao ? 'error' : 'default'}
                            helperText={errors.senhaConfirmacao?.message}
                            startContent={<GiPadlock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={visibilityConfirmation}>
                                    {visivelConfirmacao ?
                                        (<PiEyeClosedBold className="text-2xl text-default-400 pointer-events-none" />)
                                        :
                                        (<PiEye className="text-2xl text-default-400 pointer-events-none" />)}
                                </button>
                            }
                        />
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
                    <ModalOpt isOpen={isOpen} onOpenChange={onOpenChange} onAccept={handleAccept} />
                </div>

                <div className="col-span-6 content-end lg:mb-8 mt-8">
                    <Button type="submit" className="w-full bg-blue-500 text-white rounded">
                        Criar conta
                    </Button>
                </div>

            </div>
        </form>
    )
}