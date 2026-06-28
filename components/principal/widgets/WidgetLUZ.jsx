import { RiLightbulbFlashLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

export default function WidgetLUZ({ className }) {
    return (
        <div className={cn("z-10 w-44 select-none rounded-lg bg-white/30 opacity-80 p-2 backdrop-blur-sm", className)}>
            <div className="flex items-center justify-between">
                <RiLightbulbFlashLine className="rounded-full bg-white/50 p-1 text-4xl text-white" />
                <div>
                    <span className="text-right text-sm font-semibold leading-tight text-white">
                        Conta de LUZ
                    </span>
                    <p className="text-[10px] text-white text-end">
                        Até R$ 4.000,00
                    </p>
                </div>
            </div>

        </div>
    );
}
