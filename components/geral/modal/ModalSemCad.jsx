import Lottie from "lottie-react"
import AlertAnimation from "../../../public/img/alert.json"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "components/lib/nextui-compat"
import BtnNext from "../button/BtnBlueNext"
import BtnBack from "../button/BtnBlueBack"

export default function ModalSemCad({ isOpen, onClose, onCriarConta }) {
    return (
        <Modal
            aria-label="CPF sem conta cadastrada"
            isOpen={isOpen}
            onClose={onClose}
            hideCloseButton={true}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            backdrop="blur"
            placement="center"
            radius="sm"
            className="mx-4 overflow-visible">

            <ModalContent>
                <ModalHeader className="flex flex-col items-center px-6 pt-6 text-center">
                    <Lottie
                        className="-mt-20 mb-1 w-32"
                        animationData={AlertAnimation}
                        loop={false}
                    />

                    <h1 className="text-2xl font-semibold leading-tight text-blue-600 -mt-5">
                        Conta não registrada
                    </h1>
                </ModalHeader>

                <ModalBody className="px-6 text-center">
                    <p className="text-md text-slate-500">
                        Não encontramos uma conta cadastrada para este CPF.
                    </p>

                    <p className="text-md text-slate-500 font-semibold">
                        Para continuar, crie sua conta Valoreal.
                    </p>
                </ModalBody>

                <ModalFooter className="w-full flex-col gap-3 px-6 pb-6 pt-2 sm:flex-row sm:justify-between">
                    <BtnNext
                        tipo="button"
                        nome="Criar conta"
                        event={onCriarConta}
                        className="min-h-12 px-6 text-base font-semibold sm:w-44"
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
