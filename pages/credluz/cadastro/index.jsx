import Head from 'next/head';
import { useState, useEffect } from "react";
import { FormDataProvider } from "../../../context/FormContext";
import { FormCredLuz } from "../../../components/credluz/form";
import BaseForm from "../../../components/geral/form/BaseForm";
import PageTransicao from 'components/geral/PageTransicao';
import { AnimatePresence, motion } from "framer-motion";

export default function IndexFormCredLuz() {
    const [countProgress, setCountProgress] = useState(0);
    const [copyTitulo, setCopyTitulo] = useState([]);
    const [copyDescricao, copySetDescricao] = useState([]);
    const [copyStepCurrent, setCopyStepCurrent] = useState([]);

    const [showTransition, setShowTransition] = useState(true); // Controla a exibição da tela de transição

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTransition(false);
        }, 17000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>Empréstimo na conta de luz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <AnimatePresence mode="wait">
                {showTransition ? (
                    <motion.div
                        key="transition"
                        initial={{ opacity: 0, x: 500}}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 500 }}
                        transition={{ duration: .6, ease: "backInOut" }}
                    >
                        <PageTransicao />
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, ease: "backOut" }}
                    >
                        <BaseForm
                            stepCurrent={copyStepCurrent}
                            titulo={copyTitulo}
                            descricao={copyDescricao}
                            progress={countProgress}
                            steps={
                                <FormDataProvider>
                                    <FormCredLuz 
                                        setStepCurrent={setCopyStepCurrent}
                                        setProgressChange={setCountProgress}
                                        setTitulo={setCopyTitulo} 
                                        setDescricao={copySetDescricao}
                                    />
                                </FormDataProvider>
                            }
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
