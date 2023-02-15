import Image from 'next/image'
import CalcFGTS from '../components/SimuladorFGTS'
import ImgMain from '../public/img/p_home.png'
import Button from "@material-tailwind/react/Button"
import styled from "styled-components"
import tw from 'tailwind-styled-components'
import { useState, useEffect } from "react"

const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500 
    text-2xl 
    lg:py-3 
    lg:px-28 
    py-2 
    px-20 
    flex 
    poppins 
    font-semibold 
    rounded-full 
    text-white 
    mt-8
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:ring-offset-0
    hover:ring-4
    hover:ring-amber-200
`;

export default function MainFGTS (){
    return(
        <main className="bgMainFGTS"> 

            <div className="px-5 lg:px-28 lg:pt-20 pt-28 grid grid-cols-1 lg:grid-cols-2"> 
                <div className='poppins lg:my-auto mb-10'>
                    <h1 className='text-blue-600 lg:text-5xl text-[38px] text-center lg:text-left font-extrabold'>Empréstimo</h1>
                    <h1 className='text-blue-600 lg:text-5xl text-[30px] text-center lg:text-left font-extrabold'>Saque Aniversário FGTS</h1>
                    
                    <p className='poppins text-slate-400 text-xl mt-7 lg:pr-36 lg:text-left text-center'>
                        Antecipe seu <b>FGTS</b>, até 10 parcelas com a melhor taxa do mercado e sem descontos mensais!
                    </p>
                    
                    <CalcFGTS/>
                    
                    <p className='text-xs text-slate-400 lg:pr-28 lg:text-left text-center m-0'>
                        Esta simulação traz valores aproximados. Para calcular o valor exato, informe seus dados para iniciar seu atendimento.
                    </p>
                </div>

                <div className='hidden lg:block -mb-2 ml-2'>
                    <Image src={ImgMain}/>
                </div>
            </div>

        </main>
    )
}