"use client"

import { useMemo, useRef } from "react"
import { motion, useInView } from "framer-motion"

import { cn } from "components/lib/utils"

const animationMap = {
  blurInUp: {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  },
}

export default function TextAnimate({
  children,
  className,
  as: Component = "p",
  by = "word",
  animation = "blurInUp",
  once = true,
  amount = 0.35,
  delay = 0,
  duration = 0.45,
  stagger = 0.05,
}) {
  const text = typeof children === "string" ? children : ""
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })
  const variants = animationMap[animation] || animationMap.blurInUp

  const chunks = useMemo(() => {
    if (!text) return []
    return by === "character" ? Array.from(text) : text.split(" ")
  }, [text, by])

  return (
    <Component ref={ref} className={cn(className)} aria-label={text}>
      {chunks.map((chunk, index) => {
        const key = `${chunk}-${index}`
        const isSpace = by === "character" && chunk === " "

        return (
          <motion.span
            key={key}
            className={cn("inline-block", by === "word" && "mr-[0.25em]")}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {isSpace ? "\u00A0" : chunk}
          </motion.span>
        )
      })}
    </Component>
  )
}
