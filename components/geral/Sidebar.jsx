import Logotipo from "../../public/img/LOGO_FULL_BRANCO.png"
import Image from "next/image";
import { History, Home, LifeBuoy, LogOut, Sparkles, Tags, UserRound } from "lucide-react";
import { FloatingDock } from "components/ui/floating-dock";

export default function SideBar({ activeView = "home", onViewChange = () => {} }) {
    const links = [
        {
            id: "home",
            label: 'Inicio',
            icon: Home,
        },
        {
            id: "historico",
            label: 'Historico',
            icon: History,
        },
        {
            id: "ofertas",
            label: 'Ofertas',
            icon: Tags,
        },
        {
            id: "perfil",
            label: 'Perfil',
            icon: UserRound,
        },
        {
            id: "ajuda",
            label: 'Ajuda',
            icon: LifeBuoy,
        },
    ];

    const dockItems = links.map(({ id, label, icon: Icon }) => ({
        title: label,
        icon: <Icon className="h-5 w-5" aria-hidden="true" />,
        active: activeView === id,
        onClick: () => onViewChange(id),
    }));

    return (
        <>
        <aside className="hidden bgMainPrincipal transition-colors dark:bg-slate-950/95 md:sticky md:top-0 md:flex md:h-dvh md:w-64 md:shrink-0 md:flex-col md:shadow-none">
            <div className="hidden px-6 py-5 pt-7 md:flex md:justify-start">
                <Image
                    className="h-auto object-contain"
                    src={Logotipo}
                    width={130}
                    height={Math.round((Logotipo.height / Logotipo.width) * 130)}
                    loading="eager"
                    alt="Logo Valor Real"
                />
            </div>

            <nav className="flex flex-col gap-1 p-4">

                {links.map(({ id, label, icon: Icon }) => {
                    const isActive = activeView === id;

                    return (
                        <button
                            type="button"
                            key={id}
                            onClick={() => onViewChange(id)}
                            className={`group flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold transition md:min-h-0 md:w-full md:flex-row md:justify-start md:gap-3 md:px-3 md:py-3 md:text-sm ${
                                isActive
                                ? 'bg-blue-700 text-white shadow-sm shadow-blue-900/20 dark:bg-blue-900 dark:text-slate-400'
                                : 'text-blue-400 hover:bg-black/15 hover:text-blue-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                            }`}
                        >
                            <Icon className="h-5 w-5 md:h-4 md:w-4" aria-hidden="true" />
                            <span>{label}</span>
                        </button>
                    );
                })}

            </nav>

            <div className="mt-auto hidden p-4 md:block">
                <div className="mb-4 rounded-lg bg-black/40 p-4 text-blue-50 dark:bg-blue-500/10 dark:text-blue-100">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                        <Sparkles className="h-4 w-4 text-amber-500" aria-hidden="true" />
                        Area do cliente
                    </div>
                    <p className="text-xs leading-relaxed text-blue-400 dark:text-blue-100/75">
                        Acompanhe propostas, contratos e oportunidades em um so lugar.
                    </p>
                </div>
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-rose-600 transition bg-red-500/20 hover:bg-indigo-50/70 dark:text-indigo-300 dark:hover:bg-rose-500/10">
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Sair
                </button>
            </div>

        </aside>
        <FloatingDock items={dockItems} desktopClassName="md:hidden" />
        </>
    )
}
