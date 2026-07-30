import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
  vx: number;
  vy: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export default function GalaxyStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const parent = canvas.parentElement;
    let width = (canvas.width = parent?.clientWidth || window.innerWidth);
    let height = (canvas.height = parent?.clientHeight || window.innerHeight);

    const stars: Star[] = [];
    const numStars = width < 768 ? 120 : 260;

    const colors = [
      "rgba(255, 255, 255,", // Pure white star
      "rgba(255, 214, 10,",  // Accent yellow star (#FFD60A)
      "rgba(255, 243, 191,", // Warm starlight
      "rgba(192, 219, 255,", // Cool blue cosmic star
      "rgba(224, 170, 255,", // Soft nebula violet star
    ];

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      const baseAlpha = Math.random() * 0.65 + 0.35;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        baseAlpha,
        alpha: baseAlpha,
        twinkleSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      });
    }

    // Shooting meteor
    let meteor: Meteor = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      alpha: 0,
      active: false,
    };

    const spawnMeteor = () => {
      if (meteor.active) return;
      meteor = {
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.5,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 11 + 9,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg streak
        alpha: 1,
        active: true,
      };
    };

    // Periodically spawn meteors
    const meteorInterval = setInterval(() => {
      if (Math.random() < 0.75) spawnMeteor();
    }, 4000);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha >= 1 || star.alpha <= 0.2) {
          star.twinkleSpeed *= -1;
        }

        // Slow cosmic drift
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha.toFixed(2)})`;
        ctx.fill();

        // Soft outer glow for larger stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${(star.alpha * 0.18).toFixed(2)})`;
          ctx.fill();
        }
      }

      // Render shooting meteor streak
      if (meteor.active) {
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.alpha -= 0.015;

        if (meteor.alpha <= 0 || meteor.x > width || meteor.y > height) {
          meteor.active = false;
        } else {
          const endX = meteor.x - Math.cos(meteor.angle) * meteor.length;
          const endY = meteor.y - Math.sin(meteor.angle) * meteor.length;

          const grad = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
          grad.addColorStop(0, `rgba(255, 214, 10, ${meteor.alpha})`);
          grad.addColorStop(0.3, `rgba(255, 255, 255, ${meteor.alpha * 0.8})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      const parentContainer = canvas.parentElement;
      width = canvas.width = parentContainer?.clientWidth || window.innerWidth;
      height = canvas.height = parentContainer?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(meteorInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-transparent opacity-85"
    />
  );
}
