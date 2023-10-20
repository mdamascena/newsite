import Image from "next/image"
import { useCallback, useEffect, useState } from 'react'
import map from '../../../public/img/map_br.png'
import{BsCheck} from 'react-icons/bs'
import tw from 'tailwind-styled-components'

export default function Regioes() {

    const [movMap, setMovMap] = useState('opacity-0');
    const [movDesc, setMovDesc] = useState('opacity-0 -translate-y-[150px]');

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            
            if(window.scrollY > 2550){
                setMovMap('')
                setMovDesc('')
            }else{
                setMovMap('opacity-0')
                setMovDesc('opacity-0 translate-y-[150px]')
            }
        })
    },[])

    return(
        <section className="poppins">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-52 py-8 lg:py-16">
                <div className={`col-span-1 duration-1000 delay-300 ${movDesc}`}>
                    <h2 className="text-4xl text-blue-600 font-semibold mb-4 tracking-tight border-l-4 border-blue-500 pl-2">Regiões<br/>atendidas</h2>
                    <p className="text-2xl text-slate-400 mb-2 tracking-tight">Atendemos nas seguintes regiões do Brasil</p>
                    
                    <ul className="text-slate-400 text-xl mt-8 mb-5">
                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">São Paulo</span>
                        </li>

                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Rio de Janeiro</span>
                        </li>

                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Ceará</span>
                        </li>

                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Pernanbuco</span>
                        </li>

                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Bahia</span>
                        </li>

                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Rio Grande do Norte</span>
                        </li>

                        <li className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Rio Grande do Sul</span>
                        </li>
                    </ul>

                </div>
                <div className={`col-span-1 flex lg:justify-end justify-center duration-1000 delay-150 ${movMap}`}>
                    <Image src={map} width={600} alt=''/> 
                </div>
                
            </div>
        </section>
    )
}