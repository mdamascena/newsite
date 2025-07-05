import React from "react"
import { useState } from "react"
import { useHookFormMask } from "use-mask-input"
import { useFormContext } from "react-hook-form"
import { PiEyeClosedBold, PiEye } from "react-icons/pi"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import { Input } from "../../ui/input"
import BtnBlueNext from "../button/BtnBlueNext"
import BtnBlueBack from "../button/BtnBlueBack"
import { HiOutlineKey } from "react-icons/hi2"
import { BsWhatsapp } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"

const WP = 'https://bit.ly/wa-plancredi-api'
const TEL = 'tel:8008789853'


export default function ModalLogin({ isOpen, onOpenChange, onNext  }) {

    const { register, watch, handleSubmit, formState: { errors }, setValue } = useFormContext();
    const registerWithMask = useHookFormMask(register);
    const [inputSenha, setInputSenha] = useState('password');
    const [visivelSenha, setVisivelSenha] = useState(false);

    const toggleSenhaVisibility = () => {
        setVisivelSenha((prev) => !prev);
        setInputSenha((prev) => prev === 'password' ? 'text' : 'password');
    };
  
    return (
        <>
            <Modal
                classNames={{
                backdrop:"bg-black/90",
                body:"px-2"
                }}

                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="3xl"  
                hideCloseButton={true}
                placement='center'
                backdrop='blur'
                radius="lg"
                className="mx-4"
                >

                <ModalContent className="overflow-visible">
                    {(onClose) => (
                        <>

                            <ModalBody className="bg-blue-800 saturate-150 rounded-xl">

                                <div className="grid grid-cols-1 lg:grid-cols-2">

                                    <div className="col-span-1 p-5 text-white">
                                        <div className="">
                                            <p className="font-semibold text-4xl tracking-tight">
                                                Olá
                                            </p>
                                            <p className="font-light text-xl">Bem vindo de volta!</p>
                                        </div>

                                        <div className="hidden lg:block text-sm mt-24">
                                            <h1 className="font-semibold text-lg tracking-tight">Precisa da ajuda?</h1>
                                            <p className="mb-2">Fale com nosso atendimento</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                <BtnBlueNext className='col-span-1' iconLeft={<BsTelephone className="mr-2 text-lg"/>} nome={'0800'}/>
                                                <BtnBlueNext className='col-span-1' iconLeft={<BsWhatsapp className="mr-2 text-lg"/>} nome={'WhatsApp'}/>
                                            </div>
                                            <p className="font-extralight text-xs mt-2">
                                                Funcionamos de segunda a sexta-feira, das 9h as 18h exceto nos feriádos
                                            </p>
                                        </div>
                                        
                                    </div>

                                    <div className="col-span-1 bg-slate-100 rounded-lg p-5">

                                        <div>
                                            <div className="text-slate-400 mb-5">
                                                <p className="font-light">Seu CPF já tem cadastro por aqui.</p>
                                                <p className="font-semibold">Bora fazer login pra continuar?</p>
                                            </div>
                                            
                                            <div className="gap-4 grid">

                                                <div className=" grid gap-2">
                                                    <div className="col-span-1">

                                                        <Input
                                                            className='py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500' 
                                                            type="text"
                                                            inputMode="numeric"
                                                            placeholder="CPF *"
                                                        />

                                                    </div>

                                                    <div className="col-span-1">
                                                        <div className="relative">
                                                            <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                                                type={inputSenha}
                                                                placeholder="Crie um senha"
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
                                                </div>


                                                <div className="grid gap-2">
                                                    <BtnBlueNext nome={'Acessar'} />
                                                    <BtnBlueBack nome={'Esqueci a senha'} />
                                                </div>
                                                
                                            </div>

                                        </div>

                                        

                                    </div>

                                    <div className="lg:hidden text-sm mt-5 text-white mx-2">
                                        <h1 className="font-semibold text-lg tracking-tight text-center mb-2">Precisa da ajuda?</h1>
                                        
                                        <div className="grid grid-cols-2 gap-2">
                                            <BtnBlueNext className='col-span-1' iconLeft={<BsTelephone className="mr-2 text-lg"/>} nome={'0800'}/>
                                            <BtnBlueNext className='col-span-1' iconLeft={<BsWhatsapp className="mr-2 text-lg"/>} nome={'WhatsApp'}/>
                                        </div>

                                        <p className="my-2 text-center">Fale com nosso atendimento</p>
                                            
                                    </div>


                                </div>

                            </ModalBody>
                            
                        </>
                    )}

                </ModalContent>

            </Modal>
        </>
  );
}
