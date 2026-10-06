"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import ImageReveal from "@/components/ui/ImageReveal";

const timelineData = [
  {
    year: "1986",
    badge: "The Beginning",
    title: "The beginning",
    description:
      "HRM Enterprises begins its journey in Kasaragod, laying the foundation for a group built around long-term relationships and execution.",
    isGold: true,
  },
  {
    year: "1995",
    badge: "The Foundation",
    title: "Infrastructure first",
    description:
      "Telecom and utility infrastructure became the foundation of HRM's operational experience, creating capabilities that would later support its expansion into new sectors.",
    isGold: false,
  },
  {
    year: "2010",
    badge: "Expansion",
    title: "From infrastructure to industries",
    description:
      "HRM expanded its capabilities across construction, real estate, agriculture, trading, logistics, manpower solutions and marketing.",
    isGold: false,
  },
  {
    year: "PRESENT",
    badge: "Today",
    title: "A growing multi-sector group",
    description:
      "Today, HRM brings multiple businesses together under one group, connected by a common foundation of experience, execution and long-term thinking.",
    isGold: true,
  },
];

export default function Legacy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Vertical line draw effect tied to scroll progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Left sticky column */}
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

              <TextReveal
                as="h2"
                delay={0.1}
                className="mt-6 max-w-lg font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl"
              >
                {"One foundation.\nMany directions."}
              </TextReveal>

              <p className="mt-7 max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] md:text-base">
                What began with telecom infrastructure evolved into a
                diversified group spanning construction, real estate,
                agriculture, trading, logistics and more.
              </p>

              {/* Featured Legacy Image */}
              <div className="mt-8 overflow-hidden rounded-2xl max-w-md shadow-lg">
                <ImageReveal
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                  alt="HRM Architectural Construction Legacy"
                  containerClassName="relative aspect-[16/9] w-full"
                  direction="bottom-to-top"
                  duration={0.8}
                />
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243F] px-5 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-all duration-300 hover:bg-[#17365D] hover:shadow-lg"
              >
                <span>Discover Our Story</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] transition-transform duration-300 ease-out group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Timeline column */}
          <div ref={timelineRef} className="relative pl-2 md:pl-4">
            {/* Background line (inactive) */}
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#10243F]/10 md:left-[15px]" />

            {/* Active animated line (drawn as user scrolls) */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[11px] top-0 w-px bg-gradient-to-b from-[#C9922E] via-[#C9922E] to-[#10243F] md:left-[15px]"
            />

            <div className="space-y-16 md:space-y-24">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-10 md:pl-14"
                >
                  {/* Timeline node marker */}
                  <span
                    className={`absolute left-0 top-1.5 h-[23px] w-[23px] -translate-x-[4px] md:-translate-x-[4px] rounded-full border-4 border-white transition-all duration-500 ${
                      item.isGold
                        ? "bg-[#C9922E] shadow-[0_0_0_2px_rgba(201,146,46,0.35)]"
                        : "bg-[#10243F] shadow-[0_0_0_2px_rgba(16,36,63,0.15)]"
                    }`}
                  />

                  {/* Year Tag */}
                  <span
                    className={`font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-[0.14em] uppercase ${
                      item.isGold ? "text-[#C9922E]" : "text-[#667085]"
                    }`}
                  >
                    {item.year} · {item.badge}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.03em] text-[#10243F] md:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}