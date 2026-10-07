"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const divisions = [
  {
    number: "01",
    title: "Infrastructure",
    meta: "Telecom · Networks · Infrastructure",
    image: "/images/infrastructure.svg",
  },
  {
    number: "02",
    title: "Construction",
    meta: "Construction · Projects · Execution",
    image: "/images/construction.svg",
  },
  {
    number: "03",
    title: "Realty",
    meta: "Real Estate · Development",
    image: "/images/realty.svg",
  },
  {
    number: "04",
    title: "Trading & Distribution",
    meta: "Trading · Distribution · Supply",
    image: "/images/trading.svg",
  },
  {
    number: "05",
    title: "Manpower Solutions",
    meta: "People · Workforce · Capability",
    image: "/images/manpower.svg",
  },
  {
    number: "06",
    title: "Agro",
    meta: "Agriculture · Enterprise · Growth",
    image: "/images/agro.svg",
  },
];

const SLIDE_DURATION = 4000;

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  /*
   * Background scroll effect is kept subtle.
   * The divisions themselves change automatically.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-5%"]
  );

  /*
   * AUTOMATIC DIVISION SLIDER
   *
   * 01 → 02 → 03 → 04 → 05 → 06 → 01
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % divisions.length;
      });
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  /*
   * Smooth progress animation for the current division.
   */
  useEffect(() => {
    let animationFrame: number;
    const startTime = performance.now();

    const animateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min(
        elapsed / SLIDE_DURATION,
        1
      );

      setProgress(percentage);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animateProgress);
      }
    };

    animationFrame = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [activeIndex]);

  const activeDivision = divisions[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[700px] overflow-hidden bg-[#07182C]"
    >

      <motion.div
        className="absolute inset-0"
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-[#07182C]" />

        {/* Subtle abstract background glow */}
        <div className="absolute -left-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#C9922E]/[0.06] blur-[120px]" />

        <div className="absolute -right-[10%] bottom-[5%] h-[450px] w-[450px] rounded-full bg-blue-400/[0.04] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.4) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#061326]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/90 to-[#061326]/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-transparent to-[#061326]/30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col px-6 pb-8 pt-24 sm:px-8 md:px-12 lg:px-16 lg:pt-28">

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/50"
        >
          <span>HRM Group</span>

          <span className="h-px w-8 bg-[#C9922E]/70" />

          <span>Est. 1986</span>
        </motion.div>

        <div className="mt-10 grid flex-1 grid-cols-1 items-center gap-10 lg:mt-4 lg:grid-cols-[1fr_0.68fr] lg:gap-16">


          <div className="max-w-[850px]">

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                Building the foundation
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[900px] text-[clamp(3.2rem,6.3vw,7rem)] font-medium leading-[0.88] tracking-[-0.055em] text-white"
            >
              <span className="block">
                Infrastructure
              </span>

              <span className="block text-white/40">
                first.
              </span>

              <span className="block">
                Everything
                <span className="text-[#C9922E]">
                  {" "}after.
                </span>
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[560px] text-sm leading-7 text-white/50 sm:text-base"
            >
              From telecom infrastructure to construction,
              realty, trading, manpower and agriculture —
              HRM Group has built businesses around the
              foundations that make progress possible.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#divisions"
                className="group inline-flex items-center gap-4 border border-[#C9922E] bg-[#C9922E] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#07182C] transition-all duration-300 hover:bg-transparent hover:text-[#C9922E]"
              >
                Explore Divisions

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#legacy"
                className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-white/35 hover:text-white"
              >
                Our Legacy
              </a>
            </motion.div>
          </div>

          <div className="relative hidden min-h-[500px] items-center justify-end lg:flex">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivision.number}
                initial={{
                  opacity: 0,
                  x: 35,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -25,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full max-w-[410px]"
              >
                {/* Division number */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.5,
                  }}
                  className="absolute -left-12 top-5 hidden text-[11px] font-medium tracking-[0.2em] text-white/30 xl:block"
                >
                  {activeDivision.number}
                </motion.div>

                {/* SVG CARD */}

                <div className="relative aspect-[0.78] overflow-hidden border border-white/10 bg-[#0A2036]">

                  <Image
                    src={activeDivision.image}
                    alt={activeDivision.title}
                    fill
                    priority={activeIndex === 0}
                    className="object-cover"
                    sizes="410px"
                  />

                  {/* Card overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-[#061326]/20 to-transparent" />

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                  {/* Bottom content */}

                  <div className="absolute inset-x-0 bottom-0 p-6">

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                      }}
                      className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#C9922E]"
                    >
                      {activeDivision.meta}
                    </motion.div>

                    <motion.h2
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 0.5,
                      }}
                      className="text-2xl font-medium tracking-[-0.03em] text-white"
                    >
                      {activeDivision.title}
                    </motion.h2>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 lg:hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDivision.number}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[#0A2036]"
            >
              <Image
                src={activeDivision.image}
                alt={activeDivision.title}
                fill
                priority={activeIndex === 0}
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C9922E]">
                  {activeDivision.meta}
                </p>

                <h2 className="mt-2 text-xl font-medium text-white">
                  {activeDivision.title}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        <div className="mt-8 border-t border-white/10 pt-5 lg:mt-5">

          <div className="flex items-center justify-between">

            {/* Current number */}

            <div className="flex items-center gap-4">

              <div className="flex items-center gap-2">

                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeDivision.number}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="text-xs font-medium tracking-[0.18em] text-white"
                  >
                    {activeDivision.number}
                  </motion.span>
                </AnimatePresence>

                <span className="text-xs tracking-[0.18em] text-white/25">
                  / 06
                </span>
              </div>

              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/30 sm:block">
                Our divisions
              </span>
            </div>

            {/* Progress */}

            <div className="relative h-px w-28 overflow-hidden bg-white/10 sm:w-40">

              <motion.div
                className="absolute inset-y-0 left-0 origin-left bg-[#C9922E]"
                style={{
                  scaleX: progress,
                }}
              />

            </div>
          </div>

          {/* Six indicators */}

          <div className="mt-4 hidden grid-cols-6 gap-2 md:grid">

            {divisions.map((division, index) => (
              <div
                key={division.number}
                className="relative h-px overflow-hidden bg-white/10"
              >

                <motion.div
                  className="absolute inset-0 origin-left bg-[#C9922E]"
                  animate={{
                    scaleX:
                      index === activeIndex
                        ? progress
                        : index < activeIndex
                        ? 1
                        : 0,
                  }}
                  transition={{
                    duration: 0.15,
                    ease: "linear",
                  }}
                />

              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-[#061326]/20 to-transparent" />
    </section>
  );
}