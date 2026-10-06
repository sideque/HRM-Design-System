"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const divisions = [
  {
    number: "01",
    name: "HRM Infralink",
    category: "Telecom & Utility Infrastructure",
    href: "/divisions/infralink",
  },
  {
    number: "02",
    name: "HRM Construction",
    category: "Building & Infrastructure",
    href: "/divisions/construction",
  },
  {
    number: "03",
    name: "HRM Materials",
    category: "Supply & Distribution",
    href: "/divisions/materials",
  },
  {
    number: "04",
    name: "HRM Agro",
    category: "Agriculture",
    href: "/divisions/agro",
  },
  {
    number: "05",
    name: "HRM Realty",
    category: "Real Estate",
    href: "/divisions/realty",
  },
  {
    number: "06",
    name: "HRM Trading",
    category: "Trade & Distribution",
    href: "/divisions/trading",
  },
  {
    number: "07",
    name: "HRM Logistics",
    category: "Transportation & Logistics",
    href: "/divisions/logistics",
  },
  {
    number: "08",
    name: "HRM Equipment Rentals",
    category: "Equipment & Machinery",
    href: "/divisions/equipment-rentals",
  },
  {
    number: "09",
    name: "HRM Manpower Solutions",
    category: "Workforce Solutions",
    href: "/divisions/manpower",
  },
  {
    number: "10",
    name: "HRM Marketing",
    category: "Creative & Digital",
    href: "/divisions/marketing",
  },
];

export default function Divisions() {
  return (
    <section className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                Our Divisions
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl">
              Ten businesses.
              <br />
              <span className="text-[#C9922E]">One foundation.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] lg:ml-auto"
          >
            From infrastructure and construction to agriculture, logistics and
            digital services, each HRM division brings focused expertise to a
            different part of the value chain.
          </motion.p>
        </div>

        {/* Division Grid */}
        <div className="mt-16 border-t border-[#10243F]/10">
          {divisions.map((division, index) => (
            <motion.div
              key={division.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.04, 0.3),
              }}
            >
              <Link
                href={division.href}
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-[#10243F]/10 py-7 transition-colors duration-300 hover:bg-white md:grid-cols-[72px_1fr_0.7fr_48px] md:gap-6 md:px-5"
              >
                {/* Number */}
                <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-medium tracking-[0.12em] text-[#C9922E]">
                  {division.number}
                </span>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-[-0.025em] text-[#10243F] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {division.name}
                </h3>

                {/* Category */}
                <p className="hidden font-[family-name:var(--font-work-sans)] text-sm text-[#667085] md:block">
                  {division.category}
                </p>

                {/* Arrow */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#10243F]/10 text-[#10243F] transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#10243F] group-hover:rotate-45">
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-between">
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.18em] text-[#667085]">
            Explore the HRM Group
          </span>

          <Link
            href="/divisions"
            className="group flex items-center gap-2 font-[family-name:var(--font-work-sans)] text-sm font-medium text-[#10243F]"
          >
            View all divisions

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}