"use client";

import React, { useEffect, useRef } from "react";

import { cn } from "components/lib/utils";

const createParticle = (width, height, size, vx, vy) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * vx,
  vy: (Math.random() - 0.5) * vy,
  radius: Math.random() * size + 0.2,
  alpha: Math.random() * 0.6 + 0.2,
});

const Particles = ({
  className,
  quantity = 80,
  staticity = 45,
  ease = 50,
  size = 1.2,
  color = "#dbeafe",
  vx = 0.5,
  vy = 0.5,
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(0);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let resizeObserver;
    let hasResizeObserver = false;

    const initializeParticles = () => {
      particles = Array.from({ length: quantity }, () =>
        createParticle(width, height, size, vx, vy)
      );
    };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      initializeParticles();
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const updateParticle = (particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -particle.radius) particle.x = width + particle.radius;
      if (particle.x > width + particle.radius) particle.x = -particle.radius;
      if (particle.y < -particle.radius) particle.y = height + particle.radius;
      if (particle.y > height + particle.radius) particle.y = -particle.radius;

      const mouse = mouseRef.current;
      if (mouse.x === null || mouse.y === null) return;

      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < staticity) {
        const force = (staticity - distance) / staticity;
        const angle = Math.atan2(dy, dx);
        particle.x -= Math.cos(angle) * force * (ease / 100);
        particle.y -= Math.sin(angle) * force * (ease / 100);
      }
    };

    const drawParticle = (particle) => {
      context.beginPath();
      context.globalAlpha = particle.alpha;
      context.fillStyle = color;
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      context.globalAlpha = 1;
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(container);
      hasResizeObserver = true;
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (resizeObserver) resizeObserver.disconnect();
      if (!hasResizeObserver) window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [quantity, staticity, ease, size, color, vx, vy]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default Particles;
