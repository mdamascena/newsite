"use client";

import { useCallback, useEffect, useState } from "react";
import { IoCardOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const AUTOPLAY_INTERVAL = 5500;

const comparativos = [
    {
        icon: IoCardOutline,
        titulo: "Cartão de crédito",
        taxaPaga: "12% a.m",
        percentualEconomia: 84,
        economiaAno: "R$ 5.000",
    },
    {
        icon: CiBank,
        titulo: "Cheque especial",
        taxaPaga: "8% a.m",
        percentualEconomia: 76,
        economiaAno: "R$ 3.000",
    },
    {
        icon: LuShoppingBag,
        titulo: "Carnê de loja",
        taxaPaga: "6% a.m",
        percentualEconomia: 68,
        economiaAno: "R$ 2.000",
    },
    {
        icon: BiMoneyWithdraw,
        titulo: "Empréstimo pessoal",
        taxaPaga: "10% a.m",
        percentualEconomia: 81,
        economiaAno: "R$ 4.000",
    },
];

function ComparativoCard({ item }) {
    const Icon = item.icon;

    return (
        <div className="col-auto bg-white rounded-xl mx-3 lg:mx-0 shadow-md">

            <div className="flex items-center bg-blue-500/20 px-5 py-3 rounded-t-lg">
                {Icon && <Icon className="p-0.5 bg-blue-500 text-white rounded-sm text-3xl mr-2"/>}
                <p className="text-blue-500 font-semibold mr-2">{item.titulo}</p>
            </div>

            <div className="flex lg:justify-between justify-around my-3 lg:my-5 px-5">
                <div className="">
                    <div className="bg-slate-100 text-slate-400 font-semibold tracking-tight p-1 rounded-md flex items-center">
                        <p className="text-xl">{item.taxaPaga}</p> 
                        <GoArrowUp className="ml-1 text-xl"/>
                    </div>
                </div>
                
                <div className="">
                    <div className="bg-blue-100 text-blue-500 font-semibold tracking-tight p-1 rounded-md flex items-center">
                        <p className="text-xl">1.9% a.m</p> 
                        <GoArrowDown className="ml-1 text-xl"/>
                    </div>
                    <p className="text-[10px] text-blue-500">
                        Com consignado CLT
                    </p>
                </div>
            </div>

            <div className="border-b border-slate-200"/>

            <div className="px-5 mt-2">
                <span className="text-3xl lg:text-xl font-semibold text-slate-400 tracking-tight">{item.percentualEconomia}%</span> <span className="text-slate-400">a menos</span>
                <div className="w-full h-5 rounded-sm bg-slate-200 flex items-center">
                    <div
                        className="h-5 bg-blue-500 rounded-l-sm text-xl text-white items-center pl-2 flex"
                        style={{ width: `${item.percentualEconomia}%` }}
                    />
                </div>
            </div>

            <div className="px-5 text-slate-400 text-sm mt-1 mb-0.5 pb-5">
                <p className="">economia até <span className="text-md font-semibold tracking-tight">{item.economiaAno}</span> por ano</p>
            </div>
            
        </div>
    );
}

function ComparativoMobileCarousel() {
    const [api, setApi] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback((index) => api?.scrollTo(index), [api]);

    const onSelect = useCallback((carouselApi) => {
        setSelectedIndex(carouselApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!api) return;

        setScrollSnaps(api.scrollSnapList());
        onSelect(api);

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api, onSelect]);

    useEffect(() => {
        if (!api) return;

        const autoplay = window.setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
                return;
            }

            api.scrollTo(0);
        }, AUTOPLAY_INTERVAL);

        return () => window.clearInterval(autoplay);
    }, [api]);

    return (
        <Carousel
            className="relative z-10 -mt-12"
            opts={{
                align: "center",
                containScroll: "trimSnaps",
                loop: false,
            }}
            setApi={setApi}
        >
            <CarouselContent className="ml-0">
                {comparativos.map((item) => (
                    <CarouselItem className="basis-full pl-0" key={item.titulo}>
                        <ComparativoCard item={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                    <CarouselPrevious className="static h-9 w-9 translate-y-0 border-slate-200 bg-white text-slate-500 shadow-sm" />
                    <CarouselNext className="static h-9 w-9 translate-y-0 border-slate-200 bg-white text-slate-500 shadow-sm" />
                </div>

                <div className="flex items-center gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            aria-label={`Ir para o comparativo ${index + 1}`}
                            className={`h-3 w-3 rounded-full border transition-colors ${
                                index === selectedIndex
                                    ? "border-blue-500 bg-white"
                                    : "border-slate-300 bg-slate-100"
                            }`}
                            key={index}
                            onClick={() => scrollTo(index)}
                            type="button"
                        />
                    ))}
                </div>
            </div>
        </Carousel>
    );
}

export default function ComparativoCLT () {
    return(
        <section className="bg-slate-100 lg:pt-36 pt-16 lg:pb-36 pb-16">
            <div className="container-custom">
                <div className="lg:hidden">
                    <div className="mb-6 text-start">
                        <p className="lg:text-sm text-2xl lg:font-normal font-semibold tracking-tight text-slate-400 mb-2">
                            Comparativo de taxa
                        </p>

                        <h2 className="text-md tracking-tight text-slate-400 lg:hidden">
                            Troque dívidas caras por um consignado a partir de <span className="text-lg">1,90% a.m</span>
                        </h2>

                        <h2 className="text-3xl font-semibold tracking-tight text-slate-400 lg:block hidden">
                            Veja quanto você pode economizar
                        </h2>
                    </div>

                    <div className="relative h-80 w-full overflow-hidden rounded-xl bg-[url('/img/perso_comp_clt.png')] bg-cover bg-end">
                        <div className="absolute inset-0 bg-linear-to-br from-black via-black/10 to-transparent" />

                        <h1 className="relative z-10 px-5 pt-3 text-2xl font-semibold text-white">
                            Veja quanto você pode economizar
                        </h1>
                    </div>

                    <ComparativoMobileCarousel />
                </div>

                <div className="hidden lg:grid grid-cols-4 gap-4">

                    <div className="col-span-2 relative h-full w-full overflow-hidden rounded-xl bg-[url('/img/perso_comp_clt.png')] bg-cover bg-end">
                        <div className="absolute inset-0 bg-linear-to-br from-black via-black/10 to-transparent" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent backdrop-blur-[1.5px] mask-[linear-gradient(to_top,black_0%,black_35%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_75%)]" />

                        <h1 className="relative z-10 p-12 mr-5 text-4xl font-semibold text-white">
                            Economize com crédito mais barato
                        </h1>
                        <h2 className="absolute bottom-0 left-0 right-0 z-10 p-12 text-2xl font-semibold text-white">
                            Troque dívidas caras por um consignado a partir de <span className="text-3xl">1,90% a.m</span>
                            {/* Pague menos juros: troque dívidas com juros mais alto por um crédito mais barato. */}
                        </h2> 
                    </div>
                    
                    <div className="col-span-2">
                        
                        <div className="grid grid-cols-2 gap-4">
                            {comparativos.map((item) => (
                                <ComparativoCard key={item.titulo} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
