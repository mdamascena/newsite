import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlickeringGrid from "../components/ui/flickering-grid";
import AnimatedCircularProgressBar from "../components/ui/animated-circular-progress-bar";
import Fuguete from "../components/ANIMACOES/Fuguete";

const messages = [
    "Olá!",
    "Estamos ajustando os últimos detalhes",
    "Em instantes, você será redirecionado para o próximo passo",
    "Aguarde só um momento...",
];

export default function Page() {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [value, setValue] = useState(0);

  // Ciclo para alternar mensagens
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 3000); // Tempo para alternar entre mensagens
        return () => clearInterval(interval);
    }, []);

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
        <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={5}
            gridGap={3}
            color="#010797"
            maxOpacity={0.4}
            flickerChance={0.5}
        />

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Animação de Mensagens */}
        <div className="text-white text-5xl h-20 flex items-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentMessage}
                    initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ x: 50, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.8 }}
                    className="absolute"
                    >
                    {messages[currentMessage]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Barra Circular */}
        <div className="mt-10">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            className={"text-white text-3xl w-24"}
            gaugePrimaryColor="#01054d"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          />
        </div>

        {/* Animação Extra */}
        <div className="duration-100 mt-5">
          <Fuguete />
        </div>
      </div>
    </div>
  );
}
