import { IoArrowForwardOutline } from "@react-icons/all-files/io5/IoArrowForwardOutline";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetSimulador({ClassName, motionProps = {}}) {
    
    return(
        <motion.div {...motionProps} className={cn("absolute lg:rounded-lg rounded-md bg-blue-300 z-50 shadow-xl opacity-80", ClassName)}>
            <div className="bg-blue-50 lg:rounded-lg rounded-md lg:m-2 m-1.5 text-slate-400 text-xs lg:p-2 p-1.5">
                <p className="mb-0 lg:text-[10px] text-[8px]">Parcela</p>
                <div className="flex items-center">
                    <p className="font-semibold lg:text-md text-xs tracking-tight">R$ 120,00</p>
                    <p className="ml-1 lg:text-[12px] text-[10px]">mês</p>
                </div>
            </div>

            <div className="bg-blue-50 rounded-md lg:m-2 m-1.5 lg:p-2 p-1.5 text-slate-400 text-xs">
                <p className="lg:text-[10px] text-[8px] lg:-mb-1">Crédito solicitado</p>
                <p className="font-semibold lg:text-lg text-[14px] tracking-tight mb-0">R$ 15.053,00</p>
            </div>

            <div className="bg-blue-700 rounded-b-lg text-blue-200 lg:p-3 p-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold lg:text-md text-sm">Solicitar</p>
                    <IoArrowForwardOutline/>
                </div>
            </div>
        </motion.div>
    )
}
