import Image from 'next/image'
import CalcFGTS from '../FGTS/SimuladorFGTS'
import ImgMain from '../../public/img/pers_home.png'

import styled from "styled-components"
import tw from 'tailwind-styled-components'
import { useState, useEffect } from "react"

const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500 
    text-2xl 
    lg:py-3 
    lg:px-32 
    py-3
    px-20
    poppins
    font-semibold
    rounded-xl
    text-white
    mt-8
    shadow-lg
    focus:outline-none
    hover:shadow-md
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:ring-offset-0
    hover:ring-4
    hover:ring-amber-200
`;

const EmpTitle = tw.h1`
    text-blue-600 
    lg:text-6xl
    text-[48px] 
    text-center 
    lg:text-left 
    font-extrabold
`;

export default function MainFGTS (){
    
    return(
        <main className="bgMainFGTS"> 

            <div className="px-8 lg:px-28 lg:pt-20 pt-28 grid grid-cols-1 lg:grid-cols-2"> 

                <div className='poppins lg:my-auto mb-10'>
                    <EmpTitle>Empréstimo</EmpTitle>
                    <h1 className='text-blue-600 lg:text-5xl text-[30px] text-center lg:text-left font-extrabold'>
                        Saque Aniversário <span className='font-bold tracking-tighter'>FGTS</span>
                    </h1>
                    
                    <p className='poppins text-blue-500 text-xl mt-3 lg:mt-7 lg:pr-36 lg:text-left text-center'>
                        Antecipe seu <b>FGTS</b>, até <span className='bg-red-700 contents absolute w-50 '></span><span className='text-2xl font-extrabold tracking-tighter'>12 parcelas</span> com a melhor taxa do mercado e sem descontos mensais!
                    </p>
                    
                    <div className='flex justify-center lg:justify-start'>
                        <BtnCalc className='shadow-amber-500 border-b-2 border-amber-300'>Contrate agora</BtnCalc> 
                    </div>
                     
                </div>

                <div className='-mb-1'>
                    <Image src={ImgMain}/>
                </div>
            </div>
        </main>
    
    )
}