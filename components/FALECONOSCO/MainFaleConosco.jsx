import { Title } from './STYLES'
import FormCF from './form/Form'
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { useRouter } from 'next/router'
import Ripple from "../ui/ripple";


export default function MainFC() {

    const router = useRouter();
    const handleBack = () => {
        router.back();
    };

    return (
        <main className=''>
            
            <div className="container-custom lg:py-36 py-12 pt-20 grid grid-cols-1 lg:grid-cols-2 ">
                
                <div className='lg:my-auto col-span-1'>
                    
                    <button className='flex items-center lg:bottom-20 relative text-blue-500 bg-blue-50 lg:rounded-lg rounded-md py-1 px-4' onClick={handleBack}>
                        <HiOutlineArrowLongLeft className='mr-2' />
                        Voltar
                    </button>

                    <div className='lg:py-5 py-2'>
                        <Title>
                            <h1>Precisa de ajuda?</h1>
                            <h1>Conta para a gente!</h1>
                        </Title>
                    
                        <h2 className='text-slate-400 lg:text-4xl text-xl text-center lg:text-left font-normal tracking-tighter lg:mt-5'>
                            Estamos prontos para te responder!
                        </h2>
                    </div>

                </div>

                <div className='col-span-1'>
                    <FormCF/>
                </div>
                
            </div>
            
        </main>
    )
}