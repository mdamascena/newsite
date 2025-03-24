import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageTransicaoResposta from './PageTransicaoResposta';
import { FiAlertCircle } from "react-icons/fi";

export default function ErroApi({ title, subTitle, text }) {

    const [showTransition, setShowTransition] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTransition(false);
        }, 17000);

        return () => clearTimeout(timer);
    }, []);


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
                                <FiAlertCircle />
                            </div>

                            <div>
                                {text}
                            </div>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}