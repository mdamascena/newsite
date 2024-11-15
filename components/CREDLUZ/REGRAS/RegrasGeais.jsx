import Image from "next/image"
import sma from '../../../public/img/men_happy.png'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {LuUsers} from 'react-icons/lu'
import { useEffect, useState } from 'react'
import { CardRegras } from "../STYLES"
import { HiCheck } from "react-icons/hi"

export default function Regras(){
    
    const [movImg, setMovImg] = useState ('opacity-0 scale-0');
    const [movCard, setMovCard] = useState ('-translate-x-[50px] lg:translate-x-[50px] opacity-0');
    const [movDesc, setMovDesc] = useState ('opacity-0');

    useEffect(
        () =>{
            window.addEventListener('scroll', () => {
            
            if(window.scrollY > 1950){
                setMovImg('');
                setMovCard('');
                setMovDesc('');
            } else{
                setMovImg('opacity-0 scale-0');
                setMovCard('-translate-x-[50px] lg:translate-x-[50px] opacity-0');
                setMovDesc('opacity-0')
            }
        });
    },[]);

    return(
        <section className='bg-white select-none'>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:py-36 py-10 container-custom'>
                
                <div className='col-span-1 mb-8 lg:mb-0 flex lg:justify-start'>
                    <Image className={`rounded-3xl duration-1000 ${movImg}`} src={sma} width={584} alt='' />
                </div>
                
                <div className='col-span-1 lg:pl-5 lg:my-auto'>    
                    <div className={`duration-1000 delay-500 ${movDesc}`}>
                        <h2 className="text-4xl text-blue-600 font-semibold mb-2 tracking-tighter">Condiçoes Gerais</h2>
                        <p className=" text-slate-400 my-6">
                            Essa é uma modalidade de empréstimo 100% online. 
                            Feito para quem tem conta de energia em seu nome. Não precisa comprovar renda. 
                            Veja a seguir o que você vai precisar para contratar.
                        </p>
                        
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <CardRegras className={`delay-200 ${movCard} duration-400`}>
                            <div>
                                <div className='border-b-2 border-blue-300 flex items-center py-2 mb-5'>
                                    <LuUsers className='inline-block align-middle text-4xl text-blue-300 mr-2'/>
                                    <h3 className='text-blue-300 inline-block align-middle'>Perfil básico</h3>
                                </div>
                                <div>
                                    <ul className="text-white text-sm leading-tight">
                                        <li className="mb-1 flex items-center">
                                            <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>Ser titular da conta de luz
                                        </li>
                                        <li className="mb-1 flex items-center">
                                            <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>Idade mínima de 21 anos
                                        </li>
                                        <li className="mb-1 flex items-center">
                                            <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>Idade máxima de 84 anos
                                        </li>
                                        <li className="mb-1 flex items-center">
                                            <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>Possuir conta bancária
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </CardRegras>

                        <CardRegras className={`delay-700 ${movCard} duration-400`}>
                            <div>
                                <div className='border-b-2 border-blue-300 flex items-center py-2 mb-5'>
                                    <HiOutlineIdentification className='inline-block align-middle text-4xl text-blue-300 mr-2'/>
                                    <h3 className='text-blue-300 inline-block align-middle'>Documentos</h3>
                                </div>
                                <ul className="text-white text-sm leading-tight">
                                    <li className="mb-1 flex items-center">
                                        <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>Identidade
                                    </li>
                                    <li className="mb-1 flex items-center">
                                        <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>CPF
                                    </li>
                                    <li className="mb-1 flex items-center">
                                        <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>A última conta de luz
                                    </li>
                                    <li className="mb-1 flex items-center">
                                        <HiCheck className="bg-blue-300 p-0.1 rounded-md text-xl mr-1"/>Dados bancários
                                    </li>
                                </ul>
                            </div>
                        </CardRegras>

                    </div>
                </div>

            </div>
            
        </section>
        
    )
}