import Lottie from "lottie-react"
import AlertAnimation from "../../../public/img/alert.json"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "components/lib/nextui-compat"
import BtnNext from "../button/BtnBlueNext"
import BtnBack from "../button/BtnBlueBack"

export default function ModalTitularNao({ isOpen, onOpenChange, onClose, onSimularOutraModalidade }) {
    return (
        <Modal
            aria-label="Aviso para quem ainda não é titular da conta de luz"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            hideCloseButton={true}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            backdrop="blur"
            placement="center"
            radius="md"
            className="mx-4 overflow-visible">

            <ModalContent>
                <ModalHeader className="flex flex-col items-center px-6 pt-6 text-center bg-white rounded-t-2xl">
                    <Lottie
                        className=" -mt-20 mb-1 w-32"
                        animationData={AlertAnimation}
                        loop={false}
                    />

                    <h1 className="text-2xl font-semibold leading-tight text-blue-600 -mt-5">
                        Você não é o titular?
                    </h1>

                    <p className="text-2xl font-medium text-blue-300 mb-3">
                        Sem estresse!
                    </p>
                </ModalHeader>

                <ModalBody className="px-6 text-center">
                    <p className="text-md text-slate-500">
                        Para o empréstimo na conta de luz, é necessário ser o 
                        titular da conta há mais de 6 meses. 
                    </p>

                    <p className="text-md text-slate-500 font-semibold">
                        Mas temos outras opções bem interessantes que podem cair 
                        perfeitamente no seu perfil!
                    </p>
                </ModalBody>

                <ModalFooter className="w-full flex-col gap-3 px-6 pb-6 pt-2 sm:flex-row sm:justify-between">
                    <BtnNext
                        tipo="button"
                        nome="Simular outra modalidade"
                        event={onSimularOutraModalidade}
                        className="min-h-12 whitespace-nowrap px-4 text-sm font-semibold sm:w-60 sm:px-6 sm:text-base"
                    />

                    <BtnBack
                        tipo="button"
                        nome="Fechar"
                        event={onClose}
                        classN="min-h-12 px-6 text-base font-semibold sm:w-35"
                    />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
