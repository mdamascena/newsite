"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "components/lib/utils";

function DockAction({ item, className }) {
  const content = (
    <>
      <span className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full transition",
        item.active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-900/25 dark:bg-blue-400 dark:text-slate-950"
          : "text-slate-500 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
      )}>
        {item.icon}
      </span>
      <span className="sr-only">{item.title}</span>
      {item.active && (
        <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-blue-500 dark:bg-blue-300" aria-hidden="true" />
      )}
    </>
  );

  const actionClass = cn("relative flex items-center justify-center", className);

  if (item.href) {
    return (
      <Link href={item.href} title={item.title} className={actionClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" title={item.title} onClick={item.onClick} className={actionClass}>
      {content}
    </button>
  );
}

export function FloatingDock({ items, desktopClassName, mobileClassName }) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

export function FloatingDockMobile({ items, className }) {
  return (
    <motion.nav
      aria-label="Navegacao principal"
      initial={{ y: 24, opacity: 0, scale: 0.96 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/95 px-2 py-2 shadow-[0_18px_48px_rgba(15,23,42,0.22)] ring-1 ring-slate-200/80 backdrop-blur-xl dark:bg-slate-950/95 dark:ring-white/10 md:hidden",
        className
      )}
    >
      {items.map((item) => (
        <motion.div key={item.title} whileTap={{ scale: 0.92 }}>
          <DockAction item={item} />
        </motion.div>
      ))}
    </motion.nav>
  );
}

export function FloatingDockDesktop({ items, className }) {
  return (
    <motion.nav
      aria-label="Navegacao principal"
      className={cn(
        "hidden items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-xl ring-1 ring-slate-200/80 backdrop-blur-xl dark:bg-slate-950/95 dark:ring-white/10 md:flex",
        className
      )}
    >
      {items.map((item) => (
        <motion.div key={item.title} whileHover={{ y: -4 }} whileTap={{ scale: 0.94 }}>
          <DockAction item={item} />
        </motion.div>
      ))}
    </motion.nav>
  );
}
