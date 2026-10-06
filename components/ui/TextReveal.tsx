"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  as = "h2",
  delay = 0,
  duration = 0.8,
  once = true,
}: TextRevealProps) {
  const Component = motion[as] as any;

  // Split by line if there are line breaks (\n), else words
  const lines = children.split("\n");

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden py-0.5">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration,
                  delay: delay + lineIndex * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
