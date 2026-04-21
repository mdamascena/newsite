import { IoArrowForwardOutline } from "@react-icons/all-files/io5/IoArrowForwardOutline";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetSimulador({ClassName, motionProps = {}}) {
    
    return(
        <motion.div {...motionProps} className={cn("absolute rounded-lg bg-blue-300 z-50 shadow-xl opacity-80", ClassName)}>
            <div className="bg-blue-50 rounded-lg m-2 text-slate-400 text-xs p-2">
                <p className="mb-0 text-[10px]">Simulação</p>
                <div className="flex items-center">
                    <p className="font-semibold text-md tracking-tight">R$ 120,00</p>
                    <p className="ml-1">Parcela</p>
                </div>
            </div>

            <div className="bg-blue-50 rounded-md m-2 p-2 text-slate-400 text-xs">
                <p className="text-[10px] -mb-1">Crédito solicitado</p>
                <p className="font-semibold text-lg tracking-tight mb-0">R$ 15.053,00</p>
            </div>

            <div className="bg-blue-700 rounded-b-lg text-blue-200 p-3">
                <div className="flex items-center justify-between">
                    <p className="font-semibold">Solicitar</p>
                        <IoArrowForwardOutline/>
                    </div>
            </div>
        </motion.div>
    )
}
