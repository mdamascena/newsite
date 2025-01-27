import { motion } from "framer-motion"
import Image from "next/image"
import avatar from "../../../public/img/avatar_evaldo.png"

export default function Slide() {
    return (
        <div className="overflow-hidden bg-gray-100 py-16 lg:py-28">
            <div className="relative">
                <motion.div
                    className="flex"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        duration: 15, // Ajuste a duração para alterar a velocidade
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Primeiro item - Texto */}
                    <div className="flex min-w-[480px] items-center justify-center rounded-xl bg-blue-700 saturate-200 px-4">
                        <span className="font-bold text-white">
                            Sua vida mais tranquila
                        </span>
                    </div>

                    {/* Segundo item - Imagem */}
                    <div className="flex w-full h-[120px] items-center justify-center overflow-hidden rounded-xl bg-white shadow">
                        <Image
                            src="/img/avatar_fernanda.png"
                            alt="Avatar Fernanda"
                            width={120}
                            height={120}
                            className="object-cover"
                        />
                    </div>

                    {/* Terceiro item - Imagem */}
                    <div className="flex w-full h-[120px] items-center justify-center overflow-hidden rounded-xl bg-white shadow">
                        <Image
                            src="/img/avatar_evaldo.png"
                            alt="Avatar Evaldo"
                            width={120}
                            height={120}
                            className="object-cover"
                        />
                    </div>

                    {/* Quarto item - Texto */}
                    <div className="flex min-w-[480px] items-center justify-center rounded-xl bg-blue-700 saturate-100 px-4">
                        <span className="font-bold text-white">
                            Financeiro descomplicado
                        </span>
                    </div>

                    {/* Quinto item - Imagem */}
                    <div className="flex w-full h-[120px] items-center justify-center overflow-hidden rounded-xl bg-white shadow">
                        <Image
                            src={avatar}
                            alt="Avatar José"
                            width={120}
                            height={120}
                            className="object-cover"
                        />
                    </div>

                    

                    
                </motion.div>
            </div>
        </div>
    );
}
