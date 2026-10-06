"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#10243F]"
    >
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gold accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-[8%] top-0 hidden h-44 w-px origin-top bg-gradient-to-b from-[#C9922E]/80 to-transparent md:block"
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-8 pt-32 sm:px-8 md:px-12 md:pb-12 lg:px-16"
      >
        {/* Top label / Eyebrow (Step 1) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-auto flex items-center gap-3 pt-8"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-[#C9922E]"
          />

          <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
            Since 1986 · Kasaragod, Kerala
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Hero Text */}
          <div>
            {/* Step 2: Main Heading Line Reveal */}
            <TextReveal
              as="h1"
              delay={0.35}
              duration={0.9}
              className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-[clamp(3.4rem,6.8vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.055em] text-white"
            >
              {"Infrastructure\nfirst.\nEverything after."}
            </TextReveal>

            {/* Step 3 & 4: Supporting text & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <p className="max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-white/60 md:text-base">
                From telecom infrastructure to construction, real estate,
                trading, agriculture and beyond — building capabilities that
                move communities forward.
              </p>

              <div className="flex shrink-0 gap-3">
                <Link
                  href="/divisions"
                  className="group flex items-center gap-3 rounded-full bg-[#C9922E] px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-semibold text-[#10243F] shadow-lg transition-all duration-300 hover:bg-[#d49b33] hover:shadow-[0_8px_25px_rgba(201,146,46,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Divisions</span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10243F] text-[#C9922E] transition-transform duration-300 ease-out group-hover:rotate-45">
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="hidden items-center rounded-full border border-white/20 px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 sm:flex"
                >
                  Our Legacy
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Card (Step 5: Visual reveals after text) */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:pb-4"
          >
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[2rem] bg-[#17365D] shadow-2xl">
              {/* Image with slow scale settlement + parallax scroll */}
              <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.6,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{
                  y: imageY,
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop')",
                }}
              />

              {/* Gradient Overlay for subtle depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-[#10243F]/30 to-transparent" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    HRM Group
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#C9922E] shadow-[0_0_8px_#C9922E]" />
                </div>

                <h2 className="max-w-xs font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight tracking-[-0.03em] text-white md:text-3xl">
                  Built for what comes next.
                </h2>
              </div>
            </div>

            {/* Floating pill badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-4 bottom-10 hidden rounded-full border border-white/15 bg-[#10243F]/90 px-5 py-3.5 shadow-xl backdrop-blur-md sm:block"
            >
              <div className="flex items-center gap-3.5">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[#C9922E]">
                  40+
                </span>

                <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                  Years of
                  <br />
                  experience
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex items-center justify-between border-t border-white/10 pt-5"
        >
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.2em] text-white/40">
            Infrastructure · Construction · Enterprise
          </span>

          <div className="flex items-center gap-2 text-white/40 transition-colors duration-300 hover:text-white/70">
            <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.16em]">
              Scroll to explore
            </span>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}