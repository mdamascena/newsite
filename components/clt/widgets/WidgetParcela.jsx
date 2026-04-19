import { RiExchangeDollarFill } from "react-icons/ri";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetParcela ({ClassName, motionProps = {}}){
    return(
        <motion.div {...motionProps} className={cn("absolute opacity-60 bg-blue-600 rounded-xl shadow-lg",ClassName)}>
                                
            <div className="mx-2 mt-2 rounded-lg bg-blue-300 p-2">
                                    
                <div className="text-center">
                    <RiExchangeDollarFill className="text-blue-600 text-4xl mx-auto mb-1"/>
                    <p className="text-xs text-white tracking-tight mb-2 font-semibold">Desconto em folha</p>
                </div>

                <div className="text-xs text-slate-400 flex items-center justify-between text-center">
                    <div className="rounded-sm bg-slate-50 shadow-sm p-1 w-6">06</div>
                    <div className="rounded-sm bg-slate-50 shadow-sm p-1 w-6">12</div>
                    <div className="rounded-sm bg-slate-50 shadow-sm p-1 w-6">24</div>
                    <div className="rounded-sm bg-slate-50 shadow-sm p-1 w-6">36</div>
                </div>

            </div>

            <div className="mt-2 rounded-b-lg bg-blue-300">
                <div className="p-3 text-center">       
                    <p className="text-sm tracking-tighter font-semibold text-blue-600">
                        Parcelamento
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
