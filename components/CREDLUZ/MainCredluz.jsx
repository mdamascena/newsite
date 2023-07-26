import { useState } from "react"

export default function MainCredluz() {

    return (
        <main className='mt-32'>

            <section className='px-4 lg:px-24 grid grid-1 lg:grid-cols-3'>

                <div>
                    <h1 className='poppins text-4xl font-bold mb-1'>EMPRÉSTIMO</h1>
                    <h1 className='poppins text-3xl font-normal'>Pessoal Online</h1>
                    <div className=" border-b-2 border-blue-400 mb-3"></div>
                    <p className="poppins text-2xl font-bold mb-2">Débito na conta de LUZ!</p>
                    <p className="poppins"><strong>Sem comprovação de renda</strong>, basta ser o titular da conta de energia da sua residencia.</p>
                </div>

                <div>
                    <figure></figure>
                    <figure></figure>
                </div>

                <div className="max-w-md">
                    <h1 className='text-center text-xl mb-2 poppins bg-white'>Simule seu Empréstimo</h1>
                    <div className='border-2 p-1'>

                        <h2 className='text-center mb-2 poppins'>Qual valor desejado?</h2>

                        <div className='text-center border-2 py-2 px-1'>
                            <div className="flex">
                                <button htmlFor="btnVlr_700" className="h-14 px-3 w-full flex items-center justify-center">R$ 700</button>
                                <button htmlFor="btnVlr_800" className="h-14 px-3 w-full flex items-center justify-center">R$ 800</button>
                                <button htmlFor="btnVlr_900" className="h-14 px-3 w-full flex items-center justify-center">R$ 900</button>
                            </div>

                            <div className="flex justify-center">
                                <button htmlFor="btnVlr_1000" className="h-14 px-3 w-full flex items-center justify-center">R$ 1000</button>
                                <button htmlFor="btnVlr_1100" className="h-14 px-3 w-full flex items-center justify-center">R$ 1100</button>
                                <button htmlFor="btnVlr_1200" className="h-14 px-3 w-full flex items-center justify-center">R$ 1200</button>
                            </div>

                            <div className="flex">
                                <button htmlFor="btnVlr_1300" className="h-14 px-3 w-full flex items-center justify-center">R$ 1300</button>
                                <button htmlFor="btnVlr_1400" className="h-14 px-3 w-full flex items-center justify-center">R$ 1400</button>
                                <button htmlFor="btnVlr_1500" className="h-14 px-3 w-full flex items-center justify-center">R$ 1500</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-xs'>Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%.
                            Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                        </p>
                    </div>
                </div>

            </section>
        </main>
    )
}