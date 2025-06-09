import React from "react"
import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import Carousel from "components/fgts/carousel/Carrousel";

const SlideImg = [
    "/img/autorizacao1.webp",
    "/img/autorizacao2.webp",
    "/img/autorizacao3.webp",
    "/img/adesao4.webp"
];

const SlideTexto = [
    {
        indice: "1",
        titulo: "Opção MAIS ",
        descricao: "Para autorizar, clique em “MAIS” no canto inferior direito."
    },

    {
        indice: "2",
        titulo: "Autorização",
        descricao: "Clique em “Autorização de consulta às informações do FGTS”"
    },

    {
        indice: "3",
        titulo: "Opção de saque",
        descricao: "Clique em “Empréstimo Saque-Aniversário”"
    },

    {
        indice: "4",
        titulo: "Finalizar adeção",
        descricao: "Pesquise e selecione a “Up.p Sociedade de Empréstimo entre Pessoas S.A.”"
    }

];



export default function ModalAutorizacaoFGTS({ isOpen, onOpenChange, setValueCard  }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <Modal 
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
                                    Autorização Efetuada
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
