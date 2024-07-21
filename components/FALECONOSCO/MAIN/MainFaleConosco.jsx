import tw from 'tailwind-styled-components'
import FormCF from '../FORM/Form'

const Title = tw.div`
    text-blue-700
    lg:text-5xl
    text-3xl
    text-center 
    lg:text-left 
    font-[600]
    tracking-tighter
`

export default function MainFC() {

    return (
        <main>
            <div className="px-6 lg:px-44 lg:pt-20 pt-20 grid grid-cols-1 lg:grid-cols-2">

                <div className='lg:my-auto  col-span-1'>

                    <div className='py-5'>
                        <Title>
                            <h1>Precisa de ajuda?</h1>
                            <h1>Conta para a gente!</h1>
                        </Title>
                    
                        <h2 className='text-slate-400 lg:text-4xl text-xl text-center lg:text-left font-normal tracking-tighter mt-5'>
                            Estamos prontos para te responder!
                        </h2>
                    </div>

                </div>

                <div className='lg:mt-6 col-span-1'>
                    <FormCF/>
                </div>
            
            </div>
           
        </main>
    )
}