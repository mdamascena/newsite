import { FaUserTie } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function WidgetCLT({ className }) {
    return (
        <div className={cn("z-10 w-44 select-none rounded-lg bg-white/30 opacity-80 p-2 backdrop-blur-sm", className)}>
            <div className="flex items-center justify-between">
                <FaUserTie className="rounded-full bg-white/50 p-1 text-4xl text-white" />
                <div>
                    <span className="text-right text-sm font-semibold leading-tight text-white">
                        Empréstimo CLT
                    </span>
                    <p className="text-[10px] text-white text-end">
                        Desconto em folha
                    </p>
                </div>
            </div>

        </div>
    );
}
