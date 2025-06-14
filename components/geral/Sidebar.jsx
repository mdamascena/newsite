'use client';

import { usePathname } from "next/navigation";
import Logotipo from "../../public/img/LOGO_AZUL.png"
import Image from "next/image";
import { FaHome, FaUser } from "react-icons/fa";
import { TbContract } from "react-icons/tb";
import Link from "next/link";

export default function SideBar() {

    const rota = usePathname();

    const links = [
        {
            href: '/conta/acompanhamento/home',
            label: 'Home',
            icon: FaHome,
        },
        {
            href: '/conta/acompanhamento/contrato',
            label: 'Contratos',
            icon: TbContract,
        },
        {
            href: '/conta/acompanhamento/perfil',
            label: 'Conta',
            icon: FaUser,
        },
    ];

    return (

        <aside style={{ boxShadow: '1px 0 1px rgba(0, 0, 0, 0.1)' }}
            className="md:w-58 md:h-screen justify-between md:flex md:flex-col items-center rounded-br-2xl md:rounded-br-7xl">

            {rota === '/conta/acompanhamento/home' ? (
                <div className="h-20 md:h-28 p-6 md:flex justify-center border-b-2 border-gray-200">
                    <Image className="object-contain w-full h-full" src={Logotipo} height={100} width={150} alt="Logo" />
                </div>
                ) : (
                <div className="hidden md:h-28 p-6 md:flex justify-center border-b-2 border-gray-200">
                    <Image className="object-contain w-full h-full" src={Logotipo} height={100} width={150} alt="Logo" />
                </div>
            )}

            <nav className="flex flex-row justify-around items-center p-3
                shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] fixed bottom-0 left-0 right-0  
                md:static md:flex-col md:bg-transparent md:p-0 md:justify-start md:align-start md:w-full md:items-start md:shadow-none">

                {links.map(({ href, label, icon: Icon }) => {
                    const isActive = rota === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col md:flex-row items-center md:gap-4 md:py-3 px-3 
                            ${isActive ? 'text-blue-600 md:text-gray-600 md:hover:bg-gray-100 md:w-full md:border-r-4 md:border-blue-600' : 'text-gray-600 md:hover:bg-gray-100 md:w-full'}`}
                        >
                            <Icon className={`text-2xl ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                            <span className={`text-xs mt-1 md:mt-0 md:text-lg`}>
                                {label}
                            </span>
                        </Link>
                    );
                })}


            </nav>

            <div className="w-full md:p-7 justify-center items-center text-center hidden md:block">
                <p className="w-full text-red-500 font-medium tracking-wide">Sair</p>
            </div>

        </aside>
    )
}