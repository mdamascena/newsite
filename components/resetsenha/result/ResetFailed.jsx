"use client"
import React from "react"
import Lottie from "lottie-react"
import { motion, AnimatePresence } from "framer-motion"
import Failed from "../../../public/img/failed.json"

export default function ResetFailed({show, animation}) {
  
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

                        <h1 className="text-red-500 font-semibold text-3xl lg:text-2xl text-center tracking-tight">
                            FALHOU
                        </h1>

                        <h1 className="text-red-500 lg:text-xl text-lg text-center tracking-tight">
                            Não foi possível alterar sua senha no momento
                        </h1>

                        <Lottie className="lg:w-48 w-40 mx-auto" animationData={Failed} loop={false} speed={0.5} />

                        <div className="text-slate-400 font-normal text-center tracking-tight text-sm lg:text-lg">
                            Esta página será fechada automaticamente e você poderá tentar novamente em instantes.
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}