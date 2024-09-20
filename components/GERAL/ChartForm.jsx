import { Progress } from "../../components/ui/progress"
import { PiClipboardTextLight } from "react-icons/pi"
import { BsCheckLg } from "react-icons/bs"

export default function Chatform ({className, value }) {

    return(

        <div className={`justify-center lg:justify-end grid ${className}`}>
                                        
            <div className="lg:bg-blue-950/50 lg:saturate-200 bg-black/30 lg:p-5 px-3 py-2 m-3 lg:w-96 w-[22rem] rounded-xl relative">
                                            
                <div className="items-center lg:mb-5 lg:flex hidden">
                    <PiClipboardTextLight className="p-1 bg-white rounded-md text-3xl text-blue-600"/>
                    <p className="text-white font-light ml-2">Preenchimento de proposta</p>
                </div>
                                            
                <Progress value={value} />
                                            
                <div className="grid grid-cols-2 items-center mt-2">                      
                    
                    <ul className="text-white text-xs col-span-1 hidden lg:block">
                        <li className={`${value >= 20 ? '' :'text-white/30'}`}>Registrar conta</li>
                        <li className={`${value >= 40 ? '' :'text-white/30'}`}>Perfil ocupacional</li>
                        <li className={`${value >= 60 ? '' :'text-white/30'}`}>Gênero</li>
                        <li className={`${value >= 80 ? '' :'text-white/30'}`}>Registro da conta de luz</li>
                        <li className={`${value >= 100 ? '' :'text-white/30'}`}>Contato e localidade</li>
                    </ul>
                    
                    <ul className="text-white text-sm col-span-1 lg:hidden block">
                        {/* Mobile */}
                        <li className={`${value === 0 ? '' : 'hidden'}`}>Criar conta de acesso</li>
                        <li className={`${value === 20 ? '' : 'hidden'}`}>Perfil ocupacional</li>
                        <li className={`${value === 40 ? '' : 'hidden'}`}>Gênero</li>
                        <li className={`${value === 60 ? '' : 'hidden'}`}>Conta de luz</li>
                        <li className={`${value === 80 ? '' : 'hidden'}`}>Contato e localidade</li>
                    </ul>
                                                
                    <div className="text-end text-white lg:text-4xl text-xl col-span-1">
                        {value}%
                    </div>
                </div>

            </div>
                                    
        </div>

    )
}
