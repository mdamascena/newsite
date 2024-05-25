import { PiWarningCircleLight } from "react-icons/pi";

export default function Input (props){
    return(
        <div>
            <div className="relative">
                <input className="focus:outline-none focus:border-blue-600 rounded-lg bg-slate-200 p-3 border border-slate-400 placeholder:text-slate-400 placeholder:font-extralight placeholder:text-sm"
                    placeholder={props.placeholder}/>
                
                
                
                <span className="absolute top-4 left-[90%]">
                    <PiWarningCircleLight className="text-red-600 text-xl"/>
                </span>
                
            </div>
            <label className="text-red-600 text-sm font-light">Mensagem de erro</label>
        </div>
    );
}