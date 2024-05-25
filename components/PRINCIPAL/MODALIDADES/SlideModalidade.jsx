import tw from 'tailwind-styled-components'

const LiMod = tw.li`
    select-none
    lg:pl-8
    py-3
    my-6
    text-slate-300
    hover:text-slate-500
    lg:hover:border-l-4 
    lg:hover:border-blue-400
    cursor-pointer
    duration-150
`
const Title = tw.h2`
    select-none
    text-2xl
    tracking-tight
    font-semibold
    text-center
    lg:text-left
    mb-3
    lg:mb-0
`
const Desc = tw.p`
    select-none
    font-light
    text-slade-300
    text-center
    lg:text-left
`

export default function ModSlide(){
    return(
        <section className='lg:mx-32 mx-4'>
            <div className='lg:mt-20 mt-10 lg:mx-52 mx-4'>
                <h1 className='text-blue-950 saturate-150 lg:text-4xl text-2xl font-semibold tracking-tight text-center'>
                    Descubra uma variedade de opções de empréstimos,<span className='text-blue-400'> tudo em um só lugar!</span> 
                </h1>
            </div>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:my-14 my-10'>
                    <div className='col-span-1 mx-12'>
                        <div className='bg-blue-500 rounded-2xl h-80 lg:h-full'>
                        </div>
                        
                        <div className='bg-yellow-500 rounded-2xl h-80 lg:h-full hidden'>
                        </div>
                        
                        <div className='bg-red-500 rounded-2xl h-80 lg:h-full hidden'>
                        </div>
                        
                        <div className='bg-green-500 rounded-2xl h-80 lg:h-full hidden'>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <ul>
                            <LiMod className='group/view'>
                                <Title>Empréstimo da conta de luz</Title>
                                <Desc>
                                    Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                    Antecipe seu saldo FGTS e realize o que quiser. S
                                </Desc>
                            </LiMod>
                            <LiMod className=''>
                                <Title>Antecipação saque FGTS</Title>
                                <Desc>
                                    Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                    Antecipe seu saldo FGTS e realize o que qu
                                </Desc>
                            </LiMod>
                            <LiMod className=''>
                                <Title>Empréstimo consignado INSS</Title>
                                <Desc>
                                    Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                    Antecipe seu saldo FGTS e real
                                </Desc>
                            </LiMod>
                            <LiMod className=''>
                                <Title>Empréstimo Pessoal</Title>
                                <Desc>
                                    Antecipe seu saldo FGTS e realize o que quiser. Sem parcela mensal
                                    Antecipe seu saldo FGTS e rea
                                </Desc>
                            </LiMod>
                        </ul>
                        <div className='lg:hidden'>
                            <div className='flex justify-center gap-2'>
                                <div className='h-2 w-12 bg-blue-600 rounded-2xl'/>
                                <div className='h-2 w-12 bg-blue-300 rounded-2xl'/>
                                <div className='h-2 w-12 bg-blue-300 rounded-2xl'/>
                                <div className='h-2 w-12 bg-blue-300 rounded-2xl'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}