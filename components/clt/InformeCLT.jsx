"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiUsersThreeLight } from "react-icons/pi";
import { PiTrendDown } from "react-icons/pi";

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

const TWEEN_FACTOR_BASE = 0.75;
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

export default function InformeCLT() {
    const tweenFactor = useRef(0);
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

    const setTweenFactor = useCallback((api) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback((api, eventName) => {
        const engine = api.internalEngine();
        const scrollProgress = api.scrollProgress();
        const slidesInView = api.slidesInView();
        const isScrollEvent = eventName === "scroll";

        api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            const diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                const opacity = numberWithinRange(tweenValue, 0.22, 1);
                api.slideNodes()[slideIndex].style.opacity = opacity.toString();
            });
        });
    }, []);

    const onSelect = useCallback((api) => {
        setSelectedIndex(api.selectedScrollSnap());
        setPrevBtnEnabled(api.canScrollPrev());
        setNextBtnEnabled(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        setTweenFactor(emblaApi);
        tweenOpacity(emblaApi);
        onSelect(emblaApi);

        emblaApi
            .on("reInit", setTweenFactor)
            .on("reInit", tweenOpacity)
            .on("scroll", tweenOpacity)
            .on("slideFocus", tweenOpacity)
            .on("select", onSelect)
            .on("reInit", onSelect);

        return () => {
            emblaApi
                .off("reInit", setTweenFactor)
                .off("reInit", tweenOpacity)
                .off("scroll", tweenOpacity)
                .off("slideFocus", tweenOpacity)
                .off("select", onSelect)
                .off("reInit", onSelect);
        };
    }, [emblaApi, onSelect, setTweenFactor, tweenOpacity]);

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
        <section className="pb-44 bg-slate-100">
            <div className="container-custom">
                <div className="lg:grid grid-cols-4 gap-3 hidden">
                    <div className="col-span-2 grid gap-y-3">
                        <div className="rounded-2xl h-62 w-full bg-[url('/img/bg-clt-notebook.jpg')] bg-cover bg-center" />

                        <div className="rounded-2xl h-62 w-full bg-blue-700 overflow-hidden">
                            <PiUsersThreeLight className="text-white text-5xl ml-5 my-5 rounded-full p-2 bg-white/20" />
                            <div className="text-white p-5">
                                <p className="text-blue-400 text-2xl mb-2">+ Acessibilidade</p>
                                <p className="font-extralight">
                                    Disponível para qualquer trabalhador CLT, com possibilidade mesmo estando negativado
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 grid gap-y-3">
                        <div className="rounded-2xl h-62 w-full bg-slate-800">
                            <PiTrendDown className="text-white text-5xl ml-5 my-5 rounded-full p-2 bg-white/20" />
                            <div className="text-white p-5">
                                <p className="text-slate-400 text-2xl mb-2">% Menos juros</p>
                                <p className="font-extralight">
                                    Muito mais baixo por ser descontado direto do seu salário
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl h-62 w-full bg-[url('/img/perso_jap.jpg')] bg-cover bg-center" />
                    </div>

                    <div className="col-span-1 rounded-2xl h-full w-full bg-[url('/img/perso_s.png')] bg-cover bg-center" />
                </div>
            </div>

            <div className="lg:hidden">
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {mobileCards.map((card, index) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        className="min-w-0 flex-[0_0_86%] px-2 transition-opacity duration-200"
                                        key={`${card.type}-${index}`}
                                    >
                                        {card.type === "image" ? (
                                            <div
                                                aria-label={card.label}
                                                className={`h-62 w-full rounded-2xl ${card.className}`}
                                                role="img"
                                            />
                                        ) : (
                                            <div className={`h-62 w-full rounded-2xl p-5 ${card.className}`}>
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
                                        )}
                                    </div>
                                );
                            })}
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
        </section>
    );
}
