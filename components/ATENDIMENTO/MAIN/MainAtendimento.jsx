import Image from "next/image"
import SectionCanais from '../CANAIS/CanaisAtendimento'
import SectionChat from '../CANAIS/CanaisAtendimentoChat'
import { PiHeadsetFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

export default function MainAtendimento() {

    return (
        <main>
            <section className="bgMainAtendimento overflow-y-hidden lg:bg-fixed">
                <div className='lg:h-[100vh] lg:max-w-[1265px] max-w-[380px] lg:mx-auto mx-4 grid'>
                    <div className="text-center pt-44 pb-36 px-5 content-center">
                        <h1 className="text-3xl lg:text-5xl text-yellow-400 tracking-tighter font-semibold">Quer falar com a gente?</h1>
                        <h2 className="text-2xl text-white tracking-tight">Fale com um dos nossos Consultores Especializados</h2>
                        <div className="flex justify-center items-center text-yellow-400 py-7 gap-x-2 text-5xl">
                            <PiHeadsetFill/>
                            <IoMail/>
                            <RiMessengerFill/>
                            <AiOutlineWhatsApp/>
                            <FaInstagram/>
                        </div>
                        <p className="text-white">Nossos consultores estão ONLINE de segunda à sexta, das 09h às 18h, com excessão aos feriados.</p>
                    </div>
                </div>
            </section>
            <SectionCanais/>
            <SectionChat/>
        </main>
    )
}