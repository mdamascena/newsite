import Image from 'next/image'
import LogoB from '../../public/img/LOGO_BRANCO.png'
import LogoA from '../../public/img/LOGO_AZUL.png'
import tw from 'tailwind-styled-components'

import { useEffect, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Li = tw.li`
    hover:scale-[1.2]
    cursor-pointer 
    my-auto 
    transition-transform 
    duration-500
    text-sm
    cursor-pointer
`;

const BtnMenu = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500 
    text-md 
    lg:py-2
    py-1
    lg:px-6
    px-4
    poppins
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
    hover:ring-offset-0
    hover:ring-4
    hover:ring-amber-200
`;

const LiSm = tw.li`
    py-2 
    transition-all 
    rounded-md 
    w-64 
    mx-auto 
    text-blue-500 
    hover:scale-125 
    hover:bg-blue-700 
    hover:text-yellow-300
    hover:font-semibold
    cursor-pointer
`;

export default function Header() {

    const [bgNavbar, setBgNavbar] = useState(['bg-opacity-5', 'text-blue-500', 'bg-blue-500', LogoA, 'hover:text-yellow-500']);
    const [mudaLinha, setMudaLinha] = useState(['w-6', '', 'w-4', 'scale-0', true]);
    const [dropMenu, setDropMenu] = useState(['h-0', true, 'hidden']);

    const abrirDrop = () => {
        if (dropMenu[1]) {
            setDropMenu(['h-32', false, 'block']);
        } else {
            setDropMenu(['h-0', true, 'hidden']);
        }
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

    useEffect(
        () => {
            window.addEventListener('scroll', () => {

                if (window.scrollY > 0) {
                    setBgNavbar(['shadow-lg', 'text-white', 'bg-white', LogoB, 'hover:text-yellow-300']);
                } else {
                    setBgNavbar(['bg-opacity-5', 'text-blue-500', 'bg-blue-500', LogoA, 'hover:text-yellow-500']);
                }
            });
        }, []
    )

    return (
        <header className=''>

            <div id='menuBar' className={`${bgNavbar[0]} z-50 backdrop-blur-md fixed py-[12px] px-[20px] rounded-[10px] left-0 right-0 flex flex-row items-center lg:mx-24 mx-4 top-4 bg-blue-600 duration-500`}>
                <div className='pr-8 pt-2 lg:pr-0 hover:scale-110 hover:-rotate-6 duration-300 ease-in'>
                    <Image id='logoBranco' src={bgNavbar[3]} width={163.33} height={35} placeholder='blur' />
                </div>

                <nav className="hidden lg:block mx-auto">
                    <ul className={`${bgNavbar[1]} poppins flex gap-7`}>
                        <Li className={`${bgNavbar[4]}`}>Principal</Li>
                        <Li className={`${bgNavbar[4]}`}>Quem Somos</Li>
                        <Li className={`${bgNavbar[4]} flex group`}>Empréstimos<RiArrowDownSLine className='text-lg group-hover:rotate-180 duration-500' /></Li>
                        <div className={`${dropMenu[0]} absolute top-14 left-96 border-0 m-1 bg-blue-200  mx-7 rounded-[8px] transition-all duration-500 origin-top-right`}>
                            <ul className={dropMenu[2]}>
                                <LiSm>CredFGTS</LiSm>
                                <LiSm>CredLuz</LiSm>
                                <LiSm>CredBoleto</LiSm>
                            </ul>
                        </div>
                        <Li className={`${bgNavbar[4]}`}>Como Funciona</Li>
                        <Li className={`${bgNavbar[4]}`}>Perguntas frequantes</Li>
                        <Li className={`${bgNavbar[4]}`}>Contato</Li>

                    </ul>
                </nav>

                <div className='justify-items-stretch'>
                    <BtnMenu>
                        Acessar
                    </BtnMenu>
                   
                </div>

                <div className='space-y-[5px] ml-5 cursor-pointer overflow-hidden lg:hidden' onClick={btnClick}>
                    <span className={`transition duration-700 block ${bgNavbar[2]} rounded-full h-[3px] ${mudaLinha[0]}`}></span>
                    <span className={`transition duration-700 block w-6 h-[3px] ${bgNavbar[2]} rounded-full ${mudaLinha[1]}`}></span>
                    <span className={`transition duration-700 block ${bgNavbar[2]} rounded-full h-[3px] ${mudaLinha[2]}`}></span>
                </div>
            </div>

            <nav className={`${mudaLinha[3]} transition duration-500 origin-top fixed bg-white text-center top-20 z-50 py-[12px] rounded-[10px] left-0 right-0 mx-4 shadow-md`}>
                <ul className='poppins gap-7'>
                    <LiSm>Principal</LiSm>
                    <LiSm>Quem Somos</LiSm>
                    <LiSm className='group text-center'>
                        Empréstimos<RiArrowDownSLine className='text-lg group-hover:rotate-180 duration-500'/>
                        
                        <div className="h-0 scale-y-0 group-hover:scale-y-95 group-hover:h-24 border-0 m-1 bg-blue-200 mx-7 rounded-[8px] transition-all duration-500 origin-top-right">
                            <ul className>
                                <LiSm>CredFGTS</LiSm>
                                <LiSm>CredLuz</LiSm>
                                <LiSm>CredBoleto</LiSm>
                            </ul>
                        </div>
                    </LiSm>

                    <LiSm>Como Funciona</LiSm>
                    <LiSm>Perguntas frequantes</LiSm>
                    <LiSm>Contato</LiSm>
                </ul>
            </nav>

        </header>
    )
}