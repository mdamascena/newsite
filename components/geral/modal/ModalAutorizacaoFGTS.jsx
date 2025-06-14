import React from "react"
import { useState } from "react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react"
import Carousel from "components/fgts/carousel/Carrousel"
import { IoCopyOutline } from "react-icons/io5"
import BtnCopia from '../../geral/button/BtnBlueBack'
import { motion } from 'framer-motion'
import { container, item } from 'shared/motionUtils/motionTransation'

const SlideImg = [
    "/img/autorizacao1.webp",
    "/img/autorizacao2.webp",
    "/img/autorizacao3.webp",
    "/img/autorizacao4.png",
    "/img/autorizacao4.png",
    "/img/autorizacao6.webp"
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
        titulo: "Pesquisa",
        descricao: "Pesquise e selecione os bancos parcelos da ValoReal"
    },

    {
        indice: "5",
        titulo: "Instituições",
        descricao: "Copie os nomes das instituições parcelas e cole no APP FGTS"
    },

    {
        indice: "6",
        titulo: "Finalizar",
        descricao: "Clique em 'SIM' para concluir a autorização"
    }

];




export default function ModalAutorizacaoFGTS({ isOpen, onOpenChange, setValueCard  }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const [copiarQI, setCopiarQI] = useState(false);
    const [copiarDEL, setCopiarDEL] = useState(false);

    const CopyQI = "QI SOCIEDADE";
    const CopyDEL = "DELCRED SOCIEDADE";

    const copiarTexto = async (texto, setCopiado) => {
        try {await navigator.clipboard.writeText(texto);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000); // feedback por 2 segundos
        } catch (err) {
        console.error("Erro ao copiar:", err);
        }
    };

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
                            <ModalBody className="!px-0 !py-0 m-3 select-none relative">
                                    
                                <Carousel imagens={SlideImg} texto={SlideTexto} onSlideChange={setCurrentSlide}/>
                                
                                {currentSlide === 4 && (
                                    
                                    <div className="absolute left-1/2 top-96 -translate-x-1/2 -translate-y-1/2">
                                        <motion.div
                                            initial={'hidden'}
                                            animate={'visible'}
                                            variants={item}
                                            className=" select-text">
                                            
                                            <div className="rounded-lg bg-white shadow-md text-xs w-72">
                                                
                                                <div className="lg:p-5 p-3">
                                                    
                                                    <h1 className="text-center pb-2">Copie os nomes e cole o APP FGTS</h1>

                                                    <div className="grid gap-2 text-sx">

                                                        <BtnCopia 
                                                            event={() => copiarTexto(CopyQI, setCopiarQI)} 
                                                            iconLeft={<IoCopyOutline className="lg:mr-3 mr-1"/>} 
                                                            nome={"Copie QI SOCIEDADE"}
                                                        />
                                                        <BtnCopia 
                                                            event={() => copiarTexto(CopyDEL, setCopiarDEL)} 
                                                            iconLeft={<IoCopyOutline className="lg:mr-3 mr-1"/>} 
                                                            nome={"Copie DELCRED"}
                                                        />

                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </motion.div>
                                    </div>
                                )}
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
