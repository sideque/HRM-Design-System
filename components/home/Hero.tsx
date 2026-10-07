"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const divisions = [
  {
    number: "01",
    title: "Infrastructure",
    meta: "Telecom · Networks · Infrastructure",
    image: "/images/infrastructure.webp",
  },
  {
    number: "02",
    title: "Construction",
    meta: "Construction · Projects · Execution",
    image: "/images/construction.webp",
  },
  {
    number: "03",
    title: "Realty",
    meta: "Real Estate · Development",
    image: "/images/realty.webp",
  },
  {
    number: "04",
    title: "Trading & Distribution",
    meta: "Trading · Distribution · Supply",
    image: "/images/trading.webp",
  },
  {
    number: "05",
    title: "Manpower Solutions",
    meta: "People · Workforce · Capability",
    image: "/images/manpower.webp",
  },
  {
    number: "06",
    title: "Agro",
    meta: "Agriculture · Enterprise · Growth",
    image: "/images/agro.webp",
  },
];

const SLIDE_DURATION = 4000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeDivision = divisions[activeIndex];

  /* ---------------------------------------------
     Background parallax
  --------------------------------------------- */
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 800], [0, 100]);
  const backgroundScale = useTransform(scrollY, [0, 800], [1.05, 1.12]);

  /* ---------------------------------------------
     Automatic division rotation
  --------------------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % divisions.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  /* ---------------------------------------------
     Progress animation
  --------------------------------------------- */
  useEffect(() => {
    let animationFrame: number;

    const startTime = performance.now();

    const animateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(elapsed / SLIDE_DURATION, 1);

      setProgress(percentage);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animateProgress);
      }
    };

    animationFrame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, [activeIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#061326] text-white">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=90"
          alt="HRM infrastructure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark blue image overlay */}
        <div className="absolute inset-0 bg-[#061326]/55" />

        {/* Left dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/95 via-[#061326]/75 to-[#061326]/35" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-transparent to-[#061326]/30" />
      </motion.div>

      {/* =========================================================
          SUBTLE GOLD GLOW
      ========================================================= */}
      <div className="pointer-events-none absolute -left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C9922E]/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -right-[10%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-blue-400/[0.04] blur-[130px]" />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-center px-6 pb-24 pt-32 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="max-w-[680px]">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C9922E]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
                HRM Group
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[48px] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[62px] lg:text-[76px] xl:text-[88px]"
            >
              Building
              <br />

              <span className="text-white/45">what matters.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-7 max-w-[560px] text-[15px] leading-7 text-white/55 sm:text-[16px]"
            >
              A diversified group creating lasting value across
              infrastructure, construction, realty, trading, manpower
              solutions and agro.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C9922E] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#061326] transition-all duration-300 hover:bg-[#d9a743]"
              >
                Discover HRM

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.12em] text-white/75 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
              >
                Get in touch

                <ChevronRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* =================================================
                SMALL STATS
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5"
            >
              <div>
                <p className="text-[25px] font-medium tracking-tight text-white">
                  06
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Business Divisions
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-[25px] font-medium tracking-tight text-white">
                  360°
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Integrated Growth
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-[25px] font-medium tracking-tight text-white">
                  UAE
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Based Group
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT DIVISION CARD
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            {/* Card glow */}
            <div className="absolute -inset-8 rounded-[40px] bg-[#C9922E]/[0.04] blur-3xl" />

            <div className="relative">
              {/* =================================================
                  IMAGE CARD
              ================================================= */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-white/10 bg-[#08182b]/80 shadow-2xl backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDivision.number}
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeDivision.image}
                      alt={activeDivision.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/95 via-[#061326]/20 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/35 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top number */}
                <div className="absolute left-6 top-6 flex items-center gap-3">
                  <span className="text-[11px] font-medium tracking-[0.18em] text-[#C9922E]">
                    DIVISION
                  </span>

                  <span className="h-px w-8 bg-[#C9922E]/60" />

                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeDivision.number}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="text-[11px] tracking-[0.15em] text-white/55"
                    >
                      {activeDivision.number}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Bottom information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDivision.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <h2 className="max-w-[450px] text-[30px] font-medium tracking-[-0.03em] text-white sm:text-[38px]">
                        {activeDivision.title}
                      </h2>

                      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/45 sm:text-[12px]">
                        {activeDivision.meta}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Corner accent */}
                <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#C9922E]/60" />

                <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#C9922E]/60" />
              </div>

              {/* =================================================
                  DIVISION NAVIGATION
              ================================================= */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {divisions.map((division, index) => (
                    <button
                      key={division.number}
                      type="button"
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                      aria-label={`Show ${division.title}`}
                      className="group relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all duration-300"
                      style={{
                        width: index === activeIndex ? 46 : 18,
                      }}
                    >
                      <motion.span
                        className="absolute inset-y-0 left-0 rounded-full bg-[#C9922E]"
                        initial={{ width: "0%" }}
                        animate={{
                          width:
                            index === activeIndex
                              ? `${progress * 100}%`
                              : index < activeIndex
                                ? "100%"
                                : "0%",
                        }}
                        transition={{
                          duration: 0.05,
                          ease: "linear",
                        }}
                      />
                    </button>
                  ))}
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(divisions.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-6 z-20 hidden items-center gap-4 sm:left-10 lg:flex"
      >
        <div className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 h-1/2 w-full bg-[#C9922E]"
          />
        </div>

        <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
          Scroll to explore
        </span>
      </motion.div>

      {/* =========================================================
          MOBILE DIVISION INDICATOR
      ========================================================= */}
      <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:right-10 lg:hidden">
        <span className="text-[10px] tracking-[0.15em] text-white/35">
          {activeDivision.number}
        </span>

        <div className="h-px w-8 bg-[#C9922E]/50" />

        <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
          HRM Group
        </span>
      </div>
    </section>
  );
}