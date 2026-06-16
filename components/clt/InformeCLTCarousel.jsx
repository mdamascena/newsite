"use client";

import { PiTrendDown, PiUsersThreeLight } from "react-icons/pi";
import SliderY from "../ui/sliderY";
import { IoDocumentTextOutline } from "react-icons/io5";

const mobileCards = [
    {
        type: "image",
        classIcon:"bg-amber-300/50 text-white",
        icon: IoDocumentTextOutline,
        title:"$ Descontato em folha",
        titleClassName:"text-white top-32 left-5",
        className: "bg-[url('/img/bg-clt-notebook.jpg')] bg-cover bg-center",
        label: "Notebook com proposta CLT",
    },
    {
        type: "content",
        className: "bg-blue-700",
        icon: PiUsersThreeLight,
        title: "+ Acessibilidade",
        titleClassName: "text-blue-400",
        description:
            "Disponível para qualquer trabalhador CLT, com possibilidade mesmo estando negativado",
    },
    {
        type: "content",
        className: "bg-slate-800",
        icon: PiTrendDown,
        title: "% Menos juros",
        titleClassName: "text-slate-400",
        description:
            "Muito mais baixo por ser descontado direto do seu salário",
    },
    {
        type: "image",
        className: "bg-[url('/img/perso_jap.jpg')] bg-cover bg-center",
        label: "Cliente usando celular",
    },
    {
        type: "",
        className: "",
        label: "",
    }
    
];

export default function InformeCLTCarousel() {
    return (
        <SliderY
            cardHeight="h-62"
            gap={16}
            stackOffset={18}
            topOffset={92}
        >
            {mobileCards.map((card, index) => (
                <div
                    className="h-full overflow-hidden rounded-2xl"
                    key={`${card.type}-${index}`}
                >
                    <MobileCard card={card} />
                </div>
            ))}
        </SliderY>
    );
}

function MobileCard({ card }) {
    const Icon = card.icon;

    if (card.type === "image") {
        return (
            <div aria-label={card.label} className={`relative h-full w-full ${card.className}`} role="img">
                {Icon && (
                    <Icon className={`absolute text-5xl ml-5 top-5 rounded-full p-2 ${card.classIcon}`} />
                )}
                <div className="text-white relative">
                    <p className={`text-2xl absolute ${card.titleClassName}`}>
                        {card.title}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={`h-full w-full p-5 ${card.className}`}>
            {Icon && (
                <Icon className="mb-8 rounded-full bg-white/20 p-2 text-5xl text-white" />
            )}
            <div className="text-white">
                <p className={`mb-2 text-2xl ${card.titleClassName}`}>
                    {card.title}
                </p>
                <p className="font-extralight">
                    {card.description}
                </p>
            </div>
        </div>
    );
}
