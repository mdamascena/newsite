import { SiPix } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function WidgetPIX({ className }) {
    return (
        <div className={cn("z-10 w-44 select-none rounded-lg bg-white/30 opacity-80 p-2 backdrop-blur-sm", className)}>
            <div className="flex items-center justify-between">
                <SiPix className="rounded-full bg-white/50 p-1 text-4xl text-white" />
                <div>
                    <span className="text-right text-sm font-semibold leading-tight text-white">
                        PIX Parcelado
                    </span>
                    <p className="text-[10px] text-white text-end">
                        Liberação rápida
                    </p>
                </div>
            </div>

        </div>
    );
}
