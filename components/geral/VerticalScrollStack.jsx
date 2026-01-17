"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function VerticalSlide({ index, total, scrollYProgress, children }) {
  	
	const start = index / total;
  	const end = (index + 1) / total;

  	const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
  	const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  	return (
    	<motion.div style={{ y, opacity, zIndex: total - index }} className="absolute top-0 left-0 w-full h-full">
      		{children}
    	</motion.div>
  	);
}

export default function VerticalScrollStack({ children }) {
  	const containerRef = useRef(null);

  	const { scrollYProgress } = useScroll({
    	target: containerRef,
    	offset: ["start start", "end end"],
  	});

  	const slides = Array.isArray(children) ? children : [children];
  	const total = slides.length;

	return (
		<div ref={containerRef} className="relative w-full">
			
			{/* Altura criada para permitir o scroll total */}
			<div style={{ height: `${total * 120}vh` }} />

			{/* Área sticky onde a animação acontece */}
			<div className="sticky top-0 h-screen overflow-hidden">
				
				{slides.map((slide, index) => (
					
					<VerticalSlide
						key={index}
						index={index}
						total={total}
						scrollYProgress={scrollYProgress}>

						{slide}
					</VerticalSlide>
				))}
			</div>
		</div>
	);
}
