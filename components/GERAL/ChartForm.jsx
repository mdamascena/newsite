import { Progress } from "../ui/progress"
import { PiClipboardTextLight } from "react-icons/pi"
import {CircularProgress} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Chatform ({className}) {
    const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 20));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return(

        <div className={`justify-center lg:justify-end grid ${className}`}>
                                        
            <div className="lg:bg-blue-950/50 lg:saturate-200 bg-black/30 lg:p-5 px-3 py-2 m-3 lg:w-96 w-[22rem] rounded-xl relative">
                                            
                <div className="items-center lg:mb-5 hidden lg:flex">
                    <PiClipboardTextLight className="p-1 bg-white rounded-md text-3xl text-blue-600"/>
                    <p className="text-white font-light ml-2">Preenchimento de proposta</p>
                </div>
                                            
                <Progress value={value} />

                {/* <CircularProgress
                    aria-label="Loading..."
                    size="lg"
                    value={value}
                    color="warning"
                    showValueLabel={true}
                /> */}
                                            
                <div className="grid grid-cols-2 items-center mt-2">                      
                    
                    <ul className="text-white text-xs col-span-1 hidden lg:block">
                        <li className={`${value >= 20 ? '' :'text-white/30'}`}>Criar login</li>
                        <li className={`${value >= 40 ? '' :'text-white/30'}`}>Localidade</li>
                        <li className={`${value >= 60 ? '' :'text-white/30'}`}>Dados pessoais</li>
                        <li className={`${value >= 80 ? '' :'text-white/30'}`}>Envio de documentos</li>
                        <li className={`${value >= 100 ? '' :'text-white/30'}`}>Simulação</li>
                    </ul>
                    
                    <ul className="text-white text-sm col-span-1 lg:hidden block">
                        {/* Mobile */}
                        <li className={`${value === 20 ? '' : 'hidden'}`}>Criar login</li>
                        <li className={`${value === 40 ? '' : 'hidden'}`}>Localidade</li>
                        <li className={`${value === 60 ? '' : 'hidden'}`}>Dados pessoais</li>
                        <li className={`${value === 80 ? '' : 'hidden'}`}>Envio de documentos</li>
                        <li className={`${value === 100 ? '' : 'hidden'}`}>Simulação</li>
                    </ul>
                                                
                    <div className="text-end text-white lg:text-4xl text-xl col-span-1">
                        {value}%
                    </div>
                </div>

            </div>
                                    
        </div>

    )
}
