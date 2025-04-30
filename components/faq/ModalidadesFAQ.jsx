import { CardMod } from './styles'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { MdOutlineCake } from 'react-icons/md'
import { SiPix } from "react-icons/si"
import { FaUserTie } from "react-icons/fa6";
import { HiOutlineBanknotes } from "react-icons/hi2"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function ModalidadesFAQ(){
    return(
        <section className='select-none'>

            <div className='container-custom'>

                <div className='hidden lg:block'>

                    <div className='grid grid-cols-5 gap-2 relative bottom-24'>
                        <CardMod>
                            <div className="duration-300 grid grid-cols-4 w-[100%] justify-items-center">
                                <MdOutlineCake className="col-span-4 mb-3 text-5xl text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div className='col-span-4 text-center'>
                                    <p className="text-lg font-semibold text-slate-400 group-hover:text-white">Antecipação</p>
                                    <p className="text-sm text-slate-400 group-hover:text-white">Saque-Aniversário FGTS</p>
                                </div>
                            </div>
                        </CardMod>

                        <CardMod>
                            <div className="duration-300 grid grid-cols-4 w-[100%] justify-items-center">
                                <HiOutlineBanknotes className="col-span-4 mb-3 text-5xl text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div className='col-span-4 text-center'>
                                    <p className="text-lg font-semibold text-slate-400 group-hover:text-white">Empréstimo</p>
                                    <p className="text-sm text-slate-400 group-hover:text-white">Consignado INSS/LOAS</p>
                                </div>
                            </div>
                        </CardMod>

                        <CardMod>
                            <div className="duration-300 grid grid-cols-4 w-[100%] justify-items-center">
                                <FaUserTie className="col-span-4 mb-3 text-5xl text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div className='col-span-4 text-center'>
                                    <p className="text-lg font-semibold text-slate-400 group-hover:text-white">Empréstimo</p>
                                    <p className="text-sm text-slate-400 group-hover:text-white">Consignado CLT</p>
                                </div>
                            </div>
                        </CardMod>

                        <CardMod>
                            <div className="duration-300 grid grid-cols-4 w-[100%] justify-items-center">
                                <RiLightbulbFlashLine className="col-span-4 mb-3 text-5xl text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div className='col-span-4 text-center'>
                                    <p className="text-lg font-semibold text-slate-400 group-hover:text-white">Empréstimo</p>
                                    <p className="text-sm text-slate-400 group-hover:text-white">Débito na conta de luz</p>
                                </div>
                            </div>
                        </CardMod>

                        <CardMod>
                            <div className="duration-300 grid grid-cols-4 w-[100%] justify-items-center">
                                <SiPix className="col-span-4 mb-3 text-5xl text-blue-600 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <div className='col-span-4 text-center'>
                                    <p className="text-lg font-semibold text-slate-400 group-hover:text-white">Pix Parcelado</p>
                                    <p className="text-sm text-slate-400 group-hover:text-white">No cartão de crédito</p>
                                </div>
                            </div>
                        </CardMod>
                    </div>

                </div>

            </div>
            
            <Carousel 
                className='relative bottom-32 py-5 lg:hidden' 
                centerMode 
                autoPlay
                interval={5000} 
                infiniteLoop
                showThumbs={false}
                showIndicators={false} 
                showStatus={false}
                >

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-lg font-semibold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                        <p className="text-md text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                        <p className="text-slate-400 text-xs bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre a antecipação do saque aniversário FGTS
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <HiOutlineBanknotes className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-lg font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="text-md text-slate-400 mb-2 group-hover:text-white">Consignado INSS/LOAS</p>
                        <p className="text-slate-400 text-xs bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas empréstimo consignado INSS e LOAS
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <FaUserTie className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-lg font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="text-md text-slate-400 mb-2 group-hover:text-white">Consignado CLT</p>
                        <p className="text-slate-400 text-xs bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas empréstimo consignado CLT
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-lg font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                        <p className="text-md text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                        <p className="text-slate-400 text-xs bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre o empréstimo com débito na conta de energia
                        </p>
                    </div>
                </CardMod>

                <CardMod>
                    <div className="p-3 duration-300 text-left">
                        <SiPix className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                        <p className="text-lg font-semibold text-slate-400 mb-0 group-hover:text-white">Pix Parcelado</p>
                        <p className="text-md text-slate-400 mb-2 group-hover:text-white">No cartão de crédito</p>
                        <p className="text-slate-400 text-xs bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">
                            Dúvidas sobre o empréstimo pessoal Pix Parcelado
                        </p>
                    </div>
                </CardMod>
                
            </Carousel>

        </section>
    )
}