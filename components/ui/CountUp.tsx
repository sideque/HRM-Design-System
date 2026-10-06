"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string | number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState<string | number>(0);

  useEffect(() => {
    if (!isInView) return;

    const valueStr = String(value);
    const numericMatch = valueStr.match(/\d+/);

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const nonNumericSuffix = valueStr.replace(/\d+/, "");

    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease out expo formula
      const easeOutExpo =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentNum = Math.floor(easeOutExpo * targetNum);

      setDisplayValue(`${currentNum}${nonNumericSuffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(`${targetNum}${nonNumericSuffix}`);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
