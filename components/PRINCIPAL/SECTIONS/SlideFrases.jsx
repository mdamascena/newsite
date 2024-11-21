import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide() {
    const items = [
        {
            type: "text",
            content: "Sua vida mais tranquila",
            bg: "bg-brand-color-green",
            text: "text-[#475C09]",
        },
        {
            type: "image",
            src: "/path/to/image1.jpg", // Substitua pelo caminho da imagem
        },
        {
            type: "image",
            src: "/path/to/image2.jpg",
        },
        {
            type: "text",
            content: "Financeiro descomplicado",
            bg: "bg-brand-color-blue",
            text: "text-brand-color-green",
        },
        {
            type: "image",
            src: "/path/to/image3.jpg",
        },
    ];

    // Duplicar os itens para preencher a tela
    const duplicatedItems = [...items, ...items];

    return (
        <div className="w-screen overflow-hidden bg-gray-100 py-16 lg:py-28">
            <div className="relative w-screen">
                <motion.div
                    className="flex"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 15, // Ajuste a duração para alterar a velocidade
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Renderizar os itens duplicados */}
                    {duplicatedItems.map((item, index) =>
                        item.type === "text" ? (
                            <div
                                key={index}
                                className={`flex min-w-[480px] items-center justify-center rounded-xl ${item.bg} px-4`}
                            >
                                <span className={`font-bold ${item.text}`}>
                                    {item.content}
                                </span>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="flex w-full h-[120px] items-center justify-center overflow-hidden rounded-xl bg-white shadow"
                            >
                                <Image
                                    src={item.src}
                                    alt={`Item ${index}`}
                                    width={120}
                                    height={120}
                                    className="object-cover"
                                />
                            </div>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    );
}
