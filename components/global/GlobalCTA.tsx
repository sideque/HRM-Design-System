"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function GlobalCTA() {
  return (
    <section className="bg-[#10243F]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[#17365D] px-6 py-14 shadow-2xl sm:px-10 md:px-16 md:py-20"
        >
          {/* Subtle architectural background decoration circles with slow float */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#C9922E]/30"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="pointer-events-none absolute -bottom-36 -left-20 h-96 w-96 rounded-full border border-white/10"
          />

          <div className="relative z-10 max-w-4xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                Start a conversation
              </span>
            </motion.div>

            {/* Cinematic Title Reveal */}
            <TextReveal
              as="h2"
              delay={0.15}
              className="mt-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {"Have a project\nin mind?"}
            </TextReveal>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-7 text-white/60 md:text-base"
            >
              Whether you are looking for a business partnership, project
              collaboration or simply want to know more about HRM, we would
              like to hear from you.
            </motion.p>

            {/* Buttons reveal last */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#C9922E] px-6 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-semibold text-[#10243F] shadow-lg transition-all duration-300 hover:bg-[#d49b33] hover:shadow-[0_8px_25px_rgba(201,146,46,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get in touch</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10243F] text-[#C9922E] transition-transform duration-300 ease-out group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              <Link
                href="/divisions"
                className="inline-flex w-fit items-center rounded-full border border-white/15 px-6 py-3.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Explore our businesses
              </Link>
            </motion.div>
          </div>

          {/* Corner mark indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-8 right-8 hidden h-20 w-20 items-center justify-center rounded-full border border-white/10 md:flex"
          >
            <ArrowUpRight
              size={22}
              strokeWidth={1.3}
              className="text-[#C9922E]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}