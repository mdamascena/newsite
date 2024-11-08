import Image from "next/image"
import imgFGTS from '../../../public/img/pers_notificacao_pix.png'
import {HiCheck} from 'react-icons/hi'
import { BtnCalcRegras } from "../STYLES"

export default function SectionDescFGTS() {

    return (
        <section className="bg-slate-50 select-none">

            <div className="grid grid-cols-2 lg:pt-16 container-custom">
                
                <div className="lg:col-span-1 col-span-2 lg:order-2 lg:ml-10 px-2 grid content-center">
                    
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-blue-500 mb-2 pt-8 lg:pt-0">Condições Gerais</h2>
                        <p className="text-md lg:text-xl text-slate-400">O que precisa para fazer a antecipação do meu saque aniversário?</p>
                    </div>

                    <ul className="lg:text-xl text-md my-8">
                        <li className="flex my-2">
                            <HiCheck className="p-1 rounded-lg text-blue-600 bg-blue-200 text-3xl mr-1 lg:mr-2 my-auto" />
                            <span className="my-auto text-slate-400">Ser maior de 18 anos</span>
                        </li>
                        <li className="flex my-2">
                            <HiCheck className="p-1 rounded-lg text-blue-600 bg-blue-200 text-3xl mr-1 lg:mr-2 my-auto" />
                            <span className="my-auto text-slate-400">Possuir conta bancária</span>
                        </li>
                        <li className="flex my-2">
                            <HiCheck className="p-1 rounded-lg text-blue-600 bg-blue-200 text-3xl mr-1 lg:mr-2 my-auto" />
                            <span className="my-auto text-slate-400">Ter saldo em conta do FGTS</span>
                        </li>
                        <li className="flex my-2">
                            <HiCheck className="p-1 rounded-lg text-blue-600 bg-blue-200 text-3xl mr-1 lg:mr-2 my-auto" />
                            <span className="my-auto text-slate-400">Ser optante do Saque-Aniversário</span>
                        </li>
                    </ul>

                    <div className='flex justify-center lg:justify-start'>
                        <BtnCalcRegras>Contrate agora</BtnCalcRegras>
                    </div>
                </div>

                <figure className="lg:col-span-1 col-span-2 lg:order-1 px-8 lg:px-10 mt-5 lg:mt-0 lg:justify-end justify-center">
                    <Image src={imgFGTS} alt="" />
                </figure>

            </div>

        </section>
    )
}