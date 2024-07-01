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

export default function Valor1000({setShowCalc}){

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

                <Dialog>
                    
                    <div className="grid grid-cols-2 gap-1 mb-1">
                        <DialogTrigger asChild>
                            <Btn onClick={() => getValor('R$ 1.000,00','15X de R$ 192,09')}>15 X</Btn>
                        </DialogTrigger>

                        <DialogTrigger asChild>
                            <Btn onClick={() => getValor('R$ 1.000,00','16X de R$ 188,94')}>16 X</Btn>
                        </DialogTrigger>
                    </div>

                    <div className="grid grid-cols-2 gap-1 mb-1">
                        <DialogTrigger asChild>
                            <Btn onClick={() => getValor('R$ 1.000,00','18x de R$ 184,01')}>18 X</Btn>
                        </DialogTrigger>

                        <DialogTrigger asChild>
                            <Btn onClick={() => getValor('R$ 1.000,00','20x de R$ 181,97')}>20 X</Btn>
                        </DialogTrigger>
                    </div>

                    <div className="grid grid-cols-1 gap-1">
                        <BtnVoltar setShowCalc={setShowCalc}/>
                    </div>
                    
                    <Modal valor={valorFin} pmt={valorPmt} setShowCalc={setShowCalc}/>

                </Dialog>
                
            </div>

        </div>
    )
}