"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

export function AnimatedList({
  children,
  className,
  delay = 1000,
  ...props
}) {
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [childrenArray.length]);

  useEffect(() => {
    if (!childrenArray.length) return;

    const interval = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % childrenArray.length);
    }, delay);

    return () => clearInterval(interval);
  }, [childrenArray.length, delay]);

  const itemsToShow = useMemo(() => {
    return childrenArray.slice(0, index + 1).reverse();
  }, [childrenArray, index]);

  return (
    <div className={cn("flex flex-col items-center gap-3", className)} {...props}>
      <AnimatePresence initial={false}>
        {itemsToShow.map((item, itemIndex) => (
          <AnimatedListItem key={item.key ?? `animated-list-item-${itemIndex}`}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

function AnimatedListItem({ children, className }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
