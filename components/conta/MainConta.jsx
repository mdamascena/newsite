import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logoBranco from '../../public/img/LOGO_FULL_BRANCO.png'
import { BtnHelp, BtnConta } from './styles'
import Login from './form/Login'
import Reset from './form/Reset'
import { useState } from 'react'
import { BsWhatsapp } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"

const WP = 'https://bit.ly/wa-plancredi-api'
const TEL = 'tel:8008789853'

export default function MainCONTA() {

    const [showLogin, setShowLogin] = useState(true)

    const router = useRouter();

    const handleBack = () => {
        if (!showLogin) {
            setShowLogin(true);
        } else {
            router.back();
        }
    }
    
    return (
        <main>
            <div className='bgMainPrincipal pb-40'>
                <div className='grid grid-cols-6 justify-around lg:p-10 p-6 pt-10 lg:pt-12 lg:mx-32'>
                    
                    <Link href='/' passHref className='lg:w-44 w-36 items-center flex lg:mx-auto col-span-3 lg:col-span-2 hover:scale-110 hover:-rotate-6 duration-300 ease-in'>
                        <Image src={logoBranco} alt=''/>
                    </Link>
                    
                    <div className='text-center text-white col-span-6 lg:col-span-2 order-3 lg:order-1 mt-8 lg:mt-0'>
                        <h1 className='font-semibold tracking-tighter text-2xl'>MINHA PROPOSTA</h1>
                        <p className='font-light tracking-tighter text-xl'>
                            {showLogin ? 'Acesse sua conta':'Recuperar Senha'}
                        </p>
                    </div>
                    
                    <div className='items-center flex justify-end lg:justify-center col-span-3 lg:col-span-2 lg:order-3'>

                        <BtnConta className='flex items-center' onClick={handleBack}>
                            <HiOutlineArrowLongLeft className='mr-2 text-lg' />
                            {showLogin ? 'Voltar' : 'Acessar Conta'}
                        </BtnConta>
                 
                    </div>
                </div>
            </div>

            <div className='flex justify-center relative'>
                <div className='absolute bg-white rounded-md shadow-lg p-5 lg:p-8 -top-32 w-[90%] lg:w-[530px]'>
                    {showLogin ? <Login setShowLogin={setShowLogin} /> : <Reset />}
                </div>
            </div>

            <div className='bg-slate-100 pt-48'>
                <div className='text-slate-400 text-center p-5'>
                    <h2 className='font-semibold tracking-tighter text-3xl'>Precisa de ajuda?</h2>
                    <p className='tracking-tight font-light'>Fale com um dos nossos canais de atendimento</p>
                </div>

                <div className='grid grid-cols-2 lg:gap-4 gap-2'>
                    <Link className='place-self-end' href={WP} passHref target="_blank">
                        <BtnHelp>
                            <BsWhatsapp className='text-xl mr-2'/>
                            WhatsApp
                        </BtnHelp>
                    </Link>
                    
                    <Link className='place-self-star' href={TEL} passHref target="_blank">
                        <BtnHelp>
                            <BsTelephone className='text-xl mr-2' />
                            0800-878-9853
                        </BtnHelp>
                    </Link>
                </div>
                
                <div className='text-slate-400 text-center pt-5 pb-12 px-5 tracking-tight font-light'>
                    <p>Funcionamos de segunda a sexta-feira, das 9h as 18h exceto nos feriádos</p>
                </div>
            </div>

        </main>
    )
}