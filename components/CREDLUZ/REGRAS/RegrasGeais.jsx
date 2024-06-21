import Image from "next/image"
import sma from '../../../public/img/men_happy.png'
import {HiOutlineIdentification} from 'react-icons/hi2'
import {LuUsers} from 'react-icons/lu'
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components'

const Card = tw.div`
    bg-blue-800 
    saturate-150 
    rounded-xl 
    shadow-lg
    px-5 
    py-3
    duration-1000
`
export default function Regras(){
    
    const [movImg, setMovImg] = useState ('opacity-0 scale-0');
    const [movCard, setMovCard] = useState ('-translate-x-[150px] lg:translate-x-[150px] opacity-0');
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
                setMovCard('-translate-x-[150px] lg:translate-x-[150px] opacity-0');
                setMovDesc('opacity-0')
            }
        });
    },[]);

    return(
        <section className='poppins px-8 lg:px-44 bg-white select-none'>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 py-16'>
                
                <div className='col-span-1 mb-8 lg:mb-0 flex lg:justify-end'>
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
                        <Card className={`delay-200 ${movCard}`}>
                            <div>
                                <div className='border-b-2 border-blue-300 flex py-2 mb-8'>
                                    <LuUsers className='inline-block align-middle text-4xl text-blue-300 mr-2'/>
                                    <h3 className='text-blue-300 inline-block align-middle'>Perfil básico</h3>
                                </div>
                                <div>
                                    <ul className="text-white text-sm leading-tight">
                                        <li className="mb-1">✔ Ser titular da conta de luz</li>
                                        <li className="mb-1">✔ Idade mínima de 21 anos</li>
                                        <li className="mb-1">✔ Idade máxima de 84 anos</li>
                                        <li className="mb-1">✔ Possuir conta bancária, poupança ou corrente</li> 
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className={`delay-700 ${movCard}`}>
                            <div>
                                <div className='border-b-2 border-blue-300 flex py-2 mb-8'>
                                    <HiOutlineIdentification className='inline-block align-middle text-4xl text-blue-300 mr-2'/>
                                    <h3 className='text-blue-300 inline-block align-middle'>Documentos</h3>
                                </div>
                                <ul className="text-white text-sm leading-tight">
                                    <li className="mb-1">✔ Identidade e CPF</li>
                                    <li className="mb-1">✔ A última conta de luz</li>
                                    <li className="mb-1">✔ Dados bancários</li>
                                    <li className="mb-1">✔ Dois contatos de referência pessoal</li>
                                </ul>
                            </div>
                        </Card>

                    </div>
                </div>

            </div>
            
        </section>
        
    )
}