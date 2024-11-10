export default function Taxa() {
    return(
        <section>
            <div className='grid grid-col-1 lg:grid-cols-2 container-custom lg:h-[100vh] h-[70vh] content-center'>
                
                <div className='col-span-1 mb-20 lg:mb-0'>
                    <h1 className='text-3xl lg:text-5xl text-blue-600 tracking-tighter'>
                        As melhores taxas você encontra aqui.
                    </h1>
                    <p className='text-md lg:text-xl mt-2 text-slate-400'>
                        Nós buscamos várias ofertas para você encontrar o empréstimo de que precisa!
                    </p>
                </div>

                <div className='col-span-1'>
                    <div className='grid grid-cols-3 h-64'>
                        <div className='col-span-1 bg-blue-600 rounded-md lg:mx-5 mx-2 mt-52'>
                            <div className='text-blue-600 text-center -top-8 relative lg:text-xl text-md'>1,59% a.m</div>
                            <div className='bottom-5 relative text-center text-white lg:px-2 lg:font-semibold lg:text-md text-sm'>
                                Empréstimo Valoreal
                            </div>
                        </div>

                        <div className='col-span-1 bg-slate-400 rounded-md lg:mx-5 mx-2 mt-40'>
                            <div className='text-slate-400 text-center -top-8 relative lg:text-xl text-md'>8,00% a.m</div>
                            <div className='bottom-5 relative text-center text-white lg:px-2 lg:font-semibold lg:text-md text-sm'>
                                Empréstimo pessoal
                            </div>
                        </div>

                        <div className='col-span-1 bg-slate-600 rounded-md lg:mx-5 mx-2'>
                            <div className='text-slate-600 text-center -top-8 relative lg:text-xl text-md'>28,00% a.m</div>
                            <div className='bottom-5 relative text-center text-white lg:px-5 lg:font-semibold lg:text-md text-sm px-2'>
                                Cartão de crédito
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

