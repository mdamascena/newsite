import { MdOutlineEditCalendar } from 'react-icons/md'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { BtnSolic, IntSolic } from "./styles"

export default function SimuladorFGTS() {

    return (
        <section className="bgMainPrincipal">

            <div className="grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-16 container-custom lg:px-24 px-2">

                <div className="col-span-3">
                    <h1 className="select-none text-white text-center lg:text-left text-3xl mb-2 tracking-tighter font-semibold lg:ml-5">
                        Descubra o seu limite
                    </h1>

                    <div className=" rounded-lg bg-base-calc p-4 lg:mr-5 border border-white/50">
                        
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <div>
                                <label className="text-blue-100 text-sm select-none" htmlFor="saldo">Digite seu saldo FGTS</label>
                                <div className="relative flex items-center">
                                    <MdOutlineAccountBalanceWallet className="w-6 h-6 absolute ml-3 text-slate-400" />
                                    <IntSolic placeholder='R$ 00.000,00' name="saldo" inputmode="numeric" />
                                </div>
                            </div>

                            <div>
                                <label className="text-blue-100 text-sm" htmlFor="nascimento">Data do seu nascimento</label>
                                <div className="relative flex items-center">
                                    <MdOutlineEditCalendar className="w-6 h-6 absolute ml-3 text-slate-400" />
                                    <IntSolic placeholder='00/00/0000' name="nascimento" inputmode="numeric" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <p className="text-xs text-white text-justify mt-5 select-none hidden lg:block">
                        Os valores dessa simulação são calculados com base nos informados. O limite pode mudar de
                        acordo com o seu saldo no FGTS.
                    </p>
                </div>

                <div className="lg:col-span-2 col-span-1 lg:pl-20">

                    <div className="text-justify mb-4 lg:mb-0">

                        <div className="content-center grid text-center my-2 lg:my-0 p-3 rounded-md">
                            <p className="text-white text-xl">Você pode receber até:</p>
                            <p className="text-3xl tracking-tight font-semibold text-white">R$ 00.000,00</p>
                        </div>

                        <div className="col-span-1 mt-5 flex">
                            <BtnSolic>Solicitar agora</BtnSolic>
                        </div>

                        <p className="text-xs text-white text-justify mt-5 select-none lg:hidden block">
                            Os valores dessa simulação são calculados com base nos informados. O limite pode mudar de
                            acordo com o seu saldo no FGTS.
                        </p>

                    </div>

                </div>
            </div>

        </section>

    )
}