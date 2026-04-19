import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetLimite({ClassName, motionProps = {}}){
    return(
        <motion.div {...motionProps} className={cn("bg-slate-50 rounded-lg p-2 absolute z-50 shadow-lg text-slate-500 opacity-80", ClassName)}>
            
            <p className="text-xs mb-1 font-semibold">
                Limite total
            </p>

            <div className="bg-slate-300 rounded-lg p-2">
                <div className=" flex items-center">
                    <p className="tracking-tight text-sm font-semibold">
                        R$ 32.690,00
                    </p>
                    <p className="text-[10px] font-extralight ml-2">
                        Disponível
                    </p>
                </div>
                <p className="tracking-tight text-[10px] mt-1 mb-0">
                    Valor válido por 7 dias
                </p>
            </div>

        </motion.div>
    )
}
