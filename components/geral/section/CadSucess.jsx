import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from "lottie-react"
import Sucesso from "../../../public/img/Sucess.json"
import { LiaTelegramPlane } from "react-icons/lia"


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
                <h1 className="text-blue-600 text-center lg:text-2xl text-xl font-semibold tracking-tight">
                    Link enviado com sucesso
                </h1>

                {/* Ícone animado no canto superior direito */}
                <div className="absolute -top-10 right-2">
                    <Lottie animationData={Sucesso} loop={false} />
                </div>


                <div className="mt-auto text-slate-400 mb-2 bg-white rounded-lg p-3 items-center shadow-sm text-center">
                    <p className="font-light text-sm">
                        O link chegará em instantes. Caso não seja recebido em até 1 minuto, por favor, repita o processo.
                    </p>
                    {/* <div className="bg-blue-500 rounded-lg mx-auto text-white items-center">
                        <LiaTelegramPlane className="text-5xl p-2" />
                    </div> */}
                </div>
            </motion.div>

        </AnimatePresence>


    );
}
