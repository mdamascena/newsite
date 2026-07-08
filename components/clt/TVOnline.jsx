
"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import BtnYellowG from "../geral/button/BtnYellowG.jsx";
import { LampContainer } from "../ui/lamp";

const WordRotate = dynamic(() => import("../ui/word-rotate"), { ssr: false });

const onlineTexts = [
    "Solicitação simplificada",
    "100% online",
    "Rápido é fácil",
];

export default function TVOnline(){
    return(
        <section className="select-none bgMainPrincipal!">
            <LampContainer className="min-h-155 rounded-none bgMainPrincipal lg:min-h-175">
                
                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.15,
                        duration: 0.7,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mx-auto flex max-w-4xl flex-col items-center text-center">

                    <p className="mb-4 text-xs font-semibold uppercase text-blue-200/80">
                        TV Online
                    </p>

                    <h2 className="text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
                        Crédito CLT com atendimento digital
                    </h2>

                    <div className="mt-4 min-h-19 md:min-h-24">
                        <WordRotate
                            words={onlineTexts}
                            duration={2300}
                            className="bg-linear-to-br from-blue-200 via-white to-blue-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl lg:text-6xl"
                        />
                    </div>

                    <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300 md:text-lg">
                        Simule, envie seus dados e acompanhe sua solicitação sem sair de casa.
                    </p>

                </motion.div>
            </LampContainer>
        </section>
    )
}
