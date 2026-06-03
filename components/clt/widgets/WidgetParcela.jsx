import { RiExchangeDollarFill } from "@react-icons/all-files/ri/RiExchangeDollarFill";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function WidgetParcela ({ClassName, motionProps = {}}){
    return(
        <motion.div {...motionProps} className={cn("absolute opacity-60 bg-blue-600 lg:rounded-xl rounded-lg shadow-lg",ClassName)}>
                                
            <div className="lg:mx-2 mx-1.5 lg:mt-2 mt-1.5 lg:rounded-lg rounded-md bg-blue-300 lg:p-2 p-1.5">
                                    
                <div className="text-center">
                    <RiExchangeDollarFill className="text-blue-600 lg:text-4xl text-3xl mx-auto mb-1"/>
                    <p className="lg:text-xs text-[9px] text-white tracking-tight lg:mb-2 mb-1 lg:font-semibold">Desconto em folha</p>
                </div>

                <div className="lg:text-xs text-[10px] text-blue-600 flex items-center justify-between text-center">
                    <div className="rounded-sm bg-slate-50 shadow-sm lg:p-1 p-0.5 lg:w-6 w-4.5">06</div>
                    <div className="rounded-sm bg-slate-50 shadow-sm lg:p-1 p-0.5 lg:w-6 w-4.5">12</div>
                    <div className="rounded-sm bg-slate-50 shadow-sm lg:p-1 p-0.5 lg:w-6 w-4.5">24</div>
                    <div className="rounded-sm bg-slate-50 shadow-sm lg:p-1 p-0.5 lg:w-6 w-4.5">36</div>
                </div>

            </div>

            <div className="lg:mt-2 mt-1.5 lg:rounded-b-lg rounded-b-md bg-blue-300">
                <div className="lg:p-3 p-2 text-center">       
                    <p className="lg:text-sm text-[12px] tracking-tighter font-semibold text-blue-600">
                        Parcelamento
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
