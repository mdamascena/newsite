import tw from 'tailwind-styled-components'

const Btn = tw.button`
    col-span-1    
    py-7 
    px-3 
    bg-[#000055ea]
    saturate-150
    hover:bg-yellow-400
    focus:bg-yellow-500
    focus:scale-105
    duration-300
    hover:scale-105 
    text-white 
    rounded-md
`

export default function SimuladorCredLuz() {

    return (

        <div className="max-w-md">
            
            <h1 className='text-center text-xl text-white mb-3 poppins'>Simule seu Empréstimo</h1>
            
            <div className='p-1 rounded-lg bg-base-calc'>

                <h2 className='text-center mb-2 poppins text-white'>Qual valor desejado?</h2>

                <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1'>
                    <div className="grid grid-cols-3 gap-1 mb-1">
                        <Btn htmlFor="btnVlr_700">R$ 700</Btn>
                        <Btn htmlFor="btnVlr_800">R$ 800</Btn>
                        <Btn htmlFor="btnVlr_900">R$ 900</Btn>
                    </div>

                    <div className="grid grid-cols-3 gap-1 mb-1">
                        <Btn htmlFor="btnVlr_1000">R$ 1000</Btn>
                        <Btn htmlFor="btnVlr_1100">R$ 1100</Btn>
                        <Btn htmlFor="btnVlr_1200">R$ 1200</Btn>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                        <Btn htmlFor="btnVlr_1300">R$ 1300</Btn>
                        <Btn htmlFor="btnVlr_1400">R$ 1400</Btn>
                        <Btn htmlFor="btnVlr_1500">R$ 1500</Btn>
                    </div>
                </div>
            </div>

            <div className='bg-base-calc p-2 my-2 rounded-lg border-l-4 border-yellow-500'>
                <p className='lg:text-xs text-[10px] text-white text-center'>
                    Taxa equivalente ao CET mensal de 16,46% e anual de 522,16%.
                    Exemplo: R$ 1.000,00, em 18 meses com parcelas de R$ 184,01.
                </p>
            </div>
        </div>
    
    )
}