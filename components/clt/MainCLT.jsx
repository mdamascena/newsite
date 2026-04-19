import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { BtnCalc } from "./styles"
import menclt from "../../public/img/PERSO_CLT.png"
import SectioAnalise from "../geral/section/Analise"
import Ripple from "../ui/ripple"
import { DotPattern } from "../ui/dot-pattern"
import { Highlighter } from "../ui/highlighter"
import { useRouter } from 'next/router'
import { IoIosAddCircle } from "react-icons/io"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import WidgetSimulador from "./widgets/WidgetSimulador.jsx"
import WidgetLimite from "./widgets/WidgetLimite.jsx"
import WidgetParcela from "./widgets/WidgetParcela.jsx"

const HERO_ITEM_STAGGER = 0.22;

const cltHeroAnimations = {
    plusIcon: {
        hidden: {
            opacity: 0,
            x: -42,
            y: -28,
            scale: 0.25,
            rotate: -110,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                delay: HERO_ITEM_STAGGER * 0,
                type: "spring",
                stiffness: 430,
                damping: 16,
                mass: 0.55,
            },
        },
    },
    simulador: {
        hidden: {
            opacity: 0,
            x: -120,
            y: 46,
            scale: 0.68,
            rotate: -11,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 0.88,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                delay: HERO_ITEM_STAGGER * 1,
                type: "spring",
                stiffness: 250,
                damping: 13,
                mass: 0.9,
            },
        },
    },
    moneyIcon: {
        hidden: {
            opacity: 0,
            x: -28,
            y: 72,
            scale: 0.2,
            rotate: 160,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                delay: HERO_ITEM_STAGGER * 2,
                type: "spring",
                stiffness: 360,
                damping: 12,
                mass: 0.7,
            },
        },
    },
    limite: {
        hidden: {
            opacity: 0,
            x: 120,
            y: 58,
            scale: 0.82,
            rotate: 8,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 0.88,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                delay: HERO_ITEM_STAGGER * 3,
                type: "spring",
                stiffness: 210,
                damping: 11,
                mass: 0.85,
            },
        },
    },
    parcela: {
        hidden: {
            opacity: 0,
            x: 88,
            y: -86,
            scale: 0.55,
            rotate: 14,
            filter: "blur(12px)",
        },
        visible: {
            opacity: 0.9,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            transition: {
                delay: HERO_ITEM_STAGGER * 4,
                type: "spring",
                stiffness: 300,
                damping: 15,
                mass: 0.8,
            },
        },
    },
};


export default function MainCLT() {

    const heroVisualRef = useRef(null);
    const showHeroDecorations = useInView(heroVisualRef, {
        amount: 0.35,
    });
    const router = useRouter();
    const handleRedirect = () => {
        router.push('credluz-fast/cadastro');
    }

    const heroDecorationState = showHeroDecorations ? "visible" : "hidden";
    const getHeroMotionProps = (animationName) => ({
        initial: "hidden",
        animate: heroDecorationState,
        variants: cltHeroAnimations[animationName],
    });

  return (
    <main>
        <section className="relative overflow-hidden bg-gradient-to-t from-slate-400 via-white to-white">
            <DotPattern
                width={8}
                height={8}
                cr={1.1}
                className="inset-auto left-0 top-0 h-[580px] w-[900px] text-blue-500/20 [mask-image:radial-gradient(ellipse_at_top_left,#000_0%,#000_30%,transparent_80%)]"
            />
      
            <div className="relative z-10 lg:pb-0 pt-20 container-custom">
                    
                <div className="grid grid-cols-1 lg:grid-cols-5">
                 
                    <div className="lg:col-span-3 lg:my-auto select-none relative">
                        
                        <h1 className="hidden lg:block text-blue-600 lg:text-[3.5rem] text-[48px] text-center lg:text-left font-semibold tracking-tighter">
                            Crédito
                            do{" "}
                            <Highlighter
                                className="-mt-20"
                                action="underline" 
                                color="#fde047" 
                                strokeWidth={3} 
                                padding={-15} 
                                iterations={5} 
                                multiline={true}
                                animationDuration={3000}>
                                Trabalhador
                            </Highlighter>
                        </h1>

                        <h1 className="lg:hidden block leading-none text-blue-600 lg:text-[3.5rem] text-[48px] text-center lg:text-left font-semibold tracking-tighter my-5">
                            Crédito
                            do{" "}
                            <Highlighter
                                className="-mt-20"
                                action="underline" 
                                color="#fde047" 
                                strokeWidth={3} 
                                padding={-3} 
                                iterations={5} 
                                multiline={true}
                                animationDuration={3000}>
                                Trabalhador
                            </Highlighter>
                        </h1>

                        <h2 className="text-blue-600 lg:text-4xl text-2xl text-center lg:text-left font-semibold tracking-tighter">
                            Consignado para{" "}
                            <Highlighter 
                                action="highlight" 
                                color="#fde047" 
                                strokeWidth={3} 
                                padding={1} 
                                iterations={5} 
                                multiline={true}
                                animationDuration={3000}>
                                CLT
                            </Highlighter>
                        </h2>

                        <p className='text-blue-600 lg:text-xl text-md mt-7 lg:mt-7 lg:pr-36 lg:text-left text-center tracking-tight'>
                            Descubra seu limite e contrate em minutos{" "}
                            <Highlighter 
                                action="circle" 
                                color="#fde047" 
                                strokeWidth={3} 
                                padding={5} 
                                iterations={2} 
                                multiline={true}
                                animationDuration={3000}
                                className="font-semibold">
                                <span className="font-semibold">100% ONLINE</span>
                            </Highlighter>
                            {" "}{" "}.<br/>Se precisar, conte com nossos consultores.
                        </p>

                        <div className="text-center md:text-left">
                            <BtnCalc>Simular agora</BtnCalc>
                        </div>

                        <div className="text-[12px] text-white mt-5 text-center lg:text-start">
                            <p>Crédito sujeito à análise *</p>
                            <p>Liberações ocorrem em dias úteis **</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:flex justify-start">

                        <div className="relative mt-2 mx-auto max-w-[560px] min-h-[520px] overflow-visible lg:hidden">
                            <Ripple
                                className="z-0 -inset-20 [mask-image:none] absolute"
                                mainCircleSize={100}
                                mainCircleOpacity={0.2}
                                numCircles={7}
                            />
                            <figure className="relative z-10 flex min-h-[520px] items-end justify-center">
                                <Image className="w-auto h-auto" width={200} src={menclt} alt="" />
                            </figure>
                        </div>

                        <div ref={heroVisualRef} className="relative overflow-visible hidden lg:block">
                            
                            <Ripple
                                className="z-0 -inset-20 [mask-image:none]"
                                mainCircleSize={260}
                                mainCircleOpacity={0.18}
                                numCircles={7}
                            />
                            
                            <motion.div {...getHeroMotionProps("plusIcon")} className="bg-white rounded-full absolute top-24 left-1 z-40">
                                <IoIosAddCircle className="text-5xl text-blue-600"/>
                            </motion.div>

                            <motion.div {...getHeroMotionProps("moneyIcon")} className="bg-white rounded-full absolute bottom-12 -left-5 z-50">
                                <RiMoneyDollarCircleFill className="text-5xl text-blue-600"/>
                            </motion.div>
                            
                            <WidgetSimulador ClassName="top-52 -left-28" motionProps={getHeroMotionProps("simulador")}/>
                            <WidgetLimite ClassName="bottom-24 -right-28" motionProps={getHeroMotionProps("limite")}/>
                            <WidgetParcela ClassName="-right-20 top-24" motionProps={getHeroMotionProps("parcela")}/>
                            
                            <figure className="relative z-10 lg:flex hidden items-end justify-center">
                                <Image className="" width={340} src={menclt} alt="" />
                            </figure>

                            <figure className="relative z-10 flex lg:hidden items-end justify-center">
                                <Image className="" width={25} src={menclt} alt="" />
                            </figure>
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>
        
        <SectioAnalise />
    </main>
  );
}
