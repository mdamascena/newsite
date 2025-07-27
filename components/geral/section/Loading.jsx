import React from "react"
import Lottie from "lottie-react"
import { motion, AnimatePresence } from "framer-motion"
import Load from "../../../public/img/loader.json"

export default function Loading({ show }) {
  
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <Lottie className="lg:w-44 w-28" animationData={Load} loop={true} speed={1} />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}


