import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { Dialog, DialogTrigger } from "../../../ui/dialog";
import Modal from "./MODAL_CALC";

const Btn = tw.button`
    col-span-1    
    py-6 
    px-3 
    bg-btncalc
    saturate-150
    hover:bg-yellow-400
    active:bg-yellow-500
    duration-300
    text-white 
    rounded-md
`;
const BtnVolta = tw.button`
    col-span-1    
    py-2
    flex-1
    justify-center 
    items-center
    saturate-150
    bg-blue-700
    hover:bg-blue-800 
    focus:bg-blue-950
    duration-300
    text-white 
    rounded-md
`;
export default function PMT700({ setShowCalc }) {
  const [valor, setValor] = useState("700");
  const [parcela, setParcela] = useState("");

  const getValor = (pmt) => {
    setParcela(pmt);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/tabela.json");
      const json = await response.json();
      setData(json[valor]);
    };

    fetchData();
  }, []);

  return (
    <div className="p-1">
      <h2 className="text-center mb-2 poppins text-white fo">
        Selecione o prazo desejado
      </h2>

      <div className="rounded-lg bg-white/25 text-md py-4 px-1 mx-1 mb-2">
        <Dialog>
          {data && data.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-1 mb-1">
                <DialogTrigger asChild>
                  <Btn>{item.prazo}X</Btn>
                </DialogTrigger>
              </div>
            ))}

          {/* <DialogTrigger asChild>
                            <Btn>12 X</Btn>
                        </DialogTrigger>

                        <DialogTrigger asChild>
                            <Btn>15 X</Btn>
                        </DialogTrigger> */}

          {/* <div className="grid grid-cols-2 gap-1 mb-1">

                        <DialogTrigger asChild>
                            <Btn>16 X</Btn>
                        </DialogTrigger>

                        <DialogTrigger asChild>
                            <Btn>18 X</Btn>   
                        </DialogTrigger>
    
                    </div> */}

          <div className="grid grid-cols-2 gap-1">
            {/* <DialogTrigger asChild>
                            <Btn>20 X</Btn>   
                        </DialogTrigger> */}

            <BtnVolta id="BtnVolta" onClick={() => setShowCalc("Valores")}>
              <HiArrowUturnLeft className="text-xl mx-auto" />
              Simular outro valor
            </BtnVolta>
          </div>

          <Modal
            valor={valor}
            parcela={data}
            setShowCalc={setShowCalc}
          />
        </Dialog>
      </div>
    </div>
  );
}
