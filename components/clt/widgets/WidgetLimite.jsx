import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetLimite({ClassName, motionProps = {}}){
    return(
        <motion.div {...motionProps} className={cn("bg-slate-50 lg:rounded-lg rounded-md lg:p-2 p-1.5 absolute z-50 shadow-lg text-slate-500 opacity-80", ClassName)}>
            
            <p className="lg:text-xs text-[9px] lg:mb-1 mb-0.5 font-semibold">
                Selecionar limite
            </p>

            <div className="lg:rounded-md rounded-sm lg:w-40 w-28 bg-slate-300 mb-1">
                <div className="rounded-l-md py-0.5 items-center lg:h-4 h-2.5 bg-blue-500 lg:w-32 w-22"/>
            </div>

            <div className="bg-slate-300 lg:rounded-lg rounded-md lg:p-2 p-1.5">
                <div className=" flex items-center">
                    <p className="tracking-tight lg:text-sm text-[10px] font-semibold">
                        R$ 15.053,00
                    </p>
                    <p className="lg:text-[10px] text-[8px] lg:ml-5 ml-1.5">
                        Crédito
                    </p>
                </div>
                
            </div>

        </motion.div>
    )
}
