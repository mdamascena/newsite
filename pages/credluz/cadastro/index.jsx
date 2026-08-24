import Head from 'next/head';
import { useState } from "react";
import { FormDataProvider } from "../../../context/FormContext";
import { FormCredLuz } from "../../../components/credluz/form";
import BaseForm from "../../../components/geral/form/BaseForm";
import { AnimatePresence, motion } from "framer-motion";

export default function IndexFormCredLux() {

    const [stepInfo, setStepInfo] = useState({});

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
                        stepInfo={stepInfo}
                        steps={
                            <FormDataProvider>
                                <FormCredLuz setStepInfo={setStepInfo} />
                            </FormDataProvider>
                        }
                    />
                </motion.div>
            </AnimatePresence>

        </>
    );
}
