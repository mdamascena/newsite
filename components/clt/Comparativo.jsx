import { IoCardOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import BtnBlueNext from "../geral/button/BtnBlueNext"


const comparativoTaxas = [
    {
        icon: IoCardOutline,
        divida: "Rotativo do cartão de crédito",
        taxaAtual: "até 12% ao mês",
        economia: "economia até R$ 5.000 por ano",
    },
    {
        icon: CiBank,
        divida: "Cheque especial",
        taxaAtual: "até 8% ao mês",
        economia: "economia até R$ 3.000 por ano",
    },
    {
        icon: LuShoppingBag,
        divida: "Carnê de loja / financiamento",
        taxaAtual: "até 6% ao mês",
        economia: "economia até R$ 2.000 por ano",
    },
    {
        icon: BiMoneyWithdraw,
        divida: "Empréstimo pessoal com juros altos",
        taxaAtual: "até 10% ao mês",
        economia: "economia até R$ 4.000 por ano",
    },
];

export default function Teste() {
    return (
        <section className="bg-white px-4 py-14 lg:py-20">
            <div className="container-custom">
                <div className="text-center">
                    <h1 className="text-slate-400 font-semibold tracking-tight text-xl">
                        Comparativo de taxa
                    </h1>
                    <h2 className="text-blue-500 font-semibold tracking-tight text-3xl">
                        Em quais situações vale trocar?
                    </h2>
                    <h3 className="text-blue-400 font-light tracking-tight">
                        Troque dívidas caras por uma parcela consignada que cabe no salário.
                    </h3>
                </div>

                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
                    <div className="hidden grid-cols-[1.5fr_1fr_1fr] bg-blue-800 font-semibold text-lg text-white lg:grid text-center">
                        <div className="py-4 text-start pl-8">Dívida atual</div>
                        <div className="py-4 text-center">Taxa que você paga</div>
                        <div className="py-4 text-center">Com consignado CLT</div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {comparativoTaxas.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.divida} className={`grid gap-5 py-3 lg:grid-cols-[1.5fr_1fr_1fr] lg:items-center lg:gap-0 ${
                                    index % 2 === 1 ? "bg-slate-100" : "bg-white"
                                    }`}>

                                    <div className="flex items-center gap-4 ml-6">
                                        <span className="leading-none" aria-hidden="true">
                                            {Icon && <Icon className="p-1.5 bg-slate-200 text-slate-400 rounded-full text-4xl" />}
                                        </span>
                                        <h3 className="font-semibold text-slate-400">
                                            {item.divida}
                                        </h3>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 lg:block lg:text-center">
                                        <span className="text-xs font-bold uppercase text-slate-500 lg:hidden">
                                            Taxa que você paga
                                        </span>
                                        <span className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-red-600">
                                            {item.taxaAtual}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 lg:block lg:text-center">
                                        <span className="text-xs font-bold uppercase text-slate-500 lg:hidden">
                                            Com consignado CLT
                                        </span>
                                        <div>
                                            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                                                1,9% ao mês
                                            </span>
                                            <p className="mt-2 text-xs text-emerald-600">
                                                {item.economia}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 text-center">
                    {/* <p className="text-base tracking-tight text-slate-700">
                        Um especialista calcula o quanto você economiza no seu caso específico — grátis e sem compromisso.
                    </p> */}

                    <BtnBlueNext className={"w-76 mx-auto"} nome={"Simular empréstimo"} />
                    
                </div>
            </div>
        </section>
    );
}
