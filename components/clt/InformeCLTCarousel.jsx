"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiTrendDown, PiUsersThreeLight } from "react-icons/pi";

const AUTOPLAY_INTERVAL = 3500;

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
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps",
        loop: false,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

    const onSelect = useCallback((api) => {
        setSelectedIndex(api.selectedScrollSnap());
        setPrevBtnEnabled(api.canScrollPrev());
        setNextBtnEnabled(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect(emblaApi);

        emblaApi
            .on("select", onSelect)
            .on("reInit", onSelect);

        return () => {
            emblaApi
                .off("select", onSelect)
                .off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = window.setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
                return;
            }

            emblaApi.scrollTo(0);
        }, AUTOPLAY_INTERVAL);

        return () => window.clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <div className="lg:hidden">
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y">
                        {mobileCards.map((card, index) => (
                            <div
                                className="min-w-0 flex-[0_0_86%] px-2"
                                key={`${card.type}-${index}`}
                            >
                                <div className="h-62 overflow-hidden rounded-2xl">
                                    <MobileCard card={card} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-4 mt-5 flex items-center justify-between">
                    <div className="flex gap-2">
                        <button
                            aria-label="Card anterior"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm disabled:opacity-40"
                            disabled={!prevBtnEnabled}
                            onClick={scrollPrev}
                            type="button"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            aria-label="Próximo card"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm disabled:opacity-40"
                            disabled={!nextBtnEnabled}
                            onClick={scrollNext}
                            type="button"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                aria-label={`Ir para o card ${index + 1}`}
                                className={`h-2.5 rounded-full transition-all duration-200 ${
                                    index === selectedIndex
                                        ? "w-6 bg-blue-700"
                                        : "w-2.5 bg-slate-300"
                                }`}
                                key={index}
                                onClick={() => scrollTo(index)}
                                type="button"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
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
