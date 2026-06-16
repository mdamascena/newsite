import Head from 'next/head';
import { useState } from "react";
import { FormDataProvider } from "../../../context/FormContext";
import { FormCredLuz } from "../../../components/credluz/form";
import BaseForm from "../../../components/geral/form/BaseForm";
import { AnimatePresence, motion } from "framer-motion";

export default function IndexFormCredLux() {

    const [copyTitleChart, setCopyTitleChart] = useState([]);
    const [countProgress, setCountProgress] = useState(0);
    const [copyTitulo, setCopyTitulo] = useState([]);
    const [copyDescricao, copySetDescricao] = useState([]);
    const [copyStepCurrent, setCopyStepCurrent] = useState([]);
    const [showTransition, setShowTransition] = useState(true); // Controla a exibição da tela de transição

    return (
        <>
            <Head>
                <title>Empréstimo na conta de luz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <AnimatePresence>
                <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, ease: "backOut" }}
                >
                    <BaseForm
                        copyTitleChart={copyTitleChart}
                        stepCurrent={copyStepCurrent}
                        titleText={copyTitulo}
                        descriptionText={copyDescricao}
                        progress={countProgress}
                        steps={
                            <FormDataProvider>
                                <FormCredLuz
                                    setTitleChart={setCopyTitleChart}
                                    setStepCurrent={setCopyStepCurrent}
                                    setProgressChange={setCountProgress}
                                    setTitleText={setCopyTitulo}
                                    setDescriptionText={copySetDescricao}
                                />
                            </FormDataProvider>
                        }
                    />
                </motion.div>
            </AnimatePresence>

        </>
    );
}
