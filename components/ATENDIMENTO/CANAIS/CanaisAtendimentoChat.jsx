import Image from "next/image"
import { PiHeadsetFill } from "react-icons/pi"
import { IoMail } from "react-icons/io5"
import { RiMessengerFill } from "react-icons/ri"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa6"
import Link from "next/link"
import tw from "tailwind-styled-components"

const Btn = tw.button`
    text-sm 
    border 
    border-sky-500 
    rounded-md 
    p-2 
    text-sky-500 
    hover:bg-sky-500 
    active:bg-sky-700 
    hover:text-white 
    active:bg-sky-600
    hover:bg-sky-500
    hover:scale-105
    active:scale-90 
    duration-150 
`
export default function SectionAtendimento() {

    return (
        <section className="bg-slate-200">

            <div className="lg:max-w-[1265px] lg:mx-auto max-w-[380px] mx-4 py-[10vh] grid">
                <div className="content-center">
                    <div className="">
                        <h1 className="text-slate-400 text-center text-3xl tracking-tighter font-semibold">Atendimento Online via Chat</h1>
                        <p className="text-slate-400 text-center tracking-tight font-light">Fale com seu APP de mensagens favorito!</p>
                    </div>

                    <div className="mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 gap-y-3">
                            
                            <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                                <div className="text-sky-500 mb-5">
                                    <RiMessengerFill className="text-5xl"/>
                                    <h4 className="font-semibold tracking-tight text-2xl flex items-center">
                                        Messenger
                                        <span className="py-1 px-2 ml-2 rounded-md bg-slate-400 font-normal text-white text-xs">
                                            Off Line
                                        </span>
                                    </h4>
                                </div>
                                <div className="text-slate-400">
                                    
                                    <Btn>Iniciar Atendimento</Btn>
                                    <p className="font-extralight mt-3">Fale com a gente pelo Messenger</p>
                                </div>
                            </div>

                            <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                                <div className="text-sky-500 mb-5">
                                    <AiOutlineWhatsApp className="text-5xl"/>
                                    <h4 className="font-semibold tracking-tight text-2xl flex items-center">
                                        WhatsApp 
                                        <span className="relative py-1 pl-2 pr-4 text-start ml-2 rounded-md bg-green-500 font-normal text-white text-xs">
                                            <span className="animate-ping absolute inline-flex p-2 rounded-full bg-green-200 right-0 top-0"/>
                                            <span className="absolute inline-flex p-1 rounded-full bg-white right-1 top-1"/>
                                            On Line
                                        </span>
                                    </h4>
                                </div>
                                <div className="text-slate-400">
                                    
                                    <Btn>Iniciar Atendimento</Btn>
                                    <p className="font-extralight mt-3">Fale com a gente pelo WhatsApp</p>
                                </div>
                            </div>

                            <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                                <div className="text-sky-500 mb-5">
                                    <FaInstagram className="text-5xl"/>
                                    <h4 className="font-semibold tracking-tight text-2xl flex items-center">
                                        Direct 
                                        <span className="py-1 px-2 ml-2 rounded-md bg-slate-400 font-normal text-white text-xs">
                                            Off Line
                                        </span>
                                    </h4>
                                </div>
                                <div className="text-slate-400">
                                    <Btn >Iniciar Atendimento</Btn>
                                    <p className="font-extralight mt-3">Fale com a gente pelo Direct</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}