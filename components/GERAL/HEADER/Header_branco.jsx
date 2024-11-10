import Link from 'next/link'
import Image from 'next/image'
import LogoB from '../../../public/img/LOGO_BRANCO.png'
import LogoA from '../../../public/img/LOGO_AZUL.png'
import tw from 'tailwind-styled-components'
import { useEffect, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import AlertI from '../alert/AlertBlue'

const Dropdown = tw.div`
    absolute 
    duration-300
    origin-top
    delay-300 
    opacity-0
    scale-y-0
    group-hover:opacity-100
    group-hover:scale-y-100
    mt-12 
    z-10 
    w-64
    rounded-md 
    bg-white 
    shadow-md
`

const LiDrop = tw.li`
    cursor-pointer 
    my-auto 
    transition-transform 
    duration-500
    text-sm
    cursor-pointer
`

const BtnMenu = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500 
    text-md 
    lg:py-2
    py-1
    lg:px-6
    px-4
    rounded-full
    text-white
    shadow-md
    border-b-2 
    border-amber-300
    focus:outline-none
    hover:shadow-md
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:scale-105
    active:scale-90
    duration-150
`

const LiSm = tw.li`
    m-2
    py-2  
    rounded-md
    text-slate-400
    hover:bg-slate-200
    cursor-pointer
`

export default function Header() {

    const [bgNavbar, setBgNavbar] = useState(['bg-opacity-10', 'text-blue-500', 'bg-blue-500', LogoA, 'hover:text-yellow-500']);
    const [mudaLinha, setMudaLinha] = useState(['w-6', '', 'w-4', 'scale-y-0', true]);
    const [dropdonw, setDropdonw] = useState([true,'scale-y-0 h-0 -mb-6','opacity-0']);

    const btnClose = () => {
        setCloseAlert('hidden')
    }

    const btnClick = () => {
        if (mudaLinha[4]) {
            setMudaLinha([
                'w-[25px] rotate-[45deg] translate-y-[8px]',
                'translate-x-[40px]',
                'w-[25px] rotate-[315deg] translate-y-[-8px]',
                'scale-y-100',
                false
            ])
        } else {
            setMudaLinha(['w-6', '', 'w-4', 'scale-y-0', true]);
        }
    }

    const drop = ()=>{
        if(dropdonw[0]){
            setDropdonw([false,'h-56 scale-y-100','opacity-100'])
        }else{
            setDropdonw([true,'h-0 scale-y-0 -mb-6','opacity-0'])
        }
    }

    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    setBgNavbar(['shadow-lg', 'text-white', 'bg-white', LogoB, 'hover:text-yellow-300']);
                } else {
                    setBgNavbar(['bg-opacity-10', 'text-blue-500', 'bg-blue-500', LogoA, 'hover:text-yellow-500']);
                }
            });
        }, []
    )

    return (
        <header>
            <AlertI />
            <div id='menuBar' className={`${bgNavbar[0]} flex flex-row justify-between mt-2 z-50 backdrop-blur-md fixed py-3 px-[20px] rounded-[10px] left-0 right-0 items-center duration-500 container-custom bg-blue-600`}>
                
                {/*Logo*/}
                <Link href='/' passHref className='pr-8 lg:pr-0 hover:scale-110 hover:-rotate-6 duration-300 ease-in'>
                    <Image id='logoBranco' src={bgNavbar[3]} width={163.33} height={35} placeholder='blur' alt='' />
                </Link>

                {/*Menu desktop*/}
                <nav className="hidden lg:block ml-auto">

                    <ul className={`${bgNavbar[1]} flex gap-7`}>
                        <Link passHref className={`${bgNavbar[4]} hover:scale-[1.2] cursor-pointer my-auto duration-500 text-sm`} href="/">Principal</Link>
                        <Link passHref className={`${bgNavbar[4]} hover:scale-[1.2] cursor-pointer my-auto duration-500 text-sm`} href="/">Quem Somos</Link>
                        <LiDrop className={`${bgNavbar[4]} relative flex group`}>
                            Empréstimos<RiArrowDownSLine className='text-lg group-hover:rotate-180 duration-500' />
                            <Dropdown>
                                <div className="p-1 text-sm">
                                    <Link href="/saque-aniversario" className="text-slate-400 block px-4 py-2 duration-500 hover:bg-slate-200 m-1 rounded-md">Saque antecipado FGTS</Link>
                                    <Link href="../consignado-inss" className="text-slate-400 block px-4 py-2 duration-500 hover:bg-slate-200 m-1 rounded-md">Empréstimo consignado INSS</Link>
                                    <Link href="/credluz" className="text-slate-400 block px-4 py-2 duration-500 hover:bg-slate-200 m-1 rounded-md">Empréstimo na conta de luz</Link>
                                    <Link href="/credluz-fast" className="text-slate-400 block px-4 py-2 duration-500 hover:bg-slate-200 m-1 rounded-md">Empréstimo no boleto</Link>
                                </div>
                            </Dropdown>
                        </LiDrop>

                        <Link passHref className={`${bgNavbar[4]} hover:scale-[1.2] cursor-pointer my-auto duration-500 text-sm`} href="/atendimento">Atendimento</Link>
                        <Link passHref className={`${bgNavbar[4]} hover:scale-[1.2] cursor-pointer my-auto duration-500 text-sm`} href="/faq">Ajuda</Link>
                    </ul>

                </nav>

                {/*Botão conta*/}
                <div className='ml-auto'>
                    <Link href='/conta' passHref>
                        <BtnMenu>Acessar</BtnMenu>
                    </Link>
                </div>

                {/*Botão menu mobile*/}
                <div className='space-y-[5px] cursor-pointer overflow-hidden lg:hidden ml-5' onClick={btnClick}>
                    <span className={`transition duration-700 block ${bgNavbar[2]} rounded-full h-[3px] ${mudaLinha[0]}`}></span>
                    <span className={`transition duration-700 block w-6 h-[3px] ${bgNavbar[2]} rounded-full ${mudaLinha[1]}`}></span>
                    <span className={`transition duration-700 block ${bgNavbar[2]} rounded-full h-[3px] ${mudaLinha[2]}`}></span>
                </div>
            </div>
            
            {/*dropdonw*/}
            <nav className={`${mudaLinha[3]} duration-500 origin-top fixed mt-[4.2rem] bg-white text-center z-50 md:mx-6 mx-4 p-3 rounded-lg left-0 right-0 shadow-md`}>
                <ul className=''>
                    <LiSm><Link href="/" passHref>Principal</Link></LiSm>
                    <LiSm><Link href='/' passHref>Quem Somos</Link></LiSm>
                    <LiSm className='group' onClick={drop}>
                        Empréstimos +                
                    </LiSm>
                </ul>

                <div className={`${dropdonw[1]} bg-slate-200 mx-3 py-2 rounded-lg duration-300`}>
                    <ul className={`${dropdonw[2]}`}>
                            
                        <LiSm className='hover:bg-white'>
                            <Link href='/saque-aniversario' passHref>Saque antecipado FGTS</Link>
                        </LiSm>

                        <LiSm className='hover:bg-white'>
                            <Link href='/consignado-inss' passHref>Empréstimo consignado INSS</Link>
                        </LiSm>

                        <LiSm className='hover:bg-white'>
                            <Link href='/credluz' passHref>Empréstimo na conta de luz</Link>
                        </LiSm>
                            
                        <LiSm className='hover:bg-white'>
                            <Link href='/credluz-fast' passHref>Empréstimo no boleto</Link>
                        </LiSm>
                            
                    </ul>
                </div> 

                <ul>
                    <LiSm>
                        <Link href='/atendimento' passHref>Atendimento</Link>
                    </LiSm>
                    <LiSm><Link href='/faq' passHref>Ajuda</Link></LiSm>
                </ul>
                
            </nav>

        </header>
    )
}