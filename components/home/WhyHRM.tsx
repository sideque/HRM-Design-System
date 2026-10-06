"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";
import ImageReveal from "@/components/ui/ImageReveal";

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
          {/* Left Column */}
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
                  Why HRM
                </span>
              </div>

              <TextReveal
                as="h2"
                delay={0.1}
                className="mt-6 max-w-xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl"
              >
                {"Experience that\nconnects."}
              </TextReveal>

              <p className="mt-7 max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] md:text-base">
                Different businesses. Different capabilities. One foundation
                built over decades of experience.
              </p>

              {/* Architectural Visual storytelling card */}
              <div className="mt-8 overflow-hidden rounded-2xl max-w-md shadow-md">
                <ImageReveal
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                  alt="HRM Corporate Headquarters & Infrastructure"
                  containerClassName="relative aspect-[16/9] w-full"
                  direction="left-to-right"
                  duration={0.9}
                />
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243F] px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-all duration-300 hover:bg-[#17365D] hover:shadow-lg"
              >
                <span>About HRM</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] transition-transform duration-300 ease-out group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column Points */}
          <div className="border-t border-[#10243F]/10">
            {points.map((point, index) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid gap-5 border-b border-[#10243F]/10 py-8 transition-colors duration-300 hover:bg-[#F7F5F0]/60 hover:px-4 md:grid-cols-[70px_0.8fr_1fr] md:gap-8 md:py-10"
              >
                {/* Gold indicator bar on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 bg-[#C9922E] transition-transform duration-300 group-hover:scale-y-100" />

                {/* Number */}
                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold tracking-[0.12em] text-[#C9922E]">
                  {point.number}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] transition-colors duration-300 group-hover:text-[#182333]">
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