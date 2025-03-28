import { useState, useEffect } from "react";
import AnimatedCircularProgressBar from "components/ui/animated-circular-progress-bar";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransicaoResposta() {

    const [currentMessage, setCurrentMessage] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [value, setValue] = useState(0);

    const messages = [
        { text: "Perfeito!", duration: 1000 },
        { text: "Aguarde só um momento, estamos analisando seus dados!", duration: 8000 },
        { text: "Quase lá...", duration: 5000 },
        { text: "Pronto, já temos uma resposta!", duration: 1000000000 },
    ]

    useEffect(() => {
        if (currentMessage < messages.length) {
            const timeout = setTimeout(() => {
                setCurrentMessage((prev) => prev + 1);
            }, messages[currentMessage]?.duration);
            return () => clearTimeout(timeout);
        } else {
            setIsCompleted(true);
        }
    }, [currentMessage]);

    useEffect(() => {
        const handleIncrement = (prev) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue(handleIncrement);
        const interval = setInterval(() => setValue(handleIncrement), 2000);
        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <div className="mb-2">
                <AnimatedCircularProgressBar
                    max={100}
                    min={0}
                    value={value}
                    className={"text-3xl w-28"}
                    gaugePrimaryColor="#0a5adb"
                    gaugeSecondaryColor="#00000044"
                />
            </div>

            {/* Animação das Mensagens */}
            <div className="flex items-center justify-center lg:text-2xl text-xl">
                <AnimatePresence mode="wait">
                    {currentMessage < messages.length && (
                        <motion.span
                            key={currentMessage}
                            initial={{ y: -20, opacity: 0, filter: "blur(10px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.8 }}
                            className="absolute text-center">
                            {messages[currentMessage]?.text}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}