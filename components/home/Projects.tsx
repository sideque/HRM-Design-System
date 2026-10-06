"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

const projects = [
  {
    number: "01",
    title: "Infrastructure Networks",
    category: "Telecom Infrastructure",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    size: "large",
  },
  {
    number: "02",
    title: "Built Environment",
    category: "Construction",
    location: "South India",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },
  {
    number: "03",
    title: "Moving What Matters",
    category: "Logistics",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  /*
   * Scroll progress for the entire Projects section.
   *
   * Used only for subtle image movement.
   * We avoid using scroll progress to control visibility,
   * so the cards can never remain hidden accidentally.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  /*
   * Main image parallax.
   *
   * Reduced to a subtle movement so it feels premium
   * instead of looking like an aggressive parallax effect.
   */
  const parallaxX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-18, 18],
  );

  const mainImageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [12, -12],
  );

  return (
    <section
      ref={containerRef}
      className="overflow-hidden bg-[#10243F]"
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-32 pt-24 sm:px-8 sm:pb-36 md:px-12 md:pb-40 md:pt-32 lg:px-16">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {/* Left heading */}
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                Selected Work
              </span>
            </motion.div>

            <TextReveal
              as="h2"
              delay={0.1}
              className="mt-6 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl"
            >
              {"Work that moves\nthings forward."}
            </TextReveal>
          </div>

          {/* View all projects */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/projects"
              className="group flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-colors duration-300 hover:text-[#C9922E]"
            >
              <span>View all projects</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#10243F]">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* =========================================================
            PROJECT GRID
        ========================================================= */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* =======================================================
              MAIN PROJECT
          ======================================================= */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.1,
              margin: "0px 0px -8% 0px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:row-span-2"
          >
            <Link
              href="/projects"
              className="group relative block h-[520px] overflow-hidden rounded-[1.8rem] sm:h-[600px]"
            >
              {/* =================================================
                  IMAGE
              ================================================= */}
              <motion.div
                style={{
                  x: parallaxX,
                  y: mainImageY,
                }}
                className="absolute -left-[5%] -right-[5%] -top-[3%] -bottom-[3%] overflow-hidden"
              >
                <motion.img
                  src={projects[0].image}
                  alt={projects[0].title}
                  loading="lazy"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          scale: 1.06,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                />
              </motion.div>

              {/* =================================================
                  DARK OVERLAY
              ================================================= */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-[#10243F]/30 to-transparent transition-opacity duration-700 group-hover:opacity-90" />

              {/* Subtle hover highlight */}
              <div className="pointer-events-none absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* =================================================
                  CONTENT
              ================================================= */}
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:p-8 md:p-10">
                <div className="mb-6 flex items-center justify-between gap-5">
                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    {projects[0].category}
                  </span>

                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.16em] text-white/50">
                    {projects[0].location}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="font-[family-name:var(--font-work-sans)] text-xs font-semibold text-[#C9922E]">
                      {projects[0].number}
                    </span>

                    <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                      {projects[0].title}
                    </h3>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] shadow-lg transition-transform duration-500 ease-out group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* =======================================================
              SMALL PROJECTS
          ======================================================= */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.1,
                margin: "0px 0px -8% 0px",
              }}
              transition={{
                duration: 0.75,
                delay: reduceMotion ? 0 : (index + 1) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/projects"
                className="group relative block h-[290px] overflow-hidden rounded-[1.8rem] sm:h-[330px]"
              >
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          scale: 1.05,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-[#10243F]/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-[family-name:var(--font-work-sans)] text-xs font-semibold text-[#C9922E]">
                          {project.number}
                        </span>

                        <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.035em] text-white">
                        {project.title}
                      </h3>

                      <span className="mt-2 block font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.14em] text-white/40">
                        {project.location}
                      </span>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#10243F]">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}