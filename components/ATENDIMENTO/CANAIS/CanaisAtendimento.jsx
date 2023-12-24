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
    duration-300
`

export default function SectionAtendimento() {

    return (
        <section className="bg-slate-100 pt-16 pb-10 lg:px-44 px-4">
            <div className="">
                <h1 className="text-slate-400 text-center text-3xl tracking-tighter font-semibold">Veja nossos canais de atendimento</h1>
                <p className="text-slate-400 text-center tracking-tight font-light">Estamos disponíveis de segunda a sexta feira, das 09h às 18h, pelos seguintes canais:</p>
            </div>
            <div className="mt-8 lg:px-32 px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 gap-y-3">
                    
                    <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                        <div className="text-sky-500 mb-5">
                            <PiHeadsetFill className="text-5xl"/>
                            <h4 className="font-semibold tracking-tight text-2xl">Central de Atendimento</h4>
                        </div>
                        <div className="text-slate-400">
                            <Link className="font-semibold text-2xl tracking-tight" href='tel:0800-878-9853'>0800 878 9853</Link>
                            <p className="font-extralight">Fale gratuitamente com nossos especialistas</p>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-xl shadow-lg p-8 bg-white">
                        <div className="text-sky-500 mb-5">
                            <IoMail className="text-5xl"/>
                            <h4 className="font-semibold tracking-tight text-2xl">Fale conosco</h4>
                        </div>
                        <div className="text-slate-400">
                            
                            <Btn>Enviar e-mail</Btn>
                            <p className="font-extralight mt-3">Envie e-mail para o nosso suporte</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
        
    )
}