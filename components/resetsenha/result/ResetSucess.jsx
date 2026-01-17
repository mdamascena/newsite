import React from "react"
import Lottie from "lottie-react"
import { motion, AnimatePresence } from "framer-motion"
import CheckOK from "../../../public/img/check_ok.json"

export default function ResetSucess({ show, animation }) {
  
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center">

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="">

                        <h1 className="text-blue-500 font-semibold text-3xl lg:text-2xl text-center tracking-tight">
                            PRONTO
                        </h1>

                        <h1 className="text-blue-500 lg:text-xl text-lg text-center tracking-tight">
                            Sua senha foi alterada com sucesso!
                        </h1>

                        <Lottie className="lg:w-48 w-40 mx-auto" animationData={CheckOK} loop={false} speed={0.5} />

                        <div className="text-slate-400 font-normal text-center tracking-tight text-sm lg:text-lg">
                            Em alguns segundos esta página será fechada e você poderá acessar com a nova senha.
                        </div>
                    </motion.div>
                    
                </motion.div>
            )}
        </AnimatePresence>
    );
}


