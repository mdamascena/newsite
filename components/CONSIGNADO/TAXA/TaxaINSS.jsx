import GuruFinanceiro from '../../ANIMACOES/AnimeGuru.jsx'
import Condicao from '../MAIN/CondicoesINSS.jsx'

export default function SectionTaxa() {
    return (
        <section className='bg-gradient-to-t from-slate-50 to-slate-100 lg:px-40 p-4 select-none'>
            <Condicao/>

            <div className='grid grid-cols-1 lg:grid-cols-3 rounded-3xl lg:p-5 lg:mx-32 p-6'>

                <div className='col-span-1 mt-8 -mb-12 order-2 lg:order-1'>
                    <GuruFinanceiro />
                </div>

                <div className='col-span-2 my-auto poppins text-slate-400 lg:text-xl text-md order-1 lg:order-2'>
                    <h1 className='text-4xl mb-5 font-semibold tracking-tighter'>Equilibre as sua contas e viva a tranquilidade</h1>
                    As melhores taxas de juros para aposentados e pensionistas do INSS, BPC/LOAS
                </div>

            </div>

            <div className='grid grid-cols-3 lg:mx-4 mb-10'>

                <div className='lg:col-span-2 col-span-3 rounded-3xl bg-white p-7 my-4 lg:mr-6 shadow-lg order-2 lg:order-1'>

                    <h1 className='text-slate-400 text-3xl font-semibold tracking-tighter mb-8'>Taxa de juros mensal</h1>

                    <div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4 leading-5 tracking-tighter'>
                            <div className='col-span-1 text-slate-400 mr-2'>
                                Cartão de crédito
                            </div>

                            <div className='bg-slate-200 flex-1 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl bg-amber-500 text-white text-right p-5'>
                                    28,00%
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4 leading-5 tracking-tighter'>
                            <div className='lg:col-span-1 col-span-6 text-slate-400 mr-2'>
                                Cheque especial
                            </div>

                            <div className='bg-slate-200 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl w-[72%] bg-amber-400 text-white text-right p-5'>
                                    12,50%
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4 leading-5 tracking-tighter'>
                            <div className='col-span-1 text-slate-400 mr-2'>
                                Empréstimo Pessoal
                            </div>

                            <div className='bg-slate-200 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl w-[55%] bg-amber-300 text-white text-right p-5'>
                                    8,00%
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4 leading-5 tracking-tighter'>
                            <div className='col-span-1 text-blue-500 mr-2'>
                                Empréstimo Consignado
                            </div>

                            <div className='bg-slate-200 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl lg:w-[14%] w-[20%] bg-blue-600 text-white text-right p-5'>
                                    1,50%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='select-none lg:col-span-1 col-span-3 rounded-3xl bg-blue-600 p-7 my-4 text-white shadow-lg order-1 lg:order-2 pt-10 lg:pt-16'>

                    <h1 className='text-center text-blue-300 lg:text-4xl text-xl mb-2 tracking-tighter'>
                        Juros a partir de
                    </h1>
                    <h2 className='text-center tracking-tight font-semibold text-7xl lg:text-8xl text-white'>
                        1,50%<span className='text-3xl'> a.m.</span>
                    </h2>
                    <p className='text-center text-blue-300 lg:text-lg text-md my-5 leading-5'>
                        A melhor taxa entre empréstimos para aposentados e pensionistas INSS, BPC/LOAS.
                    </p>

                </div>

            </div>

        </section>
    )
}