import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import FlickeringGrid from "../ui/flickering-grid"
import AnimatedCircularProgressBar from "../ui/animated-circular-progress-bar"
import LogoValoreal from '../../public/img/LOGO_FULL_BRANCO.png'

const messages = [
    { text: "Perfeito!", duration: 1000 },
    { text: "Aguarde só um momento, estamos preparando tudo para você", duration: 8000 },
    { text: "Quase lá...", duration: 5000 },
    { text: "Pronto, partiu!", duration: 1000000000 },
];

export default function Page() {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [value, setValue] = useState(0);

    // Controlar a troca de mensagens
    useEffect(() => {
        if (currentMessage < messages.length) {
            const timeout = setTimeout(() => {
                setCurrentMessage((prev) => prev + 1);
            }, messages[currentMessage]?.duration);
            return () => clearTimeout(timeout);
        } else {
            setIsCompleted(true); // Marca a conclusão após a última mensagem
        }
    }, [currentMessage]);

    // Atualizar barra circular
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
        <div className="h-[100vh] w-[100vw] bgPage">
            {/* Fundo com grade de efeito */}
            <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={15}
                gridGap={3}
                color="#010797"
                maxOpacity={0.4}
                flickerChance={0.5}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center">

                <motion.div 
                    animate={{scale: [1, 1.1, 1], }} 
                    transition={{
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                    }}
                    >
                    <Image className="" src={LogoValoreal} width={170} alt="" />
                </motion.div>

                {/* Barra Circular */}
                <div className="mb-2">
                    <AnimatedCircularProgressBar
                        max={100}
                        min={0}
                        value={value}
                        className={"text-white text-3xl w-28"}
                        gaugePrimaryColor="#0a5adb"
                        gaugeSecondaryColor="#00000044"
                    />
                </div>
                
                {/* Animação das Mensagens */}
                <div className="text-white flex items-center justify-center lg:text-2xl text-xl">
                    <AnimatePresence mode="wait">
                        {currentMessage < messages.length && (
                            <motion.span
                                key={currentMessage}
                                initial={{y: -20, opacity: 0, filter: "blur(10px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.8 }}
                                className="absolute text-center">
                                {messages[currentMessage]?.text}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                
            </div>
        </div>
    );
}
