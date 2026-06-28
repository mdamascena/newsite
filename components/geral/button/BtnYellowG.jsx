import Link from "next/link"
import { cn } from "components/lib/utils"

export default function BtnYellowG({ href, children = "Simular agora", className }) {
    return (
        <Link
            href={href}
            className={cn(
                "inline-block flex-1 cursor-pointer rounded-xl border-b-2 border-amber-300 bg-linear-to-r from-yellow-300 to-amber-500 py-3 text-xl text-white shadow-md shadow-amber-400/50 duration-150 hover:scale-105 hover:from-yellow-400 hover:to-amber-500 hover:shadow-md active:scale-90 lg:flex-none lg:px-32",
                className
            )}
        >
            {children}
        </Link>
    )
}
