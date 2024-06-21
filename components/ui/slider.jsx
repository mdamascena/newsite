"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "components/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (

    <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
        
        <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-white/40">

            <SliderPrimitive.Range className="absolute h-full bg-btncalc saturate-150"/>
        
        </SliderPrimitive.Track>
        
        <SliderPrimitive.Thumb className="block h-7 w-7 rounded-full bg-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />

    </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }