import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import tw from 'tailwind-styled-components'
import 'animate.css'

import LogoB from '../../../public/img/LOGO_BRANCO.png'
import LogoA from '../../../public/img/LOGO_AZUL.png'
import AlertI from '../alert/Alert'

const Dropdown = tw.div`
    absolute
    z-10
    mt-12
    w-64
    origin-top
    scale-y-0
    rounded-md
    bg-white
    text-slate-400
    opacity-0
    shadow-md
    delay-300
    duration-300
    group-hover:scale-y-100
    group-hover:opacity-100
`

const BtnMenu = tw.button`
    rounded-full
    border-b-2
    border-amber-300
    bg-gradient-to-r
    from-yellow-300
    to-amber-500
    px-4
    py-1
    text-md
    text-white
    shadow-md
    duration-150
    focus:outline-none
    hover:scale-105
    hover:from-yellow-400
    hover:to-amber-500
    hover:shadow-md
    active:scale-90
    lg:px-6
    lg:py-2
`

const LiDrop = tw.li`
    my-auto
    cursor-pointer
    text-sm
    duration-500
    transition-all
`

const LiSm = tw.li`
    m-2
    rounded-md
    text-slate-400
`

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mudaLinha, setMudaLinha] = useState(['w-6', '', 'w-4', 'scale-y-0', true])
    const [dropdonw, setDropdonw] = useState([true, 'scale-y-0 h-0 -mb-6', 'opacity-0'])

    const containerClass = isScrolled ? 'shadow-lg bg-white' : 'bg-black/10'
    const logoSrc = isScrolled ? LogoA : LogoB
    const burgerClass = isScrolled ? 'bg-blue-500' : 'bg-white'

    const btnClick = () => {
        if (mudaLinha[4]) {
            setMudaLinha([
                'w-[25px] rotate-[45deg] translate-y-[8px]',
                'translate-x-[40px]',
                'w-[25px] rotate-[315deg] translate-y-[-8px]',
                'scale-y-100',
                false,
            ])
        } else {
            setMudaLinha(['w-6', '', 'w-4', 'scale-y-0', true])
        }
    }

    const drop = () => {
        if (dropdonw[0]) {
            setDropdonw([false, 'h-64 scale-y-100', 'opacity-100'])
        } else {
            setDropdonw([true, 'h-0 scale-y-0 -mb-6', 'opacity-0'])
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <AlertI />
            <div
                id='menuBar'
                className={`${containerClass} flex flex-row justify-between mt-2 z-50 backdrop-blur-md fixed py-3 px-5 rounded-[10px] left-0 right-0 items-center duration-500 container-custom`}
            >
                <Link href='/' className='pr-8 lg:pr-0 hover:scale-110 hover:-rotate-6 duration-300 ease-in justify-self-start'>
                    <Image id='logoBranco' src={logoSrc} width={160} placeholder='blur' alt='' />
                </Link>

                <nav className='hidden lg:block ml-auto'>
                    <ul className='flex gap-7'>
                        <Link
                            href='/'
                            className={`${isScrolled ? 'text-blue-500! hover:text-yellow-500!' : 'text-white! hover:text-yellow-300!'} my-auto text-sm duration-500 transition-all hover:scale-[1.2]`}
                        >
                            Principal
                        </Link>
                        <Link
                            href='/quem-somos'
                            className={`${isScrolled ? 'text-blue-500! hover:text-yellow-500!' : 'text-white! hover:text-yellow-300!'} my-auto text-sm duration-500 transition-all hover:scale-[1.2]`}
                        >
                            Quem Somos
                        </Link>
                        <LiDrop className={`${isScrolled ? 'text-blue-500! hover:text-yellow-500!' : 'text-white! hover:text-yellow-300!'} relative flex group`}>
                            Empréstimo
                            <RiArrowDownSLine className='text-lg duration-200 group-hover:rotate-180' />
                            <Dropdown>
                                <div className='p-1 text-sm'>
                                    <Link href='/saque-aniversario' className='m-1 block rounded-md px-4 py-2 text-slate-400! duration-500 hover:bg-slate-200'>Saque antecipado FGTS</Link>
                                    <Link href='/consignado-inss' className='m-1 block rounded-md px-4 py-2 text-slate-400! duration-500 hover:bg-slate-200'>Empréstimo consignado INSS</Link>
                                    <Link href='/consignado-clt' className='m-1 block rounded-md px-4 py-2 text-slate-400! duration-500 hover:bg-slate-200'>Empréstimo consignado CLT</Link>
                                    <Link href='/credluz' className='m-1 block rounded-md px-4 py-2 text-slate-400! duration-500 hover:bg-slate-200'>Empréstimo na conta de LUZ</Link>
                                    <Link href='/credluz-fast' className='m-1 block rounded-md px-4 py-2 text-slate-400! duration-500 hover:bg-slate-200'>PIX parcelado</Link>
                                </div>
                            </Dropdown>
                        </LiDrop>
                        <Link href='/atendimento' className={`${isScrolled ? 'text-blue-500! hover:text-yellow-500!' : 'text-white! hover:text-yellow-300!'} my-auto text-sm duration-500 transition-all hover:scale-[1.2]`}>
                            Atendimento
                        </Link>
                        
                        <Link href='/faq' className={`${isScrolled ? 'text-blue-500! hover:text-yellow-500!' : 'text-white! hover:text-yellow-300!'} my-auto text-sm duration-500 transition-all hover:scale-[1.2]`}>
                            Ajuda
                        </Link>
                    </ul>
                </nav>

                <div className='ml-auto'>
                    <BtnMenu>
                        <Link href='/conta'>
                            Acessar
                        </Link>
                    </BtnMenu>
                </div>

                <div className='space-y-1.25 cursor-pointer overflow-hidden lg:hidden ml-5' onClick={btnClick}>
                    <span className={`transition duration-700 block ${burgerClass} rounded-full h-0.75 ${mudaLinha[0]}`}></span>
                    <span className={`transition duration-700 block w-6 h-0.75 ${burgerClass} rounded-full ${mudaLinha[1]}`}></span>
                    <span className={`transition duration-700 block ${burgerClass} rounded-full h-0.75 ${mudaLinha[2]}`}></span>
                </div>
            </div>

            <nav className={`${mudaLinha[3]} duration-500 origin-top fixed mt-[4.2rem] bg-white text-center z-50 md:mx-6 mx-4 p-3 rounded-lg left-0 right-0 shadow-md`}>
                <ul>
                    <LiSm>
                        <Link href='/' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200'>Principal</Link>
                    </LiSm>
                    <LiSm>
                        <Link href='/quem-somos' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200'>Quem Somos</Link>
                    </LiSm>
                    <LiSm>
                        <button type='button' className={`w-full rounded-md px-2 py-2 text-center text-slate-400! transition-colors duration-300 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 ${dropdonw[0] ? '' : 'bg-slate-200'}`} onClick={drop}>
                            Empréstimo
                        </button>
                    </LiSm>
                </ul>

                <div className={`${dropdonw[1]} bg-slate-200 mx-3 py-2 rounded-lg duration-300`}>
                    <ul className={`${dropdonw[2]}`}>
                        <LiSm>
                            <Link href='/saque-aniversario' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-white focus:bg-white active:bg-white'>Saque antecipado FGTS</Link>
                        </LiSm>
                        <LiSm>
                            <Link href='/consignado-inss' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-white focus:bg-white active:bg-white'>Empréstimo consignado INSS</Link>
                        </LiSm>
                        <LiSm>
                            <Link href='/consignado-clt' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-white focus:bg-white active:bg-white'>Empréstimo consignado CLT</Link>
                        </LiSm>
                        <LiSm>
                            <Link href='/credluz' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-white focus:bg-white active:bg-white'>Empréstimo na conta de LUZ</Link>
                        </LiSm>
                        <LiSm>
                            <Link href='/credluz-fast' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-white focus:bg-white active:bg-white'>PIX parcelado</Link>
                        </LiSm>
                    </ul>
                </div>

                <ul>
                    <LiSm>
                        <Link href='/atendimento' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200'>Atendimento</Link>
                    </LiSm>
                    <LiSm>
                        <Link href='/faq' className='block w-full rounded-md px-2 py-2 text-slate-400! transition-colors duration-300 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200'>Ajuda</Link>
                    </LiSm>
                </ul>
            </nav>
        </header>
    )
}
