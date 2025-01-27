import React from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import { PiQuestionMarkBold } from "react-icons/pi"


export default function App({ isOpen, onOpenChange }) {
  
    return (
        <>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}  
                hideCloseButton={true}
                placement='center'
                backdrop='blur'
                radius="sm"
                className="mx-4"
                >

                <ModalContent className="overflow-visible">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center font-semibold">
                                <PiQuestionMarkBold className="absolute -top-10 text-[5rem] p-2 rounded-xl bg-pink-500 text-white"/>
                            </ModalHeader>

                            <ModalBody className="m-3">
                                <h1 className="text-pink-500 text-center font-semibold text-xl">
                                    Somente duas opções?
                                </h1>
                                <p className="text-sm text-slate-500 leading-relaxed text-justify"> 
                                    Sabemos que existem mais identidades de gênero além de masculino e feminino. 
                                    No entanto, para fins de preenchimento da proposta, utilizamos o gênero de nascimento. 
                                    Isso nos ajuda a seguir a forma atual utilizado no processo de análise.
                                </p>
                            </ModalBody>
                            
                            <ModalFooter className="mx-auto">

                                <Button color="danger" radius="sm" variant="light" onPress={onClose}>
                                    Fechar explicação
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
  );
}
