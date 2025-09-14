import React from "react"
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from "lottie-react"
import Falha from "../../../public/img/failed.json"


export default function CadSucess({setShowLogin}) {

    const handleResetClick = () => {
        setShowLogin(false);
    };
  
    return (
        <AnimatePresence>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative flex flex-col min-h-[320px]">

                {/* Título centralizado no topo */}
                <h1 className="text-red-500 text-center lg:text-2xl text-xl font-semibold tracking-tight">
                    Falha no envio do link
                </h1>

                {/* Ícone animado no canto superior direito */}
                <div className="absolute -top-7 right-2">
                    <Lottie animationData={Falha} loop={false} />
                </div>

                <div className="mt-auto text-red-500 mb-2 bg-red-200 rounded-lg p-3 items-center shadow-sm text-center">
                    <p className="font-light text-sm">
                        Não foi possível enviar o link. Por favor, tente novamente.
                    </p>
                </div>
            </motion.div>

        </AnimatePresence>
    );
}
