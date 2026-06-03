import { useRef } from "react";
import { PiUsersThreeLight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";

const cardMotion = {
    hidden: (direction) => ({
        opacity: 0,
        rotate: direction === "left" ? -12 : direction === "right" ? 12 : 0,
        x: direction === "left" ? -48 : direction === "right" ? 48 : 0,
        y: direction === "top" ? -48 : direction === "bottom" ? 48 : 0,
        scale: 0.96,
    }),
    visible: {
        opacity: 1,
        rotate: 0,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const containerMotion = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

export default function InformeCLT() {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, amount: 0.45 });

    return (
        <section className="py-44" ref={sectionRef}>
            <div className="container-custom">
                <motion.div
                    variants={containerMotion}
                    initial="hidden"
                    animate={isSectionInView ? "visible" : "hidden"}
                    className="grid grid-cols-4 gap-3">

                    <div className="col-span-2 grid gap-y-3">
                        <motion.div
                            custom="left"
                            variants={cardMotion}
                            className="rounded-2xl h-62 w-full bg-[url('/img/bg-clt-notebook.jpg')] bg-cover bg-center"
                        />

                        <motion.div
                            custom="bottom"
                            variants={cardMotion}
                            className="rounded-2xl h-62 w-full bg-blue-700 overflow-hidden">
                            
                            <PiUsersThreeLight className="text-white text-5xl ml-5 mt-5 rounded-full p-2 bg-white/20" />
                            <p className="text-white text-2xl ml-5 mt-5">+10.000 clientes</p>
                        </motion.div>
                    </div>

                    <div className="col-span-1 grid gap-y-3">
                        <motion.div
                            custom="top"
                            variants={cardMotion}
                            className="rounded-2xl h-62 w-full bg-slate-800"
                        />

                        <motion.div
                            custom="right"
                            variants={cardMotion}
                            className="rounded-2xl h-62 w-full bg-[url('/img/perso_jap.jpg')] bg-cover bg-center"
                        />
                    </div>

                    <motion.div
                        custom="right"
                        variants={cardMotion}
                        className="col-span-1 rounded-2xl h-full w-full bg-[url('/img/perso_s.png')] bg-cover bg-center"
                    />
                </motion.div>
            </div>
        </section>
    );
}