import Image from 'next/image'
import tw from 'tailwind-styled-components'

export default function CondicoesINSS() {

    return (
        <section className='-mt-8 -mb-28 relative z-10'>
            <div className='bg-blue-600 text-white lg:rounded-3xl rounded-2xl text-center lg:py-16 py-8'>
                
                <div className='grid grid-cols-3'>

                    <div className='col-span-1'>
                        <p className='lg:text-sm text-[10px] tracking-tight font-extralight'>Prazo de até:</p>
                        <h3 className='lg:text-7xl text-4xl font-bold tracking-tight'>84X</h3>
                    </div>
                    <div className='col-span-1'>
                        <p className='lg:text-sm text-[10px] tracking-tight font-extralight'>Juros a partir:</p>
                        <h3 className='lg:text-7xl text-4xl font-bold tracking-tight'>1,49%</h3>
                    </div>
                    <div className='col-span-1'>
                        <p className='lg:text-sm text-[10px] tracking-tight font-extralight'>Margem de até:</p>
                        <h3 className='lg:text-7xl text-4xl font-bold tracking-tight'>40%</h3>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}