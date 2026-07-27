import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Lottie from "lottie-react";
import CheckAnimation from "../../../public/img/check_ok.json";
import FailedAnimation from "../../../public/img/failed.json";
import { Modal, ModalBody, ModalContent } from "components/lib/nextui-compat";

const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then((module) => module.DotLottieReact),
    { ssr: false }
);

const estados = {
    processing: {
        message: "Aguarde um momento",
    },
    success: {
        animation: CheckAnimation,
        message: "Conta cadastrada com sucesso",
        loop: false,
    },
    error: {
        animation: FailedAnimation,
        message: "Cadastro falhou, tente novamente",
        loop: false,
    },
};

export default function ModalCadLoading({ isOpen, status, onFinished }) {
    const estado = estados[status] || estados.processing;
    const isFinalState = status === "success" || status === "error";
    const onFinishedRef = useRef(onFinished);

    useEffect(() => {
        onFinishedRef.current = onFinished;
    }, [onFinished]);

    useEffect(() => {
        if (!isOpen || !isFinalState) {
            return undefined;
        }

        const timeout = window.setTimeout(() => onFinishedRef.current(), 4000);
        return () => window.clearTimeout(timeout);
    }, [isFinalState, isOpen, status]);

    return (
        <Modal
            aria-label="Status do cadastro"
            isOpen={isOpen}
            hideCloseButton
            isDismissable={false}
            isKeyboardDismissDisabled
            backdrop="blur"
            placement="center"
            radius="sm"
            className="mx-4"
        >
            <ModalContent>
                <ModalBody className="flex min-h-64 items-center justify-center px-8 py-8 text-center">
                    {status === "processing" ? (
                        <DotLottieReact
                            className="h-36 w-36"
                            src="/img/loading.lottie"
                            loop
                            autoplay
                        />
                    ) : (
                        <Lottie
                            key={status}
                            className="h-36 w-36"
                            animationData={estado.animation}
                            loop={false}
                        />
                    )}
                    <p className="mt-2 text-lg font-semibold text-blue-600">
                        {estado.message}
                    </p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
