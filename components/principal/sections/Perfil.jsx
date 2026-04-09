import { CiBank } from "react-icons/ci";
import { motion } from "framer-motion";
import TextAnimate from "../../ui/text-animate";

export default function Perfil() {
    return (
        <section className="h-[80vh] bgSectionPrincipal overflow-y-hidden bg-fixed relative">
            
            <div id="notif"
                className="absolute z-10 w-[min(14rem,calc(100vw-2rem))] left-1/2 -translate-x-1/2 bottom-[20%] lg:left-[43%]">

                <motion.div
                    className="bg-white p-2 rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.65, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{  delay: 2.0, ease: [0.30, 1, 0.50, 2] }}>

                    <div className="flex items-center justify-between rounded-lg">
                        <div className="flex items-center">
                            <CiBank className="text-white text-2xl p-1 bg-blue-700 rounded-md" />
                            <p className="text-slate-400 ml-1 tracking-tight text-sm">
                                Banco
                            </p>
                        </div>

                        <div>
                            <p className="font-light tracking-tight text-md">
                                PIX Recebido
                            </p>
                        </div>
                    </div>

                    <div className="text-black flex items-center justify-between">
                        <p className="tracking-tighter m-0 text-justify text-sm">
                            Você recebeu
                        </p>
                        <span className="text-md font-bold ml-2">R$ 15.053,00</span>
                    </div>
                </motion.div>
            </div>

            <div id="sorriso" className="container-custom">
                <div className="grid grid-cols-2 lg:mt-44 mt-56">
                    <div className="lg:col-span-1 col-span-2 text-white flex mt-20 lg:mt-0 items-start justify-center h-[80vh]">
                        <div className="block">
                            
                            <TextAnimate
                                as="h1"
                                className="text-4xl lg:text-5xl font-semibold"
                                animation="blurInUp"
                                
                                by="character"
                                amount={0.80}
                                once={false}
                                delay={0.2}
                            >
                                Sorriso😁 no rosto
                            </TextAnimate>

                            <TextAnimate
                                as="h1"
                                className="text-xl lg:text-4xl font-normal lg:mt-3"
                                animation="slideLeft"
                                by="character"
                                
                                amount={0.80}
                                once={false}
                                delay={0.65}
                            >
                                de quem recebeu um PIX
                            </TextAnimate>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
