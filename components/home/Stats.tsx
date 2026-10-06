"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "1986",
    label: "Founded",
  },
  {
    value: "500+",
    suffix: " KM",
    label: "Optical Fiber Laid",
  },
  {
    value: "40+",
    label: "Years of Experience",
  },
  {
    value: "10",
    label: "Business Divisions",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        {/* Intro */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
              At a glance
            </span>

            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-space-grotesk)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#10243F] sm:text-4xl md:text-5xl">
              Decades of experience.
              <br />
              Built into every direction.
            </h2>
          </div>

          <p className="max-w-sm font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
            What began with infrastructure has grown into a diversified group
            built around execution, capability and long-term thinking.
          </p>
        </div>

        {/* Stats */}
        <div className="grid border-t border-[#10243F]/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-[#10243F]/10 px-0 py-8 sm:border-r sm:px-6 lg:px-8 lg:py-10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-medium tracking-[-0.05em] text-[#10243F] md:text-6xl">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-2xl tracking-[-0.02em] text-[#C9922E]">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 font-[family-name:var(--font-work-sans)] text-xs font-medium uppercase tracking-[0.14em] text-[#667085]">
                    {stat.label}
                  </p>
                </div>

                <span className="mt-2 h-2 w-2 rounded-full bg-[#C9922E] transition-transform duration-300 group-hover:scale-150" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}