import Image from "next/image"
import ImgFGTS from '../../public/img/modelo_cel.png'
import {FaCheck} from 'react-icons/fa'
import tw from 'tailwind-styled-components'

const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500
    text-xl 
    lg:text-2xl 
    lg:py-3
    lg:px-12
    py-3
    lg:flex-none
    flex-1
    poppins
    font-semibold
    rounded-xl
    text-white
    my-5
    shadow-md
    shadow-amber-400 
    border-b-2 
    border-amber-300
    focus:outline-none
    hover:shadow-md
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:ring-offset-0
    hover:ring-4
    hover:ring-amber-200
`;

export default function SectionDescFGTS() {

    return (
        <section className="bg-slate-50">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-36 lg:px-6">
                
                <div className="col-span-1 poppins lg:order-2 lg:ml-10 lg:my-auto">

                    <div className="mb-10">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-500 mb-2">Condições Gerais</h2>
                        <p className="text-md lg:text-xl text-blue-400">O que precisa para fazer a antecipação do meu saque aniversário?</p>
                    </div>

                    <ul className="mt-5 lg:text-xl text-md">
                        <li className="flex my-2">
                            <FaCheck className="p-1 rounded-full text-blue-600 bg-blue-200 text-3xl mr-1 lg:mx-2 my-auto"/>
                            <span className="my-auto text-blue-500 text-sm">Ser maior de 18 anos ou emancipado</span>
                        </li>
                        <li className="flex my-2">
                            <FaCheck className="p-1 rounded-full text-blue-600 bg-blue-200 text-3xl mr-1 lg:mx-2 my-auto"/>
                            <span className="my-auto text-blue-500 text-sm">Ter situação regular com a Receita Federal</span>
                        </li>
                        <li className="flex my-2">
                            <FaCheck className="p-1 rounded-full text-blue-600 bg-blue-200 text-3xl mr-1 lg:mx-2 my-auto"/>
                            <span className="my-auto text-blue-500 text-sm">Possuir conta corrente ou poupança</span>
                        </li>
                        <li className="flex my-2">
                            <FaCheck className="p-1 rounded-full text-blue-600 bg-blue-200 text-3xl mr-1 lg:mx-2 my-auto"/>
                            <span className="my-auto text-blue-500 text-sm">Ter saldo do FGTS em conta ativa ou inativa</span>
                        </li>
                        <li className="flex my-2">
                            <FaCheck className="p-1 rounded-full text-blue-600 bg-blue-200 text-3xl mr-1 lg:mx-2 my-auto"/>
                            <span className="my-auto text-blue-500 text-sm">Ser optante do Saque-Aniversário do FGTS</span>
                        </li>
                    </ul>

                    <div className='flex justify-center lg:justify-start'>
                        <BtnCalc>Contrate agora</BtnCalc> 
                    </div>

                </div>

                <Image src={ImgFGTS} className="col-span-1 lg:order-1"/>
            
            </div>

        </section>
    )
}