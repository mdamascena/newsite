import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { Poppins } from 'next/font/google';
import { RiShieldCheckLine } from 'react-icons/ri';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { MdOutlineCake } from 'react-icons/md';
import { AiOutlineBarcode } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

const CardMod = tw.div`
    group
    bg-white
    hover:bg-blue-800
    hover:scale-105 
    col-span-1
    text-white 
    hover:z-10
    p-2
    mx-2
    my-2
    shadow-lg
    shadow-blue-800/30
    duration-300
    cursor-pointer 
    flex 
    justify-center 
    items-center
    rounded-lg
`;


export default function ModalidadesFAQ(){
    return(
        <section className={mainFontFamily.className}>

            <div className='mx-4 lg:mx-44 select-none hidden lg:block'>
                <div className='grid grid-cols-3 relative bottom-24'>

                    <CardMod>
                        <div className="p-3 duration-300 poppins text-left">
                            <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                                Dúvidas sobre o empréstimo com débito na conta de energia
                            </p>
                        </div>
                    </CardMod>

                    <CardMod>
                        <div className="p-3 duration-300 poppins text-left">
                            <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                                Dúvidas sobre a antecipação do saque aniversário FGTS
                            </p>
                        </div>
                    </CardMod>

                    <CardMod>
                        <div className="p-3 duration-300 poppins text-left">
                            <AiOutlineBarcode className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Pessoal CredBoleto</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                                Dúvidas sobre o empréstimo pessoal pagamento via boletos
                            </p>
                        </div>
                    </CardMod>
                    
                </div>
            </div>

            <Carousel className='relative bottom-24 hidden' centerMode autoPlay infiniteLoop showIndicators={false} showStatus={false}>
                <CardMod>
                    <div className="p-3 duration-300 poppins text-left">
                        <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="text-lg text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre o empréstimo com débito na conta de energia
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 poppins text-left">
                        <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                        <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre a antecipação do saque aniversário FGTS
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 poppins text-left">
                        <AiOutlineBarcode className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Pessoal CredBoleto</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre o empréstimo pessoal pagamento via boletos
                        </p>
                    </div>
                </CardMod>
            </Carousel>
        </section>
    )
}