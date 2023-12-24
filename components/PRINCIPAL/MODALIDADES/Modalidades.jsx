import tw from 'tailwind-styled-components'
import { useState, useEffect } from "react"
import { AiOutlineBarcode } from "react-icons/ai"
import { RiBankLine } from "react-icons/ri"
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { MdOutlineCake } from 'react-icons/md'
import { RiShieldCheckLine } from 'react-icons/ri'
import { IoPodiumOutline } from 'react-icons/io5'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardMod = tw.div`
    group
    bg-white
    hover:bg-blue-800
    hover:scale-110 
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
    rounded-md
`;

const CardVant = tw.div`
    justify-self-center 
    self-center 
    lg:col-span-1
    col-span-2 
    p-5 
    lg:m-2
    m-0
    rounded-md
    hover:shadow-lg 
    hover:bg-white
    duration-300
`;

const TitleCard = tw.p`
    text-blue-500 
    font-semibold 
    lg:text-2xl
    text-xl 
    mb-0 
    self-center
`;

const DesCard = tw.p`
    text-slate-400 
    text-left
    text-sm
    lg:text-md
`;

const Circle = tw.span`
    lg:p-8
    p-6 
    rounded-full 
    bg-blue-200
    absolute 
    lg:right-7
    lg:top-2
    right-1
    mix-blend-multiply
`;

export default function SessaoModalidades() {

    const [valorEmp, setValorEmp] = useState(1);

    const handleChange = (e, newValue) => {
        parseInt(setValorEmp(newValue))
    }

    return (
        <section className="bg-slate-50 poppins">

            <div className='lg:hidden'>
                <Carousel className="grid grid-cols-1 "
                    autoPlay={'true'}
                    infiniteLoop={'true'}
                    centerMode={'true'}
                    centerSlidePercentage={90}
                    showThumbs={'true'}
                    showStatus={''}
                    showIndicators={''}
                    interval={5000}
                    dynamicHeight={'true'}>

                    {/*Energia*/}
                    <CardMod className='mb-5'>
                        <div className="p-3 duration-300 poppins text-left h-60">
                            <RiLightbulbFlashLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">na conta de luz</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Empréstimo com débita na conta de luz, sem comprovação de renda</p>
                        </div>
                    </CardMod>

                    {/*Boleto*/}
                    <CardMod className='mb-5'>
                        <div className="p-3 duration-300 poppins text-left">
                            <AiOutlineBarcode className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Pessoal CredBoleto</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                        </div>
                    </CardMod>

                    {/*FGTS*/}
                    <CardMod className='mb-5'>
                        <div className="p-3 duration-300 poppins text-left">
                            <MdOutlineCake className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Saque-Aniversário FGTS</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                        </div>
                    </CardMod>

                    {/*Consignado*/}
                    <CardMod className='mb-5'>
                        <div className="p-3 duration-300 poppins text-left">
                            <div className='flex'>
                                <RiBankLine className="text-5xl mb-2 text-blue-600 z-50 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                <span className='bg-red-600 text-white p-1 rounded-md text-[10px] h-5 my-auto ml-48'>EM BREVE</span>
                            </div>
                            <p className="text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                            <p className="text-lg text-slate-400 mb-2 group-hover:text-white">Consignado</p>
                            <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Para beneficiários do INSS com pagamento em 10 minutos</p>
                        </div>
                    </CardMod>
                </Carousel>
            </div>

            <div className='hidden lg:block px-5 lg:px-40 lg:py-20'>

                <div className="grid grid-cols-1 lg:grid-cols-3 ">
                    <div className='col-span-1'>
                    </div>

                    <div className='col-span-2'>
                        <div className='grid grid-cols-2'>
                            {/*FGTS*/}
                            <CardMod>
                                <div className="p-3 duration-300">
                                    <div className='flex justify-self-stretch mb-3'>
                                        <MdOutlineCake className="self-center text-5xl text-blue-600 z-10 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                        <div className='ml-4 self-center'>
                                            <p className="self-center text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Antecipação</p>
                                            <p className="self-center text-lg text-slate-400 mb-0 group-hover:text-white">Saque FGTS</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                                </div>
                            </CardMod>

                            {/*Energia*/}
                            <CardMod>
                                <div className="p-3 duration-300">
                                    <div className='flex justify-self-stretch mb-3'>
                                        <RiLightbulbFlashLine className="self-center text-5xl text-blue-600 z-10 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                        <div className='ml-4 self-center'>
                                            <p className="self-center text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                                            <p className="self-center text-lg text-slate-400 mb-0 group-hover:text-white">na conta de luz</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                                </div>
                            </CardMod>
                        </div>
                        <div className='grid grid-cols-2'>
                            {/*Boleto*/}
                            <CardMod>
                                <div className="p-3 duration-300">
                                    <div className='flex justify-self-stretch mb-3'>
                                        <AiOutlineBarcode className="self-center text-5xl text-blue-600 z-10 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                        <div className='ml-4 self-center'>
                                            <p className="self-center text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                                            <p className="self-center text-lg text-slate-400 mb-0 group-hover:text-white">pessoal boleto</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal</p>
                                </div>
                            </CardMod>

                            {/*Consignado*/}
                            <CardMod>
                                <div className="p-3 duration-300">
                                    <div className='flex justify-self-stretch mb-3'>
                                        <RiBankLine className="self-center text-5xl text-blue-600 z-10 bg-blue-200 group-hover:bg-blue-400 group-hover:text-blue-100 duration-300 p-2 rounded-full" />
                                        <div className='ml-4 self-center'>
                                            <p className="self-center text-xl font-semibold text-slate-400 mb-0 group-hover:text-white">Empréstimo</p>
                                            <p className="self-center text-lg text-slate-400 mb-0 group-hover:text-white">Consignado</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 h-[84px] text-sm bg-slate-200 p-3 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-500">Para beneficiários do INSS com pagamento em 10 minutos</p>
                                    {/*<span className='bg-red-600 text-white p-1 rounded-md text-[10px]'>EM BREVE</span>*/}
                                </div>
                            </CardMod>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grid lg:grid-cols-4 grid-cols-2 justify-items-stretch items-stretch px-5 lg:px-44'>

                {/*<figure className='justify-self-center col-span-1 lg:order-1 order-2 hidden lg:block'>
                    <Image src={Pers} alt='' />
                </figure>*/}

                <div className='col-span-4 grid grid-cols-4 self-start mt-24 lg:order-2 order-1'>

                    <h1 className="col-span-4 lg:pl-5 text-slate-400 tracking-tight lg:text-4xl text-3xl self-end text-center lg:text-left mb-5">
                        Aqui vc encontra <span className='text-blue-500 lg:text-5xl text-4xl'>muuuuito mais...</span>
                    </h1>

                    <CardVant className=''>
                        <div className='items-stretch'>
                            <div className='flex relative'>
                                <TitleCard><span className='text-4xl'>Mais</span> opções</TitleCard>
                                <IoWalletOutline className='lg:text-8xl text-7xl text-blue-500 self-center text-opacity-80 z-10 mix-blend-multiply' />
                                <Circle />
                            </div>

                            <div className='my-auto'>
                                <DesCard>Diversas modalidades de empréstimo ao seu alcance em um só lugar.</DesCard>
                            </div>
                        </div>
                    </CardVant>

                    <CardVant className=''>
                        <div className='items-stretch'>
                            <div className='flex relative'>
                                <TitleCard><span className='text-4xl'>Mais</span> rápido</TitleCard>
                                <AiOutlineFieldTime className='lg:text-8xl text-7xl text-blue-500 self-center text-opacity-80 z-10 mix-blend-multiply' />
                                <Circle />
                            </div>

                            <div className='my-auto'>
                                <DesCard>Nossa tecnologia torna tudo mais agil para seu empréstimo ser liberado.</DesCard>
                            </div>
                        </div>
                    </CardVant>

                    <CardVant className=''>
                        <div className='items-stretch'>
                            <div className='flex relative'>
                                <TitleCard><span className='text-4xl'>Mais</span> ofertas</TitleCard>
                                <IoPodiumOutline className='lg:text-8xl text-7xl text-blue-500 self-center text-opacity-80 z-10 mix-blend-multiply' />
                                <Circle />
                            </div>

                            <div className='my-auto'>
                                <DesCard>Os melhores bancos com as melhores ofertas de crédito do mercado.</DesCard>
                            </div>
                        </div>
                    </CardVant>

                    <CardVant className=''>
                        <div className='items-stretch'>
                            <div className='flex relative'>
                                <TitleCard><span className='text-4xl'>Mais</span> seguro</TitleCard>
                                <RiShieldCheckLine className='lg:text-8xl text-7xl text-blue-500 self-center text-opacity-80 z-10 mix-blend-multiply' />
                                <Circle />
                            </div>

                            <div className='my-auto'>
                                <DesCard>Desde 2015 no mercado. Levando crédito seguro e confiável.</DesCard>
                            </div>
                        </div>
                    </CardVant>
                </div>

            </div>

            {/*Grafico taxas*/}
            <div className='grid grid-col-1 lg:grid-cols-2 mb-52 lg:mt-24 lg:px-44 px-8'>

                <div className='col-span-1 poppins mb-14'>

                    <h1 className='text-3xl lg:text-5xl text-blue-500 tracking-tight'>
                        As melhores taxas você encontra aqui.
                    </h1>
                    <p className='text-md lg:text-xl mt-2 text-slate-400'>
                        Nós buscamos várias ofertas para você encontrar o empréstimo de que precisa!
                    </p>

                </div>

                <div className='col-span-1'>
                    <div className='grid grid-cols-3 h-64'>

                        <div className='col-span-1 bg-blue-600 rounded-md lg:mx-5 mx-2 mt-52'>
                            <div className='text-blue-600 text-center -top-8 relative lg:text-xl text-md'>1,59% a.m</div>
                            <div className='bottom-5 relative text-center text-white lg:px-2 lg:font-semibold lg:text-md text-sm'>
                                Empréstimo Valoreal
                            </div>
                        </div>

                        <div className='col-span-1 bg-slate-400 rounded-md lg:mx-5 mx-2 mt-40'>
                            <div className='text-slate-400 text-center -top-8 relative lg:text-xl text-md'>8,00% a.m</div>
                            <div className='bottom-5 relative text-center text-white lg:px-2 lg:font-semibold lg:text-md text-sm'>
                                Empréstimo pessoal
                            </div>
                        </div>

                        <div className='col-span-1 bg-slate-600 rounded-md lg:mx-5 mx-2'>
                            <div className='text-slate-600 text-center -top-8 relative lg:text-xl text-md'>28,00% a.m</div>
                            <div className='bottom-5 relative text-center text-white lg:px-5 lg:font-semibold lg:text-md text-sm px-2'>
                                Cartão de crédito
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='bg-[url(../public/img/note_fgts.png)] bg-no-repeat bg-auto h-96 '></div>

        </section>
    )
}