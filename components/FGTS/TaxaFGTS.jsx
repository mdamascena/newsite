import GuruFinanceiro from '../../components/ANIMACOES/AnimeFinancial.jsx'

export default function SectionTaxa() {
    return (
        <section className='bg-gradient-to-t from-slate-50 to-slate-100 lg:px-20 p-4'>

            <div className='grid grid-cols-1 lg:grid-cols-3 rounded-3xl lg:p-5 lg:mx-32 p-6'>

                <div className='col-span-1 mt-8 -mb-8 order-2 lg:order-1'>
                    <GuruFinanceiro/>
                </div>
                
                <div className='col-span-2 my-auto poppins text-slate-400 lg:text-xl text-md order-1 lg:order-2'>
                    
                    <p className='text-4xl mb-5 font-bold'>Não deixe o seu FGTS parado!</p>

                    O Saque-Aniversário FGTS antecipado é fácil, rápido e você não tem dor de cabeça com imprevistos. 
                    É uma das melhores opções de crédito sem comprometer sua renda com pagamento de parcelas!
                    
                </div>
          
            </div>

            <div className='grid grid-cols-3 lg:mx-4 lg:mb-32 mb-10'>

                <div className='lg:col-span-2 col-span-3 rounded-3xl bg-white p-7 my-4 lg:mr-6 shadow-lg'>
                    
                    <h1 className='text-slate-400 poppins text-3xl font-bold tracking-tight mb-8'>Taxa de juros mensal</h1>
                    
                    <div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4'>
                            <div className='col-span-1 poppins leading-5 text-slate-400 font-bold mr-2'>
                                Cartão de crédito
                            </div>

                            <div className='bg-slate-200 flex-1 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl bg-amber-500 poppins text-white text-right p-5'>
                                    28,00%
                                </div>
                            </div>
                        </div>
                        
                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4'>
                            <div className='lg:col-span-1 col-span-6 poppins leading-5 text-slate-400 font-bold mr-2'>
                                Cheque especial
                            </div>

                            <div className='bg-slate-200 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl w-[72%] bg-amber-400 poppins text-white text-right p-5'>
                                    12,50%
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4'>
                            <div className='col-span-1 poppins leading-5 text-slate-400 font-bold mr-2'>
                                Empréstimo Pessoal
                            </div>

                            <div className='bg-slate-200 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl w-[55%] bg-amber-300 poppins text-white text-right p-5'>
                                    8,00%
                                </div>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-6 grid-cols-1 my-4'>
                            <div className='col-span-1 poppins leading-5 text-blue-500 font-bold mr-2'>
                                Antecipação do saque FGTS
                            </div>

                            <div className='bg-slate-200 rounded-xl relative col-span-5 my-auto'>
                                <div className='py-1 rounded-xl lg:w-[14%] w-[20%] bg-blue-600 poppins text-white text-right p-5'>
                                    1,59%
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className='lg:col-span-1 col-span-3 rounded-3xl bg-blue-600 p-7 my-4 text-white poppins shadow-lg'>
                    
                    <h1 className='text-center poppins text-white lg:text-4xl text-xl'>
                        Juros a partir de
                    </h1>
                    <h2 className='Gochi text-center text-8xl lg:text-9xl text-white'>
                        1,59%<span className='text-3xl'> a.m.</span>
                    </h2>
                    <p className='text-center poppins text-white text-xl font-normal my-5'>
                        A melhor taxa em comparação com outras modalidades de empréstimo para o trabalhador brasileiro.
                    </p>

                </div>

            </div>

        </section>
    )
}