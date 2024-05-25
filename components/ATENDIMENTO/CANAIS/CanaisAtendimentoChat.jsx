import Image from "next/image"
import { PiHeadsetFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import tw from "tailwind-styled-components";

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
    active:bg-blue-900
    hover:bg-blue-700
    hover:scale-105
    active:scale-90 
    duration-150 
`

export default function SectionAtendimento() {

    return (
        <section className="bg-slate-200 pt-8 pb-24 lg:px-56 px-4">
            <div className="">
                <h1 className="text-slate-400 text-center text-3xl tracking-tighter font-semibold">Atendimento Online via Chat</h1>
                <p className="text-slate-400 text-center tracking-tight font-light">Fale com seu APP de mensagens favorito!</p>
            </div>
            <div className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 gap-y-3">
                    
                    <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                        <div className="text-sky-500 mb-5">
                            <RiMessengerFill className="text-5xl"/>
                            <h4 className="font-semibold tracking-tight text-2xl">Messenger</h4>
                        </div>
                        <div className="text-slate-400">
                            
                            <Btn>Iniciar Atendimento</Btn>
                            <p className="font-extralight mt-3">Fale com a gente pelo Messenger</p>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                        <div className="text-sky-500 mb-5">
                            <AiOutlineWhatsApp className="text-5xl"/>
                            <h4 className="font-semibold tracking-tight text-2xl">WhatsApp</h4>
                        </div>
                        <div className="text-slate-400">
                            
                            <Btn>Iniciar Atendimento</Btn>
                            <p className="font-extralight mt-3">Fale com a gente pelo WhatsApp</p>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                        <div className="text-sky-500 mb-5">
                            <FaInstagram className="text-5xl"/>
                            <h4 className="font-semibold tracking-tight text-2xl">Direct</h4>
                        </div>
                        <div className="text-slate-400">
                            
                            <Btn>Iniciar Atendimento</Btn>
                            <p className="font-extralight mt-3">Fale com a gente pelo Direct</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}