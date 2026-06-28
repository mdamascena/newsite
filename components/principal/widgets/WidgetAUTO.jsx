import { FaCar } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function WidgetAUTO({ className }) {
    return (
        <div className={cn("z-10 w-44 select-none rounded-lg bg-white/30 opacity-80 p-2 backdrop-blur-sm", className)}>
            <div className="flex items-center justify-between">
                <FaCar className="rounded-full bg-white/50 p-1 text-4xl text-white" />
                <div>
                    <span className="text-sm font-semibold leading-tight text-white">
                        Refin de veículo
                    </span>
                    <p className="text-[10px] text-white text-end">
                        Até R$ 100.000,00
                    </p>
                </div>
            </div>

        </div>
    );
}
