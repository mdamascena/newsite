import { useEffect } from "react"
import { Progress } from "../../components/ui/progress"
import { PiClipboardTextLight } from "react-icons/pi"

export default function Chatform ({className, value, currentStep, stepsChart }) {

    return(
        <div className={`justify-center lg:justify-end grid ${className}`}>
                                        
            <div className="lg:bg-blue-950/50 lg:saturate-200 bg-black/30 lg:p-5 px-3 py-2 lg:m-3 mb-2 mx-2 lg:mx-0 lg:mb-0 lg:w-96 rounded-xl relative">
                                            
                <div className="items-center lg:mb-5 lg:flex hidden">
                    <PiClipboardTextLight className="p-1 bg-white rounded-md text-3xl text-blue-600"/>
                    <p className="text-white font-light ml-2">Preenchimento de proposta</p>
                </div>
                                            
                <Progress className='w-[85vw] lg:w-full' value={value} />
                                            
                <div className="grid grid-cols-2 items-center mt-2">                      
                    
                    <ul className="text-white text-xs col-span-1 hidden lg:block">
                        <li className={`${value >= 20 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 40 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 60 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 80 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 100 ? '' :'text-white/30'}`}>{stepsChart}</li>
                    </ul>
                    
                    <ul className="text-white text-sm col-span-1 lg:hidden block">
                        {/* Mobile */}
                        <li className={`${value >= 20 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 40 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 60 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 80 ? '' :'text-white/30'}`}>{stepsChart}</li>
                        <li className={`${value >= 100 ? '' :'text-white/30'}`}>{stepsChart}</li>
                    </ul>
                                                
                    <div className="text-end text-white lg:text-4xl text-xl col-span-1">
                        {value}%
                    </div>
                </div>

            </div>
                                    
        </div>

    )
}
