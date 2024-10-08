import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { useState } from "react";

export default function App({ isOpen, onOpenChange }) {
  
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={'inside'} placement={'center'}>

                <ModalContent>
                    {(onClose) => (
                        
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-blue-500 font-semibold">
                                Por que apenas essas opções ?
                            </ModalHeader>

                            <ModalBody>
                                <p className="text-sm text-slate-500 border border-slate-300 p-5 rounded-xl"> 
                                    Sabemos que existem mais identidades de gênero além de masculino e feminino. 
                                    No entanto, para fins de preenchimento da proposta, utilizamos o gênero de nascimento. 
                                    Isso nos ajuda a seguir a forma atual utilizado no processo de análise.
                                </p>
                            </ModalBody>
                            
                            <ModalFooter>

                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Fechar
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
  );
}
