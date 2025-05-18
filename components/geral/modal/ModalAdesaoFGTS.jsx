import React from "react"
import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import Carousel from "components/fgts/carousel/Carrousel";

const SlideImg = [
    "/img/adesao1.webp",
    "/img/adesao2.webp",
    "/img/adesao3.webp",
    "/img/adesao4.webp"
];


export default function ModalAdesaoFGTS({ isOpen, onOpenChange, setValueCard  }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}  
                hideCloseButton={true}
                
                size="xl"
                placement='center'
                backdrop='blur'
                radius="sm"
                className="mx-4"
                >

                <ModalContent className="overflow-visible">
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex justify-center font-semibold p-3"/> */}

                            <ModalBody className="!px-0 !py-0 m-3">
                                <Carousel imagens={SlideImg} onSlideChange={setCurrentSlide}/>
                                <Button
                                    value={'0'}
                                    className='
                                        bg-blue-600
                                        items-center 
                                        justify-center
                                        text-white
                                        py-3 
                                        rounded-lg
                                        active:bg-blue-900
                                        hover:bg-blue-600
                                        hover:scale-105
                                        active:scale-90 
                                        duration-400
                                        disabled:opacity-50
                                    ' 
                                     
                                    onPress={() => {
                                        setValueCard('0');
                                        onClose();
                                    }}
                                    isDisabled={currentSlide !== SlideImg.length - 1}
                                    >
                                    Conseguir fazer adesão
                                </Button>
                            </ModalBody>
                            
                            {/* <ModalFooter className="mx-auto">


                            </ModalFooter> */}
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
  );
}
