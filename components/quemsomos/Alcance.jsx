import Image from 'next/image'
import PersV from '../../public/img/pers_v.png'


export default function Acance() {
    return (
        <section className='bg-slate-100'>
            
            <div className='container-custom'>

                <div className='grid grid-cols-2 py-32'>
                    <div className='col-span-1'>
                        <Image src={PersV} width={350} alt="" />
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-5xl'>
                            Estamos aqui para tornar seus objetivos mais fáceis de conquistar
                        </h1>
                        <p>
                            dedede
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    )
}