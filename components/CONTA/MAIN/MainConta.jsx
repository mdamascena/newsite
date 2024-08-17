import Image from 'next/image'
import Link from 'next/link'
import logoBranco from '../../../public/img/LOGO_FULL_BRANCO.png'
import tw from 'tailwind-styled-components'
import Login from '../FORM/Login'
import Reset from '../FORM/Reset'
import { useState } from 'react'
import { BsWhatsapp } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"

const WP = 'https://bit.ly/wa-plancredi-api'
const TEL = 'tel:8008789853'

const BtnConta = tw.button`
    text-white 
    border-2 
    text-sm 
    border-white
    tracking-tighter 
    p-2 
    px-2 
    lg:px-5 
    rounded-md 
    hover:bg-white 
    hover:text-blue-600 
    hover:scale-105
    active:scale-90 
    duration-300    
`
const BtnHelp = tw.button`
    bg-sky-500
    saturate-150
    flex 
    items-center 
    justify-center
    text-white
    lg:text-md
    text-sm 
    tracking-tighter
    lg:w-64
    w-40
    lg:py-4
    py-3
    lg:px-5 
    rounded-md
    active:bg-sky-900
    hover:bg-sky-700
    hover:scale-105
    active:scale-90 
    duration-150    
`

export default function MainCONTA() {

    const [btnConta, setBtnConta] = useState('Simular empréstimo')
    const [mudaComp, setMudaComp] = useState(true);
    
    return (
        <main>
            <div className='bgMainPrincipal pb-40'>
                <div className='grid grid-cols-6 justify-around lg:p-10 p-6 pt-10 lg:pt-20 lg:mx-32'>
                    
                    <Link href='/' passHref className='lg:w-44 w-36 items-center flex lg:mx-auto col-span-3 lg:col-span-2 hover:scale-110 hover:-rotate-6 duration-300 ease-in'>
                        <Image src={logoBranco} alt=''/>
                    </Link>
                    
                    <div className='text-center text-white col-span-6 lg:col-span-2 order-3 lg:order-1 mt-8 lg:mt-0'>
                        <h1 className='font-semibold tracking-tighter text-2xl'>MINHA PROPOSTA</h1>
                        <p className='font-light tracking-tighter text-xl'>Empréstimo Pessoal</p>
                    </div>
                    
                    <div className='items-center flex justify-end lg:justify-center col-span-3 lg:col-span-2 lg:order-3'>
                        <BtnConta>{btnConta}</BtnConta>
                    </div>
                </div>
            </div>

            <div className='flex justify-center -my-32'>
                <div className='bg-white rounded-md shadow-lg p-8 -top-10 lg:w-[35%] w-[90%]'>
                    
                    <Login/>
                    
                </div>
            </div>

            <div className='bg-slate-100 pt-40'>
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
                
                <div className='text-slate-400 text-center p-8'>
                    <p>Funcionamos de segunda a sexta-feira, das 9h as 18h exceto nos feriádos</p>
                </div>
            </div>

        </main>
    )
}