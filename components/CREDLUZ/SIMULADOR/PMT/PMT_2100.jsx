import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import BtnVoltar from './BTN_VOLTAR'
import { Dialog, DialogTrigger } from '../../../ui/dialog_noclose'
import Modal from "./MODAL_CALC"

const Btn = tw.button`
    col-span-1    
    py-6 
    px-3 
    bg-btncalc
    saturate-150
    hover:bg-yellow-400
    focus:bg-yellow-500
    duration-300
    text-white 
    rounded-md
`
export default function PMT2100({setShowCalc}){

    const [valorPmt, setValorPmt] = useState('');
    const [valorFin, setValorFin] = useState('');

    const getValor = (vlr, pmt) =>{
        setValorFin(vlr)
        setValorPmt(pmt)
    }

    return(
        <div className='p-1'>

            <h2 className='text-center mb-2 poppins text-white'>Selecione o prazo desejado</h2>

            <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1 mb-2'>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='pmt_2000_16'>16 X</Btn>
                    <Btn id='pmt_2000_18'>18 X</Btn>
                </div>

                <div className="grid grid-cols-2 gap-1 mb-1">
                    <Btn id='pmt_2000_20'>20 X</Btn>
                    <Btn id='pmt_2000_22'>22 X</Btn>
                </div>

                <div className="grid grid-cols-1 gap-1">
                    <BtnVoltar setShowCalc={setShowCalc}/>
                </div>

            </div>
            
        </div>
    )
}