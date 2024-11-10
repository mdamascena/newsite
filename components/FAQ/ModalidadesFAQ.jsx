import Link from 'next/link';
import { CardMod } from './styles';
import { RxArrowRight } from "react-icons/rx";
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { MdOutlineCake } from 'react-icons/md';
import { AiOutlineBarcode } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ModalidadesFAQ(){
    return(
        <section className='select-none'>

            <div className='container-custom'>

                <div className='hidden lg:block'>

                    <div className='grid grid-cols-3 relative bottom-24'>
                        <CardMod>
                            <div className="pt-12 pb-8 duration-300 flex items-center justify-center">
                                <RiLightbulbFlashLine className="text-5xl mr-5 text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div>
                                    <p className="text-xl font-semibold text-slate-400 group-hover:text-white">Empréstimo</p>
                                    <p className="text-lg text-slate-400 group-hover:text-white">Débito na conta de luz</p>
                                </div>
                            </div>
                            <div className='text-blue-600 group-hover:text-white mr-10 mb-2'>
                                <Link className='flex items-center justify-end' passHref href="#">
                                    Saiba mais
                                    <RxArrowRight className='ml-2 group-hover:rotate-90 duration-200'/>
                                </Link> 
                            </div>
                        </CardMod>

                        <CardMod>
                            <div className="pt-12 pb-8 duration-300 flex items-center justify-center">
                                <MdOutlineCake className="text-5xl mr-5 text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <dib>
                                    <p className="text-xl font-semibold text-slate-400 group-hover:text-white">Antecipação</p>
                                    <p className="text-lg text-slate-400 group-hover:text-white">Saque-Aniversário FGTS</p>
                                </dib>
                            </div>
                            <div className='text-blue-600 group-hover:text-white mr-10 mb-2'>
                                <Link className='flex items-center justify-end' passHref href="#">
                                    Saiba mais
                                    <RxArrowRight className='ml-2 group-hover:rotate-90 duration-200' /> 
                                </Link> 
                            </div>
                        </CardMod>

                        <CardMod>
                            <div className="pt-12 pb-8 duration-300 flex items-center justify-center">
                                <AiOutlineBarcode className="text-5xl mr-5 text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div>
                                    <p className="text-xl font-semibold text-slate-400 mr-5 group-hover:text-white">Empréstimo</p>
                                    <p className="text-lg text-slate-400 group-hover:text-white">Parcelas pagas no carnê</p>
                                </div>
                            </div>
                            <div className='text-blue-600 group-hover:text-white mr-10 mb-2'>
                                <Link className='flex items-center justify-end' passHref href="#">
                                    Saiba mais
                                    <RxArrowRight className='ml-2 group-hover:rotate-90 duration-200' /> 
                                </Link> 
                            </div>
                        </CardMod>
                    </div>

                </div>

            </div>
            
            <Carousel 
                className='relative bottom-24 lg:hidden' 
                centerMode 
                autoPlay 
                infiniteLoop
                showThumbs={false}
                showIndicators={false} 
                showStatus={false}
                >

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="text-lg text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre o empréstimo com débito na conta de energia
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                        <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                        <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre a antecipação do saque aniversário FGTS
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 text-left">
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