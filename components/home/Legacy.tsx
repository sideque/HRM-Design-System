"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Legacy() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9922E]" />

                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                  Our Legacy
                </span>
              </div>

              <h2 className="mt-6 max-w-lg font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl">
                One foundation.
                <br />
                <span className="text-[#C9922E]">Many directions.</span>
              </h2>

              <p className="mt-7 max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] md:text-base">
                What began with telecom infrastructure evolved into a
                diversified group spanning construction, real estate,
                agriculture, trading, logistics and more.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243F] px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-all duration-300 hover:bg-[#17365D]"
              >
                Discover Our Story

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#10243F]/10" />

            <div className="space-y-16 md:space-y-20">
              {/* 1986 */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-[#C9922E] shadow-[0_0_0_1px_rgba(201,146,46,0.3)]" />

                <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-[0.08em] text-[#C9922E]">
                  1986
                </span>

                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] md:text-3xl">
                  The beginning
                </h3>

                <p className="mt-4 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
                  HRM Enterprises begins its journey in Kasaragod, laying the
                  foundation for a group built around long-term relationships
                  and execution.
                </p>
              </motion.div>

              {/* Telecom */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-[#10243F] shadow-[0_0_0_1px_rgba(16,36,63,0.15)]" />

                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                  The foundation
                </span>

                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] md:text-3xl">
                  Infrastructure first
                </h3>

                <p className="mt-4 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
                  Telecom and utility infrastructure became the foundation
                  of HRM's operational experience, creating capabilities that
                  would later support its expansion into new sectors.
                </p>
              </motion.div>

              {/* Diversification */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-[#10243F] shadow-[0_0_0_1px_rgba(16,36,63,0.15)]" />

                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                  Expansion
                </span>

                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] md:text-3xl">
                  From infrastructure to industries
                </h3>

                <p className="mt-4 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
                  HRM expanded its capabilities across construction, real
                  estate, agriculture, trading, logistics, manpower solutions
                  and marketing.
                </p>
              </motion.div>

              {/* Today */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-[#C9922E] shadow-[0_0_0_1px_rgba(201,146,46,0.3)]" />

                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                  Today
                </span>

                <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] md:text-3xl">
                  A growing multi-sector group
                </h3>

                <p className="mt-4 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
                  Today, HRM brings multiple businesses together under one
                  group, connected by a common foundation of experience,
                  execution and long-term thinking.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}