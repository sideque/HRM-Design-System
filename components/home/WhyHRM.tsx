"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const points = [
  {
    number: "01",
    title: "Built on experience",
    description:
      "Since 1986, HRM has grown through hands-on experience, operational knowledge and long-term relationships.",
  },
  {
    number: "02",
    title: "Infrastructure at the core",
    description:
      "Our foundation in telecom and utility infrastructure shapes the way we approach complex work, execution and scale.",
  },
  {
    number: "03",
    title: "Diversified by design",
    description:
      "Multiple businesses operate across different sectors while remaining connected through one group-level foundation.",
  },
  {
    number: "04",
    title: "Focused on what lasts",
    description:
      "We think beyond individual projects, building capabilities and relationships designed for long-term value.",
  },
];

export default function WhyHRM() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                Why HRM
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl">
              Experience that
              <br />
              <span className="text-[#C9922E]">connects.</span>
            </h2>

            <p className="mt-7 max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] md:text-base">
              Different businesses. Different capabilities. One foundation
              built over decades of experience.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243F] px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-colors duration-300 hover:bg-[#17365D]"
            >
              About HRM

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </motion.div>

          {/* Right */}
          <div className="border-t border-[#10243F]/10">
            {points.map((point, index) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group grid gap-5 border-b border-[#10243F]/10 py-8 md:grid-cols-[70px_0.8fr_1fr] md:gap-8 md:py-10"
              >
                {/* Number */}
                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold tracking-[0.12em] text-[#C9922E]">
                  {point.number}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] transition-transform duration-300 group-hover:translate-x-1">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}