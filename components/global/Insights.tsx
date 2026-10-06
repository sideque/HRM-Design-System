"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    number: "01",
    category: "Infrastructure",
    title: "Building the infrastructure behind a connected future",
    excerpt:
      "How infrastructure capabilities create the foundation for long-term growth and connectivity.",
    date: "06 OCT 2026",
    href: "/insights/infrastructure-connected-future",
  },
  {
    number: "02",
    category: "Group",
    title: "From one foundation to many directions",
    excerpt:
      "A look at the evolution of HRM and the businesses that shape the group today.",
    date: "28 SEP 2026",
    href: "/insights/one-foundation-many-directions",
  },
  {
    number: "03",
    category: "Perspective",
    title: "Why diversification creates stronger capabilities",
    excerpt:
      "Exploring how different capabilities can come together under one long-term vision.",
    date: "14 SEP 2026",
    href: "/insights/diversification-capabilities",
  },
];

export default function Insights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                Insights
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl">
              Ideas behind
              <br />
              <span className="text-[#C9922E]">the work.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/insights"
              className="group flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-sm font-medium text-[#10243F]"
            >
              View all insights

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#10243F]/15 transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Articles */}
        <div className="mt-16 border-t border-[#10243F]/10">
          {insights.map((article, index) => (
            <motion.article
              key={article.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <Link
                href={article.href}
                className="group grid gap-6 border-b border-[#10243F]/10 py-8 transition-colors duration-300 md:grid-cols-[70px_0.8fr_1.4fr_130px_48px] md:items-center md:gap-8 md:py-9 md:px-4 hover:bg-[#F7F5F0]"
              >
                {/* Number */}
                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold tracking-[0.12em] text-[#C9922E]">
                  {article.number}
                </span>

                {/* Category */}
                <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#667085]">
                  {article.category}
                </span>

                {/* Title + excerpt */}
                <div>
                  <h3 className="max-w-xl font-[family-name:var(--font-space-grotesk)] text-xl font-medium leading-tight tracking-[-0.025em] text-[#10243F] transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 max-w-xl font-[family-name:var(--font-work-sans)] text-sm leading-6 text-[#667085]">
                    {article.excerpt}
                  </p>
                </div>

                {/* Date */}
                <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-medium tracking-[0.12em] text-[#667085]">
                  {article.date}
                </span>

                {/* Arrow */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#10243F]/10 text-[#10243F] transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}