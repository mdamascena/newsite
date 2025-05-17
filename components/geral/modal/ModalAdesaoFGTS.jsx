import React from "react"
import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import Carousel from "components/fgts/carousel/Carrousel";

const SlideImg = [
    "/img/adesao1.webp",
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
                hideCloseButton={false}
                
                size="xl"
                placement='center'
                backdrop='blur'
                radius="sm"
                className="mx-4"
                >

                <ModalContent className="overflow-visible">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center font-semibold p-3"/>

                            <ModalBody className="!px-0 !py-0 m-3">
                                <Carousel imagens={SlideImg} onSlideChange={setCurrentSlide}/>
                            </ModalBody>
                            
                            <ModalFooter className="mx-auto">

                                <Button
                                    value={'0'} 
                                    color="blue" radius="sm" variant="light" 
                                    onPress={() => {
                                        setValueCard('0');
                                        onClose();
                                    }}
                                    isDisabled={currentSlide !== SlideImg.length - 1}
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
