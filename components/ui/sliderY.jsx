"use client";

import { Children, useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { cn } from "../lib/utils";

function ImageCard({ item, cardClassName }) {
    const Icon = item.icon;

    return (
        <div className={cn("relative h-full overflow-hidden p-6 text-white rounded-2xl shadow-lg", cardClassName)}>
        
            {item.image && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
            )}

            <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                    {Icon && <Icon className="mb-4 text-4xl" />}
                    {item.title && (
                        <h3 className="max-w-60 text-3xl font-semibold leading-tight tracking-tight">
                            {item.title}
                        </h3>
                    )}
                    {item.description && (
                        <p className="mt-3 max-w-[16rem] text-sm font-light text-white/85">
                            {item.description}
                        </p>
                    )}
                </div>

                {item.action && (
                    <p className="text-base font-semibold">
                        {item.action} <span aria-hidden="true">-&gt;</span>
                    </p>
                )}
            </div>
        </div>
    );
}

function StackCard({
    children,
    index,
    total,
    scrollYProgress,
    topOffset,
    stackOffset,
    minScale,
    scaleStep,
}) {
    const stackedTop = topOffset + index * stackOffset;
    const finalScale = Math.max(minScale, 1 - (total - index - 1) * scaleStep);
    const shrinkStart = Math.min((index + 1) / total, 0.96);
    const rawScale = useTransform(scrollYProgress, [shrinkStart, 1], [1, finalScale]);
    const scale = useSpring(rawScale, {
        stiffness: 180,
        damping: 28,
        mass: 0.45,
    });

    return (
        <motion.div
            className="sticky px-4 transition-[width,transform] duration-300 ease-out"
            style={{
                top: stackedTop,
                zIndex: index + 1,
                scale,
                transformOrigin: "top center",
            }}
        >
            <div className="mx-auto w-full">
                {children}
            </div>
        </motion.div>
    );
}

export function SliderYCard({
    children,
    className,
    image,
    title,
    description,
    action,
    icon,
}) {
    if (children) {
        return (
            <div className={cn("h-full overflow-hidden", className)}>
                {children}
            </div>
        );
    }

    return (
        <ImageCard
            cardClassName={className}
            item={{
                image,
                title,
                description,
                action,
                icon,
            }}
        />
    );
}

export default function SliderY({
    children,
    items,
    renderItem,
    className,
    cardClassName,
    topOffset = 88,
    stackOffset = 28,
    cardHeight = "h-[440px]",
    endSpace = "pb-8",
    minScale = 0.9,
    scaleStep = 0.035,
    gap = 24,
}) {
    const containerRef = useRef(null);
    const cards = useMemo(() => {
        if (items?.length) {
            return items.map((item, index) => {
                if (renderItem) return renderItem(item, index);

                return (
                    <SliderYCard
                        action={item.action}
                        className={cardClassName}
                        description={item.description}
                        icon={item.icon}
                        image={item.image}
                        key={item.id ?? item.title ?? index}
                        title={item.title}
                    />
                );
            });
        }

        return Children.toArray(children);
    }, [cardClassName, children, items, renderItem]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    if (!cards.length) return null;

    return (
        <section
            className={cn("relative lg:hidden", className)}
            ref={containerRef}
        >
            <div className={cn("pt-6", endSpace)} style={{ display: "grid", rowGap: gap }}>
                {cards.map((card, index) => (
                    <StackCard
                        index={index}
                        key={index}
                        minScale={minScale}
                        scaleStep={scaleStep}
                        scrollYProgress={scrollYProgress}
                        stackOffset={stackOffset}
                        topOffset={topOffset}
                        total={cards.length}
                    >
                        <div className={cn("h-full w-full max-w-md", cardHeight)}>
                            {card}
                        </div>
                    </StackCard>
                ))}
            </div>
        </section>
    );
}
