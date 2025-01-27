"use client";;
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "components/lib/utils";
const randomBetween = (min, max) => Math.random() * (max - min) + min
const randomAxis = () => (Math.random() > 0.5 ? "x" : "y")

export default function WordRotate({
  words,
  duration = 2500,

  framerProps = {
    initial: { opacity: 0, y: randomBetween(-50, 50) }, // y randomizado entre -50 e 50
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: randomBetween(50, -50) },
    transition: { duration: 0.25, ease: "easeOut" },
  },

 

  className
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    (<div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1 key={words[index]} className={cn(className)} {...framerProps}>
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>)
  );
}
