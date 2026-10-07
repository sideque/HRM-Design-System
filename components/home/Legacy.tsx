"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    year: "1986",
    badge: "The Beginning",
    title: "The beginning",
    description:
      "HRM Enterprises begins its journey in Kasaragod, laying the foundation for a group built around long-term relationships and execution.",
  },
  {
    year: "1995",
    badge: "The Foundation",
    title: "Infrastructure first",
    description:
      "Telecom and utility infrastructure became the foundation of HRM's operational experience, creating capabilities that would later support its expansion into new sectors.",
  },
  {
    year: "2010",
    badge: "Expansion",
    title: "From infrastructure to industries",
    description:
      "HRM expanded its capabilities across construction, real estate, agriculture, trading, logistics, manpower solutions and marketing.",
  },
  {
    year: "PRESENT",
    badge: "Today",
    title: "A growing multi-sector group",
    description:
      "Today, HRM brings multiple businesses together under one group, connected by a common foundation of experience, execution and long-term thinking.",
  },
];

export default function Legacy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  const imageScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [1.12, 1.05, 1.1, 1.18]
  );

  const imageY = useTransform(
    smoothProgress,
    [0, 1],
    ["-3%", "3%"]
  );

  const overlayOpacity = useTransform(
    smoothProgress,
    [0, 0.4, 0.75, 1],
    [0.72, 0.58, 0.62, 0.78]
  );

  const progressHeight = useTransform(
    scrollYProgress,
    [0.05, 0.85],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#061326] text-white"
    >
      {/* Background image */}
      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 z-[1] bg-[#061326]"
      />

      {/* cinematic gradient */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#061326]/90 via-[#061326]/45 to-[#061326]/95" />

      {/* subtle gold glow */}
      <motion.div
        style={{
          opacity: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [0.15, 0.32, 0.12]
          ),
        }}
        className="pointer-events-none absolute -right-40 top-1/3 z-[2] h-[500px] w-[500px] rounded-full bg-[#C9922E]/20 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16 lg:py-40">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C9922E]">
                Our Legacy
              </span>
            </div>

            <h2 className="mt-7 max-w-xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              One foundation.
              <br />
              <span className="text-white/55">Many directions.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-white/65 md:text-base">
              What started in 1986 as a focused enterprise has evolved
              into a diversified group. The industries changed. The
              foundation never did.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mt-24 md:mt-32">
          {/* timeline rail */}
          <div className="absolute left-[11px] top-0 h-full w-px bg-white/15 md:left-[17px]" />

          {/* animated rail */}
          <motion.div
            style={{ height: progressHeight }}
            className="absolute left-[11px] top-0 w-px bg-[#C9922E] md:left-[17px]"
          />

          <div className="space-y-20 md:space-y-28">
            {timelineData.map((item, index) => (
              <LegacyItem
                key={item.year}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="mt-24 border-t border-white/15 pt-10 md:mt-32 md:pt-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.2em] text-[#C9922E]">
                Since 1986
              </span>

              <h3 className="mt-4 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">
                The foundation stays the same.
                <br />
                <span className="text-white/45">
                  The possibilities keep growing.
                </span>
              </h3>
            </div>

            <Link
              href="/about"
              className="group flex shrink-0 items-center gap-3 font-[family-name:var(--font-work-sans)] text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Discover our story

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#061326]">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LegacyItem({
  item,
  index,
}: {
  item: {
    year: string;
    badge: string;
    title: string;
    description: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid grid-cols-[34px_1fr] gap-7 md:grid-cols-[48px_180px_1fr] md:gap-8"
    >
      {/* Node */}
      <div className="relative z-10 flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-1 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#C9922E] bg-[#061326]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C9922E]" />
        </motion.div>
      </div>

      {/* Year */}
      <div className="md:pt-0">
        <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-[-0.03em] text-[#C9922E] md:text-2xl">
          {item.year}
        </span>

        <span className="mt-2 block font-[family-name:var(--font-work-sans)] text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
          {item.badge}
        </span>
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
          {item.title}
        </h3>

        <p className="mt-4 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-white/55 md:text-[15px]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}