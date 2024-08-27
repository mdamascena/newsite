import { Progress } from "../../../components/ui/progress"
import { PiClipboardTextLight } from "react-icons/pi"

export default function Chatform ({className}) {
    
    return(

        <div className={`${className}`}>
                                        
            <div className="bg-black/10 p-5 w-96 rounded-xl relative">
                                            
                <div className="flex items-center mb-5">
                    <PiClipboardTextLight className="p-1 bg-white rounded-md text-3xl text-blue-600"/>
                    <p className="text-white font-light ml-2">Preenchimento de dados</p>
                </div>
                                            
                <Progress value={1} />
                                            
                <div className="grid grid-cols-2 items-center mt-2">                      
                    <ul className="text-white text-xs col-span-1">
                        <li>Criar login</li>
                        <li className="text-white/50">Localidade</li>
                        <li className="text-white/50">Dados pessoais</li>
                        <li className="text-white/50">Envio de documentos</li>
                        <li className="text-white/50">Simulação</li>
                    </ul>
                                                
                    <div className="text-end text-white text-4xl col-span-1">
                        1%
                    </div>
                </div>

            </div>
                                    
        </div>

    )
}
