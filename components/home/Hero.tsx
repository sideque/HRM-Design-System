"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#10243F]">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gold accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-[8%] top-0 hidden h-40 w-px origin-top bg-[#C9922E]/60 md:block"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-8 pt-32 sm:px-8 md:px-12 md:pb-12 lg:px-16">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-auto flex items-center gap-3 pt-8"
        >
          <span className="h-px w-8 bg-[#C9922E]" />

          <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-medium uppercase tracking-[0.22em] text-white/55">
            Since 1986 · Kasaragod, Kerala
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.055em] text-white"
            >
              Infrastructure
              <br />
              <span className="text-[#C9922E]">first.</span>
              <br />
              Everything after.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
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
                  className="group flex items-center gap-3 rounded-full bg-[#C9922E] px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-semibold text-[#10243F] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Divisions

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10243F] text-[#C9922E] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="hidden items-center rounded-full border border-white/20 px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5 sm:flex"
                >
                  Our Legacy
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:pb-4"
          >
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[2rem] bg-[#17365D]">
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop')",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-[#10243F]/20 to-transparent" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                    HRM Group
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#C9922E]" />
                </div>

                <h2 className="max-w-xs font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight tracking-[-0.03em] text-white md:text-3xl">
                  Built for what comes next.
                </h2>
              </div>
            </div>

            {/* Floating number */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 bottom-10 hidden rounded-full border border-white/10 bg-[#10243F]/90 px-4 py-3 backdrop-blur-sm sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-[#C9922E]">
                  40+
                </span>

                <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.14em] text-white/50">
                  Years
                  <br />
                  of experience
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex items-center justify-between border-t border-white/10 pt-5"
        >
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.18em] text-white/35">
            Infrastructure · Construction · Enterprise
          </span>

          <div className="flex items-center gap-2 text-white/40">
            <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.15em]">
              Scroll to explore
            </span>

            <ArrowDown size={14} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}