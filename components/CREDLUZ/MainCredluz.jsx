import Image from 'next/image'
import ImgMain from '../../public/img/pers_home.png'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { useState, useEffect } from "react"


export default function MainCredluz(){
    return(
        <main className='mt-32'>

            <section className='px-4 lg:px-24 grid grid-1 lg:grid-cols-3'>
                
                <div>
                    <h1 className='poppins'>Empréstimo</h1>
                    <h1>Pessoal Online</h1>
                    <div></div>
                    <p>Débito na conta de LUZ</p>
                    <p>Sem comprovação de renda, basta ser o titular da conta de energia da sua residencia.</p>
                </div>

                <div>
                    <figure></figure>
                    <figure></figure>
                </div>

                <div>
                    <div>Simulador</div>
                </div>

            </section>
        </main>
    )
}