import React from "react"
import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import Carousel from "components/fgts/carousel/Carrousel";

const SlideCount = [
    "/img/tela_acomp.png",
    "/img/tela_acomp.png",
    "/img/tela_acomp.png",
    "/img/tela_acomp.png"
];

export default function ModalAdesaoFGTS({ isOpen, onOpenChange, setValueCard  }) {

    const [currentSlide, setCurrentSlide] = useState(0);

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
                                <Button
                                    value={'fechouModal'}
                                    color="danger" radius="sm" variant="light" 
                                    onPress={() => {
                                        setValueCard('fechouModal');
                                        onClose();
                                    }}>
                                    Fechar explicação
                                </Button>
                            </ModalHeader>

                            <ModalBody className="m-3">
                                <Carousel slides={SlideCount} onSlideChange={setCurrentSlide}/>
                            </ModalBody>
                            
                            <ModalFooter className="mx-auto">

                                <Button
                                    value={'0'} 
                                    color="danger" radius="sm" variant="light" 
                                    onPress={() => {
                                        setValueCard('0');
                                        onClose();
                                    }}
                                    isDisabled={currentSlide !== SlideCount.length - 1}
                                    >
                                    Já fiz a adesão
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
  );
}
