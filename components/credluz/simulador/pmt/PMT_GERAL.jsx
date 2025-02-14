import { BtnPmtGeral, BtnVolta } from '../../styles'
import { useEffect } from 'react'
import {HiArrowUturnLeft} from 'react-icons/hi2'
import React, { useState } from 'react'
import Modal from './DialogCalc';

export default function PMTGERAL({valor, showSimulador}){

    const [data, setData] = useState([])
    const [selectedParcela, setSelectedParcela] = useState(null)
    const [selectedPrazo, setSelectedPrazo] = useState(null)
    const [selectedValor, setSelectedValor] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/tabela.json');
          const json = await response.json();
          setData(json[valor]); // filtra os dados pelo valor específico
        };
    
        fetchData();
    }, [valor]);

    const handleSelectParcela = (prazo, parcela) => {
        setSelectedPrazo(prazo)
        setSelectedParcela(parcela)
        setSelectedValor(valor)
        setShowModal(true)
    };

    return(
        <div className='p-1'>

            <h2 className='text-center mb-2 text-white'>Selecione o prazo desejado</h2>

            <div className='rounded-lg bg-white/25 text-md py-4 px-1 mx-1 mb-2'>
                
                <div className="grid grid-cols-2 gap-1">
                    {data && data.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <BtnPmtGeral show={showModal} onClick={() => handleSelectParcela(item.prazo, item.parcela)}>
                                {`${item.prazo} X`}
                            </BtnPmtGeral>
                        </div>
                    ))}
                    <BtnVolta onClick={() => showSimulador('Valores')}>
                        <HiArrowUturnLeft className='text-xl mr-2'/>
                        Simular outro valor
                    </BtnVolta>
                </div>
                    
                <Modal show={showModal} parcela={selectedParcela} prazo={selectedPrazo} valor={selectedValor} showSimulador={() => showSimulador('Valores')}/>
            </div>
            
        </div>
    )
}