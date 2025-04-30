import React from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import { PiQuestionMarkBold } from "react-icons/pi"
import { LiaCertificateSolid } from "react-icons/lia"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../../ui/carousel"
  


export default function ModalAdesaoFGTS({ isOpen, onOpenChange }) {
  
    return (
        <>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}  
                hideCloseButton={true}
                size="5xl"
                placement='center'
                backdrop='blur'
                radius="sm"
                className="mx-4"
                >

                <ModalContent className="overflow-visible">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center font-semibold">
                                <LiaCertificateSolid className="text-[5rem] p-2 rounded-xl bg-blue-500 text-white"/>
                            </ModalHeader>

                            <ModalBody className="m-3">
                                
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
