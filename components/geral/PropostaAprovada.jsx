import { useEffect, useState } from 'react';
import { useFormData } from "context/FormContext";
import { AnimatePresence, motion } from 'framer-motion';
import PageTransicaoResposta from './PageTransicaoResposta';
import BtnNext from "../geral/button/BtnBlueNext";
import { FaCheckCircle } from 'react-icons/fa';

export default function PropostaAprovada({ onNext, title, subTitle, text }) {

    const { atualizarForm } = useFormData()
    const [showTransition, setShowTransition] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTransition(false);
        }, 17000);

        return () => clearTimeout(timer);
    }, []);

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showTransition ? (
                    <motion.div
                        key="transition"
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 500 }}
                        transition={{ duration: .6, ease: "backInOut" }}
                    >
                        <PageTransicaoResposta />

                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, ease: "backOut" }}
                    >
                        <div>
                            <div>
                                <div>{title}</div>
                                <div>{subTitle}</div>
                            </div>

                            <div>
                                <FaCheckCircle />
                            </div>

                            <div>
                                {text}
                            </div>
                        </div>

                        <div className="container-form-footer">
                            <div className="col-span-5">
                                <BtnNext event={onSubmit} nome="Avançar" type="submit" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}