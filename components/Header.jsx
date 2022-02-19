import Image from 'next/image'
import LogoB from '../public/img/LOGO_BRANCO.png'
import LogoA from '../public/img/LOGO_AZUL.png'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import Button from "@material-tailwind/react/Button"
import { useEffect, useState } from 'react'


const NavbarCSS = styled.div`
    transition: all .3s ease-out 0s;
    padding: 12px 20px;
    background: #ffffff14;
    border-radius: 10px;
    margin: auto;
    width: 93%;
    top:10px;
`;

const Navbar = tw(NavbarCSS)`
    fixed 
    left-0 
    right-0 
    flex 
    flex-row
    items-center 
    mx-auto
    gap-10
`;

const Li = tw.li`
    hover:scale-[1.2]
    hover:text-yellow-400
    cursor-pointer 
    my-auto 
    transition-transform 
    duration-500
    text-sm
`;

export default function Header() {

    const [bgNavbar, setBgNavbar] = useState('bg-opacity-10');
    const [logo, setLogo] = useState(LogoB);
    const [txtNavbar, setxtNavbar] = useState('text-white');
   
    useEffect(
        () => {
            window.addEventListener('scroll', ()=>{
                if(window.scrollY > 0){
                    setBgNavbar('shadow-lg');
                    setLogo(LogoA);
                    setxtNavbar('text-blue-600');
                }else{
                    setBgNavbar('bg-opacity-10');
                    setLogo(LogoB);
                    setxtNavbar('text-white');
                }
            });
        }, []
    )
 
    function clickMenu() {
        let btn = document.querySelector('.toggle')
        btn.classList.toggle('active');
    }

    /*window.addEventListener('scroll',function(){
    
        let menu = document.getElementById('menuBar');
        let branco = document.getElementById('logoBranco');
        let azul = document.getElementById('logoAzul');
        //let font = document.getElementsByName('t');
        
        menu.classList.toggle('bg-white', window.scrollY > 0);
        branco.classList.toggle('hidden', window.scrollY > 0);
        azul.classList.toggle('hidden', window.scrollY <= 0);
        
        /*for(var i=0; i<font.length; i++){   
    
            font[i].classList.toggle('text-primary', window.scrollY > 0); 
            font[i].classList.toggle('text-light', window.scrollY <= 0);
        }
    });*/

    return (
        <header>
            <div id='menuBar' className={`${bgNavbar} z-50 fixed py-[12px] px-[20px] rounded-[10px] left-0 right-0 flex flex-row items-center lg:mx-14 mx-4 top-4 bg-white`}>

                <div className='flex-2 lg:flex-1 flex hover:animate-bounce transition-transform duration-500'>
                    <Image id='logoBranco' src={logo} width={140} height={30} placeholder='blur' />
                </div>

                <nav className="hidden lg:block flex-2">
                    <ul className={`${txtNavbar} poppins flex gap-7`}>
                        <Li>Principal</Li>
                        <Li>Quem Somos</Li>
                        <Li>Empréstimos</Li>
                        <Li>Como Funciona</Li>
                        <Li>Perguntas frequantes</Li>
                        <Li>Contato</Li>
                    </ul>
                </nav>

                <div className='flex-1 grid justify-items-stretch'>
                    <Button className='justify-self-end bg-gradient-to-r from-yellow-300 to-amber-500 hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-400'
                        color="amber"
                        buttonType="filled"
                        size="regular"
                        rounded={true}
                        block={false}
                        iconOnly={false}
                        ripple="light"> <span className='hidden lg:block poppins'>Acessar conta</span><span className='lg:hidden poppins'>Entrar</span>
                    </Button>
                </div>

                <div className='toggle lg:hidden flex-1' onClick={clickMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </header>
    )
}