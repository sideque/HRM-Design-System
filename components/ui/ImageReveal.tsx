"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  direction?: "bottom-to-top" | "top-to-bottom" | "left-to-right" | "right-to-left";
  delay?: number;
  duration?: number;
  parallax?: boolean;
  parallaxOffset?: number;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "relative overflow-hidden",
  direction = "bottom-to-top",
  delay = 0,
  duration = 0.9,
  parallax = true,
  parallaxOffset = 30,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [-parallaxOffset, parallaxOffset] : [0, 0]
  );

  const getClipPath = () => {
    switch (direction) {
      case "bottom-to-top":
        return {
          hidden: "inset(0 0 100% 0)",
          visible: "inset(0 0 0% 0)",
        };
      case "top-to-bottom":
        return {
          hidden: "inset(100% 0 0 0)",
          visible: "inset(0 0 0% 0)",
        };
      case "left-to-right":
        return {
          hidden: "inset(0 100% 0 0)",
          visible: "inset(0 0 0% 0)",
        };
      case "right-to-left":
        return {
          hidden: "inset(0 0 0 100%)",
          visible: "inset(0 0 0% 0)",
        };
      default:
        return {
          hidden: "inset(0 0 100% 0)",
          visible: "inset(0 0 0% 0)",
        };
    }
  };

  const clip = getClipPath();

  return (
    <div ref={containerRef} className={containerClassName}>
      <motion.div
        initial={{ clipPath: clip.hidden, opacity: 0 }}
        whileInView={{ clipPath: clip.visible, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full overflow-hidden"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: duration + 0.4,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`${className} will-change-transform`}
        />
      </motion.div>
    </div>
  );
}
