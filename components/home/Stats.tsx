"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import TextReveal from "@/components/ui/TextReveal";

const stats = [
  {
    value: 1986,
    suffix: "",
    label: "Founded",
  },
  {
    value: 500,
    suffix: "+ KM",
    label: "Optical Fiber Laid",
  },
  {
    value: 40,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 10,
    suffix: "",
    label: "Business Divisions",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        {/* Intro */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]"
            >
              At a glance
            </motion.span>

            <TextReveal
              as="h2"
              delay={0.1}
              className="mt-4 max-w-xl font-[family-name:var(--font-space-grotesk)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#10243F] sm:text-4xl md:text-5xl"
            >
              {"Decades of experience.\nBuilt into every direction."}
            </TextReveal>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]"
          >
            What began with infrastructure has grown into a diversified group
            built around execution, capability and long-term thinking.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid border-t border-[#10243F]/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-[#10243F]/10 px-0 py-8 transition-colors duration-300 sm:border-r sm:px-6 lg:px-8 lg:py-10 hover:bg-white/40"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-medium tracking-[-0.05em] text-[#10243F] md:text-6xl">
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

                  <p className="mt-3 font-[family-name:var(--font-work-sans)] text-xs font-semibold uppercase tracking-[0.16em] text-[#667085] transition-colors duration-300 group-hover:text-[#10243F]">
                    {stat.label}
                  </p>
                </div>

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C9922E] shadow-[0_0_6px_rgba(201,146,46,0.5)] transition-transform duration-300 ease-out group-hover:scale-150" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}