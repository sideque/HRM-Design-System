"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import TextReveal from "@/components/ui/TextReveal";

const stats = [
  {
    value: 1986,
    suffix: "",
    label: "Founded",
    description: "A legacy built over four decades",
  },
  {
    value: 500,
    suffix: "+ KM",
    label: "Optical Fiber Laid",
    description: "Infrastructure across the network",
  },
  {
    value: 40,
    suffix: "+",
    label: "Years of Experience",
    description: "Experience that compounds",
  },
  {
    value: 10,
    suffix: "",
    label: "Business Divisions",
    description: "One group. Multiple capabilities",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0]">
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      {/* Giant year */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-space-grotesk)] text-[clamp(180px,30vw,460px)] font-medium leading-none tracking-[-0.09em] text-[#10243F]/[0.045]"
      >
        1986
      </motion.div>

      {/* Gold vertical accent */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C9922E]/60 to-transparent" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        {/* TOP INTRO */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.6fr] lg:items-end">
          <div>
            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9922E]">
                Our Scale
              </span>
            </motion.div>

            {/* Heading */}
            <TextReveal
              as="h2"
              delay={0.1}
              className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl"
            >
              {"Decades of experience.\nBuilt into every direction."}
            </TextReveal>
          </div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] lg:ml-auto"
          >
            What began with infrastructure has grown into
            a diversified group built around execution,
            capability and long-term thinking.
          </motion.p>
        </div>

        {/* =====================================================
            GOLD DIVIDER
        ===================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left",
          }}
          className="mt-16 h-px w-full bg-[#10243F]/10"
        >
          <div className="h-px w-16 bg-[#C9922E]" />
        </motion.div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-[250px] border-b border-[#10243F]/10 py-10 ${
                index !== 3
                  ? "lg:border-r lg:pr-8"
                  : ""
              } ${
                index % 2 === 0
                  ? "sm:pr-8"
                  : "sm:pl-8"
              } ${
                index >= 2
                  ? "lg:pt-12"
                  : ""
              } ${
                index !== 0
                  ? "lg:pl-8"
                  : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                  0{index + 1}
                </span>

                {/* Gold dot */}
                <span className="mt-1 h-2 w-2 rounded-full bg-[#C9922E] transition-transform duration-500 ease-out group-hover:scale-[2]" />
              </div>

              {/* Stat value */}
              <div className="mt-12 font-[family-name:var(--font-space-grotesk)] text-5xl font-medium leading-none tracking-[-0.055em] text-[#10243F] md:text-6xl">
                <CountUp
                  value={stat.value}
                  duration={2200}
                />

                {stat.suffix && (
                  <span className="ml-1 text-2xl font-medium tracking-[-0.02em] text-[#C9922E]">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="mt-5 font-[family-name:var(--font-work-sans)] text-xs font-semibold uppercase tracking-[0.15em] text-[#667085] transition-colors duration-300 group-hover:text-[#10243F]">
                {stat.label}
              </p>

              {/* Description */}
              <p className="mt-3 max-w-[220px] font-[family-name:var(--font-work-sans)] text-xs leading-5 text-[#667085]/70 transition-colors duration-300 group-hover:text-[#667085]">
                {stat.description}
              </p>

              {/* Bottom hover line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9922E] transition-all duration-500 ease-out group-hover:w-16" />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM BRAND STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.2em] text-[#667085]">
            Since 1986
          </span>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9922E]/50" />

            <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.18em] text-[#667085]">
              Built for the long term
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}