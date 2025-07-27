import React from "react"
import { useState, useEffect } from "react"
import {Modal, ModalContent, ModalBody, Button} from "@nextui-org/react"
import BtnBlueNext from "../button/BtnBlueNext"
import { BsWhatsapp } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"
import CadLogin from "../section/CadLogin"
import CadReset from "../section/CadReset"

const WP = 'https://bit.ly/wa-plancredi-api'
const TEL = 'tel:8008789853'

export default function ModalLogin({ isOpen, onOpenChange, onNext  }) {

    const [showLogin, setShowLogin] = useState(true)

    useEffect(() => {
        if (isOpen) {
            setShowLogin(true);
        }
    }, [isOpen]);
 
    return (
        <>
            <Modal
                classNames={{
                backdrop:"bg-black/80 lg:bg-black-60",
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
                            <ModalBody className="bg-blue-800 rounded-xl">

                                <div className="grid grid-cols-1 lg:grid-cols-2">

                                    <div className="col-span-1 p-5 text-white">
                                        <div className="">
                                            <p className="font-semibold text-4xl tracking-tight">
                                                Olá
                                            </p>
                                            <p className="font-light text-xl">
                                                Você já tem cadastro por aqui. Bem vindo de volta!
                                            </p>
                                        </div>

                                        <div className="hidden lg:block text-sm mt-24">
                                            <h1 className="text-lg tracking-tight mb-2">Precisando de ajuda?</h1>
                                            {/* <p className="mb-2">Fale com nosso atendimento</p> */}
                                            <div className="grid grid-cols-2 gap-2">
                                                <BtnBlueNext className='col-span-1' iconLeft={<BsTelephone className="mr-2 text-lg"/>} nome={'0800'}/>
                                                <BtnBlueNext className='col-span-1' iconLeft={<BsWhatsapp className="mr-2 text-lg"/>} nome={'WhatsApp'}/>
                                            </div>
                                            <p className="font-extralight text-xs mt-2">
                                                Funcionamos de segunda a sexta-feira, das 9h as 18h exceto nos feriádos
                                            </p>
                                        </div>
                                        
                                    </div>

                                    {/*Formulários*/}
                                    <div className="col-span-1 bg-slate-100 rounded-lg p-5 py-5 h-[350px]">
                                        {showLogin ? <CadLogin setShowLogin={setShowLogin}/> : <CadReset setShowLogin={setShowLogin}/>}
                                    </div>

                                    <div className="lg:hidden text-sm mt-5 text-white mx-2">
                                        <h1 className="font-semibold text-lg tracking-tight text-center mb-2">Se precisar de ajuda</h1>
                                        
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
