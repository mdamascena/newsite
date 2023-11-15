import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { Poppins } from 'next/font/google';

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});


export default function ModalidadesFAQ(){
    return(
        <section className={mainFontFamily.className}>
            <div>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 shadow-xl'>
                        
                    </div>
                    <div className='col-span-1'></div>
                    <div className='col-span-1'></div>
                </div>
            </div>
        </section>
    )
}