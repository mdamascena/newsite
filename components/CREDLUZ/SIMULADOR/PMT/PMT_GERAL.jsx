import tw from 'tailwind-styled-components'
import { useEffect } from 'react'
import {HiArrowUturnLeft} from 'react-icons/hi2'
import React, { useState } from 'react'
import { Dialog, DialogTrigger } from '../../../ui/dialog_noclose'
import Modal from "./MODAL_CALC"

const Btn = tw.button`
    w-full
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
const BtnVolta = tw.button`
    w-full
    py-6
    px-3
    col-span-2
    flex
    justify-center 
    items-center
    saturate-150
    bg-blue-700
    hover:bg-blue-800 
    focus:bg-blue-950
    duration-300
    text-white 
    rounded-md
`

export default function PMTGERAL({valor, showSimulador}){

    const [data, setData] = useState([]);
    const [selectedParcela, setSelectedParcela] = useState(null);
    const [selectedPrazo, setSelectedPrazo] = useState(null)
    const [selectedValor, setSelectedValor] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/tabela.json');
          const json = await response.json();
          setData(json[valor]); // filtra os dados pelo valor específico
        };
    
        fetchData();
    }, [valor]);

    const handleSelectParcela = (prazo, parcela) => {
        setSelectedPrazo(prazo);
        setSelectedParcela(parcela);
        setSelectedValor(valor)
    };

    return(
        <div className='p-1'>

            <h2 className='text-center mb-2 poppins text-white'>Selecione o prazo desejado</h2>

            <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1 mb-2'>
                
                <Dialog>
                    <div className="grid grid-cols-2 gap-1">
                        
                        {data && data.map((item, index) => (
                        
                            <div key={index} className="flex justify-center">
                                <DialogTrigger asChild>
                                    <Btn onClick={() => handleSelectParcela(item.prazo, item.parcela)}>
                                        {`${item.prazo} X`}
                                    </Btn>
                                </DialogTrigger>
                            </div>
                        ))}
                        <BtnVolta onClick={() => showSimulador('Valores')}>
                            <HiArrowUturnLeft className='text-xl mr-2'/>
                            Simular outro valor
                        </BtnVolta>
                    </div>
                    
                    <Modal parcela={selectedParcela} prazo={selectedPrazo} valor={selectedValor} showSimulador={() => showSimulador('Valores')}/>
                </Dialog>
                
            </div>
            
        </div>
    )
}