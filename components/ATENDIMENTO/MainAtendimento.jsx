import SectionCanais from './canais/CanaisAtendimento'
import SectionChat from './canais/CanaisAtendimentoChat'
import { PiHeadsetFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

export default function MainAtendimento() {

    return (
        <main>
            <section className="bgMainAtendimento lg:h-[70vh] h-[80vh]">
                <div className='container-custom grid grid-cols-2 h-full'>
                    <div className='lg:col-span-1 col-span-2 mb-72 lg:mb-0'/>
                    <div className="text-center lg:px-8 lg:col-span-1 col-span-2 my-auto backdrop-blur-md lg:mx-8 lg:p-5 p-3 bg-white/10 rounded-xl">
                        <h1 className="text-3xl lg:text-5xl text-yellow-400 tracking-tight lg:mb-2 font-semibold">
                            Precisando de ajuda?
                        </h1>
                        <h2 className="lg:text-xl text-md text-white tracking-tight lg:mb-5">
                            Fale com um dos nossos Consultores Especializados
                        </h2>
                        <div className="flex justify-around items-center text-white lg:text-3xl text-2xl bg-white/10 p-3 rounded-md">
                            <PiHeadsetFill/>
                            <IoMail/>
                            <RiMessengerFill/>
                            <AiOutlineWhatsApp/>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
            </section>
            <SectionCanais/>
            <SectionChat/>
        </main>
    )
}