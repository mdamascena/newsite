import Image from "next/image"
import { useCallback, useEffect, useState } from 'react'
import map from '../../../public/img/map_br.png'
import{BsCheck} from 'react-icons/bs'
import{PiMapPinFill} from 'react-icons/pi'


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
        <section className="poppins bg-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-52 py-8 lg:py-16">
                <div className={`col-span-1 duration-1000 delay-300 ${movDesc}`}>
                    <h2 className="text-4xl text-blue-600 font-semibold mb-4 tracking-tight border-l-4 border-blue-500 pl-2">Regiões<br/>atendidas</h2>
                    <p className="text-2xl text-slate-400 mb-2 tracking-tight">Atendemos nas seguintes regiões do Brasil</p>
                    
                    <div className="text-slate-400 text-xl mt-8 mb-5 hidden lg:block">
                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">São Paulo</span>
                        </div>

                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Rio de Janeiro</span>
                        </div>

                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Ceará</span>
                        </div>

                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Pernanbuco</span>
                        </div>

                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Bahia</span>
                        </div>

                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Rio Grande do Norte</span>
                        </div>

                        <div className="mb-2 bg-slate-200 w-64 p-2 rounded-lg text-slade-400 flex items-center">
                            <BsCheck className="bg-blue-500 rounded-full text-white text-3xl"/>
                            <span className="ml-2">Rio Grande do Sul</span>
                        </div>
                    </div>

                </div>
                
                <div className={`col-span-1 flex lg:justify-end justify-center duration-1000 delay-150 ${movMap} py-3 lg:py-0`}>
                    <Image src={map} width={600} alt=''/> 
                </div>

                <div className="grid grid-cols-4 gap-2 lg:hidden">
                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">RJ</span>
                    </div>

                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">SP</span>
                    </div>

                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">CE</span>
                    </div>

                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">PE</span>
                    </div>

                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">BA</span>
                    </div>

                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">RN</span>
                    </div>

                    <div className="bg-slate-200 rounded-xl flex items-center p-1">
                        <PiMapPinFill className="text-blue-600 text-2xl"/>
                        <span className="poppins text-slate-400 text-lg px-1">RS</span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}