import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetLimite({ClassName, motionProps = {}}){
    return(
        <motion.div {...motionProps} className={cn("bg-slate-50 rounded-lg p-2 absolute z-50 shadow-lg text-slate-500 opacity-80", ClassName)}>
            
            <p className="text-xs mb-1 font-semibold">
                Selecionar limite
            </p>

            <div className="rounded-md w-40 bg-slate-300 mb-1">
                <div className="rounded-l-md py-0.5 items-center h-4 bg-blue-500 w-32"/>
            </div>

            <div className="bg-slate-300 rounded-lg p-2">
                <div className=" flex items-center">
                    <p className="tracking-tight text-sm font-semibold">
                        R$ 15.053,00
                    </p>
                    <p className="text-[10px] ml-5">
                        Crédito
                    </p>
                </div>
                
            </div>

        </motion.div>
    )
}
