import { useState } from "react";
import { UserRound } from "lucide-react";
import Link from 'next/link'
import Image from 'next/image'
import LogoA from '../../../public/img/LOGO_AZUL.png'

const navigationItems = [
    { label: "Início", href: "/", active: true },
    { label: "Ajuda", href: "/faq" },
    { label: "Minha Conta", href: "#minha-conta" },
];

export default function Header_result() {
    const [mudaLinha, setMudaLinha] = useState(['w-6', '', 'w-4', 'scale-y-0', true]);

    const btnClick = () => {
        if (mudaLinha[4]) {
            setMudaLinha([
                'w-[25px] rotate-[45deg] translate-y-[8px]',
                'translate-x-[40px]',
                'w-[25px] rotate-[315deg] translate-y-[-8px]',
                'scale-y-100',
                false,
            ]);
            return;
        }

        setMudaLinha(['w-6', '', 'w-4', 'scale-y-0', true]);
    };

    return (
        <header className="relative border-b border-slate-100 bg-slate-50 ">
            
            <div className="container-custom mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                
                <Link href="/" className="flex min-w-0 items-center gap-3">

                    <Image className="h-auto pr-3 lg:pr- transition duration-300 ease-in hover:scale-110 hover:-rotate-6"
                        src={LogoA}
                        width={150}
                        placeholder="blur"
                        loading="eager"
                        alt="Valoreal"
                    />
                 
                    <span className="bg-emerald-100 py-1 px-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                        <span className="relative inline-flex h-2 w-2 shrink-0" aria-hidden="true">
                            <span className="absolute inset-0 rounded-full bg-emerald-600" />
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-600" />
                        </span>
                        Novas ofertas
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
                    {navigationItems.map(({ label, href, active }) => (
                        <a className={`text-sm font-medium transition-colors hover:text-blue-600 ${active ? "text-blue-600" : "text-slate-400"}`}
                            key={label} href={href}>
                            {label}
                        </a>
                    ))}

                    <a href="#minha-conta"
                        className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="Acessar minha conta">
                        <UserRound className="h-4 w-4" aria-hidden="true" />
                    </a>
                </nav>

                <button
                    type="button"
                    className="ml-5 space-y-1.25 overflow-hidden cursor-pointer lg:hidden"
                    onClick={btnClick}
                    aria-label={mudaLinha[4] ? "Abrir menu" : "Fechar menu"}
                    aria-expanded={!mudaLinha[4]}
                    aria-controls="menu-recusa-mobile">
                    <span className={`block h-0.75 rounded-full bg-blue-500 transition duration-700 ${mudaLinha[0]}`} />
                    <span className={`block h-0.75 w-6 rounded-full bg-blue-500 transition duration-700 ${mudaLinha[1]}`} />
                    <span className={`block h-0.75 rounded-full bg-blue-500 transition duration-700 ${mudaLinha[2]}`} />
                </button>
            </div>

            <nav
                id="menu-recusa-mobile"
                className={`${mudaLinha[3]} absolute left-4 right-4 top-full z-50 mx-auto mt-2 origin-top rounded-lg bg-white p-3 text-center shadow-md transition duration-500 lg:hidden`}
                aria-label="Navegação móvel">
                <ul>
                    {navigationItems.map(({ label, href, active }) => (
                        <li key={label} className="m-2 rounded-md text-slate-400">
                        <a
                            href={href}
                            onClick={btnClick}
                            className={`block w-full rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 ${
                                active ? "text-blue-600" : "text-slate-400"
                            }`}>
                            {label}
                        </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
