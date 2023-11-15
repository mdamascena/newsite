import Image from 'next/image';
import Link from 'next/link';
import ModalidadesFAQ from '../MODALIDADE/ModalidadesFAQ';
import tw from 'tailwind-styled-components';
import { Poppins } from 'next/font/google';
import { CiSearch } from "react-icons/ci";

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

const InputSearch = tw.input`
    font-light 
    text-white 
    placeholder-white 
    tracking-tighter 
    border-none 
    focus:outline-none 
    focus:ring-1 
    focus:ring-blue-600 
    ring-0 
    p-3 
    lg:p-4 
    w-[40vh] 
    lg:w-[80vh] 
    rounded-xl 
    lg:rounded-3xl 
    bg-blue-500/50
`


export default function MainFAQ(){
    return(
        <main className={mainFontFamily.className}>
            <div className='bgMainPrincipal select-none'>
                <div className='text-white lg:py-44 py-36 px-4 lg:px-44 text-center'>
                    <h1 className='font-semibold tracking-tighter text-4xl lg:text-5xl'>
                        Ajuda <span className='font-thin'>| Valoreal</span>
                    </h1>
                    <h2 className='lg:text-2xl text-lg mt-5 font-thin'>Como podemos ajudar?</h2>
                    <form className='my-5'>
                        <div className='relative flex items-center justify-center'>
                            <div className='flex justify-end items-center'>
                                <CiSearch className='absolute text-4xl mr-3 cursor-pointer'/>
                                <InputSearch type='text' name='search' autoComplete='off' placeholder='Digite aqui sua dúvida'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ModalidadesFAQ/>

        </main>
    )
}