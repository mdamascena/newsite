"use client";

import { PiTrendDown, PiUsersThreeLight } from "react-icons/pi";
import SliderY from "../ui/sliderY";

const mobileCards = [
    {
        type: "image",
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
];

export default function InformeCLTCarousel() {
    return (
        <SliderY
            cardHeight="h-62"
            endSpace="pb-[28vh]"
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
            <div
                aria-label={card.label}
                className={`h-full w-full ${card.className}`}
                role="img"
            />
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
