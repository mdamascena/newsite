import { useState } from "react";
import Acompanhamento from "../index.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router.js";

export default function Contrato() {
    const router = useRouter();
    const [abaSelecionada, setAbaSelecionada] = useState('ContratoAndamento');

    const handleBack = () => {
        router.push('/conta/acompanhamento/home');
    }

    return (
        <Acompanhamento>
            <div className="p-5 flex items-center border-b-3 border-transparent">
                <div className="w-full flex">
                    <IoMdArrowBack className="text-2xl text-gray-600 cursor-pointer" onClick={handleBack} />
                    <h1 className="w-full text-gray-600 font-medium text-center text-xl">Contratos</h1>
                </div>
            </div>

            <div className="flex justify-around items-center bg-gray-200">

                <div className={`w-full text-center p-[9px] cursor-pointer border-b-2 ${
                    abaSelecionada === 'ContratoAndamento'
                    ? 'text-blue-600 border-blue-600'
                    : 'border-transparent hover:bg-gray-300'
                }`}
                    onClick={() => setAbaSelecionada('ContratoAndamento')}
                >
                    <span className={` text-center w-full ${
                        abaSelecionada === 'ContratoAndamento'
                        ? 'text-blue-600'
                        : 'text-gray-600'}`}>Em andamento</span>
                </div>
                
                <div className={`w-full text-center p-[9px] cursor-pointer border-b-2 ${
                    abaSelecionada === 'ContratoFinalizado'
                    ? 'text-blue-600 border-blue-600'
                    : 'border-transparent hover:bg-gray-300'
                }`}
                    onClick={() => setAbaSelecionada('ContratoFinalizado')}
                >
                    <span className={` text-center w-full ${
                        abaSelecionada === 'ContratoFinalizado'
                        ? 'text-blue-600'
                        : 'text-gray-600'}`}>Finalizados</span>
                </div>
            </div>

            <div className="p-6">
                    {abaSelecionada === 'ContratoAndamento' ? (
                    <p className="text-gray-700">📄 Aqui estão os contratos em andamento...</p>
                    ) : (
                    <p className="text-gray-700">✅ Aqui estão os contratos finalizados.</p>
                    )}
                </div>
        </Acompanhamento>
    )
}
