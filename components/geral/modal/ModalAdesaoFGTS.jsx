import React from "react"
import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "components/lib/nextui-compat"
import Carousel from "components/fgts/carousel/Carrousel";

const SlideImg = [
    "/img/adesao1.webp",
    "/img/adesao2.webp",
    "/img/adesao3.webp",
    "/img/adesao4.webp"
];

const SlideTexto = [
    {
            indice: "1",
            titulo: "Acesse APP do FGTS",
            descricao: "Faça seu login com seu CPF e senha"
    },

    {
            indice: "2",
            titulo: "Selecione Sistema",
            descricao: "Clique em Sistemática de saque do seu FGTS"
    },

    {
            indice: "3",
            titulo: "Aceite o termo",
            descricao: "Leia e selecione “Li e aceito os termos e condições”"
    },

        {
            indice: "4",
            titulo: "Finalizar adeção",
            descricao: "Clique em “Optar pelo Saque-aniversário”. Pronto finalizado."
        }

];


export default function ModalAdesaoFGTS({ isOpen, onOpenChange, setValueCard  }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <Modal 
                aria-label="Instruções de adesão ao FGTS"
                isOpen={isOpen} 
                onOpenChange={onOpenChange}  
                hideCloseButton={true}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
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
                            <ModalBody className="!px-0 !py-0 m-3 select-none">
                                <Carousel imagens={SlideImg} texto={SlideTexto} onSlideChange={setCurrentSlide}/>
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
                                    onPress={() => {setValueCard('0'); onClose();}}
                                    isDisabled={currentSlide !== SlideImg.length - 1}>
                                    Adesão Efetuada
                                </Button>
                            </ModalBody>
                            
                            {/* <ModalFooter className="mx-auto"></ModalFooter> */}
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
  );
}
