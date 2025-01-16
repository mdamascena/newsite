import React from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"
import InputMask from "react-input-mask"
import { Input } from "../../ui/input"
import BtnBack from '../button/BtnBlueBack'
import BtnNext from '../button/BtnBlueNext'

export default function App({isOpen,onClose}) {
   

    return (
        <Modal 
            classNames={{
                backdrop:"bg-black/90",
                body:"px-4",
                header:"px-4",
                footer:"px-4"
            }}
            hideCloseButton={true}
            isOpen={isOpen}
            onClose={onClose}
            radius="sm"
            backdrop="opaque"
            placement="center"
            >

            <ModalContent>
                {(onClose)=>(
                    <>
                        <ModalHeader>
                            <div className='bg-white border border-l-4 border-l-blue-600 rounded-md'>
                                <p className='text-center py-4 px-8 text-slate-400 font-light text-sm'>
                                    Informe o seu CPF para localizarmos seu cadastrado
                                </p>
                            </div>
                        </ModalHeader>

                        <ModalBody>
                            <InputMask 
                                className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                                mask="999.999.999-99"
                                maskChar = {null}
                                placeholder='Digite seu CPF'>

                                {(inputProps) => <Input {...inputProps} />}
                            </InputMask>
                            
                            <BtnNext nome={'Localizar cadastro'}/>

                            <div className='border border-slate-200 rounded-lg p-3'>
                                <div className='text-slate-400 font-light text-sm text-center mb-2'>
                                    Dica do e-mail cadastrado para o CPF
                                </div>
                                        
                                <div className='text-center p-2 rounded-md bg-slate-100'>
                                    ms*******na@gmail.com
                                </div>

                                <div className='text-slate-400 font-light text-xs text-center mt-2'>
                                    Se não tiver mais acesso ao e-mail ou a dica não ajudou, fale com nosso atendimento.
                                </div>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <BtnBack nome='Fechar' event={onClose}/>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
