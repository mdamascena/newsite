import tw from 'tailwind-styled-components'
import FormCF from '../FORM/Form'
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import Link from 'next/link'
import { useRouter } from 'next/router'

const Title = tw.div`
    py-5
    lg:text-5xl
    text-3xl
    text-center 
    lg:text-left 
    font-[600]
    tracking-tighter
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    from-blue-800 
    via-blue-500 
    to-blue-200 
    saturate-150
`
export default function MainFC() {

    const router = useRouter();
    const handleBack = () => {
        router.back();
    };

    return (
        <main>
            
            <div className="px-6 lg:px-44 lg:pt-20 pt-20 grid grid-cols-1 lg:grid-cols-2">
                
                <div className='lg:my-auto  col-span-1'>
                    
                    <button className='flex items-center lg:bottom-20 relative text-blue-500 bg-blue-50 lg:rounded-lg rounded-md py-1 px-4' onClick={handleBack}>
                        <HiOutlineArrowLongLeft className='mr-2' />
                        Voltar
                    </button>

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