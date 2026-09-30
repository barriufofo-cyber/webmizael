import React, { useEffect, useRef, useState } from 'react';

interface InteractiveStarfieldHeroProps {
  particleCount?: number;
  interactionRadius?: number;
  speed?: number;
  particleColor?: string;
  activeColor?: string;
  className?: string;
  children?: React.ReactNode;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export const InteractiveStarfieldHero: React.FC<InteractiveStarfieldHeroProps> = ({
  particleCount = 350,
  interactionRadius = 160,
  speed = 0.6,
  particleColor = '#94a3b8',
  activeColor = '#ffffff',
  className = '',
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const resizeCanvas = () => {
      if (!container || !canvas) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particles: Particle[] = [];
    const count = Math.min(particleCount, 500);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed * 0.8,
        vy: (Math.random() - 0.5) * speed * 0.8,
        baseRadius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: null, y: null };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const mouseX = mousePosRef.current.x;
      const mouseY = mousePosRef.current.y;
      const maxDistanceSq = interactionRadius * interactionRadius;

      // Draw faint connections between nearby stars
      const connectionDist = 70;
      const connectionDistSq = connectionDist * connectionDist;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around bounds
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse interaction calculation
        let isHovered = false;
        let distFraction = 0;

        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - p1.x;
          const dy = mouseY - p1.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) {
            isHovered = true;
            const dist = Math.sqrt(distSq);
            distFraction = 1 - dist / interactionRadius;

            // Gentle push force
            const force = (distFraction * 0.8) / (dist || 1);
            p1.x -= dx * force * 0.6;
            p1.y -= dy * force * 0.6;
          }
        }

        // Draw connections for hovered stars
        if (isHovered && distFraction > 0.3) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectionDistSq) {
              const alpha = (1 - Math.sqrt(distSq) / connectionDist) * 0.25 * distFraction;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }

        // Twinkle calculation
        p1.twinklePhase += p1.twinkleSpeed;
        const twinkleAlpha = p1.alpha + Math.sin(p1.twinklePhase) * 0.2;
        const finalAlpha = Math.max(0.1, Math.min(1, isHovered ? 0.95 : twinkleAlpha));
        const finalRadius = isHovered ? p1.baseRadius * (1 + distFraction * 1.2) : p1.baseRadius;

        // Draw star
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, finalRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? activeColor : particleColor;
        ctx.globalAlpha = finalAlpha;
        ctx.fill();

        // Extra glow for active star
        if (isHovered && distFraction > 0.4) {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, finalRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = activeColor;
          ctx.globalAlpha = 0.15 * distFraction;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, interactionRadius, speed, particleColor, activeColor]);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 lg:px-20 ${className}`}
    >
      {/* Interactive Starfield Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Subtle radial center ambient light for depth */}
      <div 
        className="absolute inset-0 bg-radial from-blue-500/[0.04] via-transparent to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Content slot placed in front */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};
