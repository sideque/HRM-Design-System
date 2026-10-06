"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Infrastructure Networks",
    category: "Telecom Infrastructure",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    size: "large",
  },
  {
    number: "02",
    title: "Built Environment",
    category: "Construction",
    location: "South India",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },
  {
    number: "03",
    title: "Moving What Matters",
    category: "Logistics",
    location: "Kerala",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#10243F]">
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
                Selected Work
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              Work that moves
              <br />
              <span className="text-[#C9922E]">things forward.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="group flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white"
            >
              View all projects

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#10243F] group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Main Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:row-span-2"
          >
            <Link
              href="/projects"
              className="group relative block h-[520px] overflow-hidden rounded-[1.5rem] sm:h-[600px]"
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-[#10243F]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                    {projects[0].category}
                  </span>

                  <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.15em] text-white/50">
                    {projects[0].location}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <span className="font-[family-name:var(--font-work-sans)] text-xs text-[#C9922E]">
                      {projects[0].number}
                    </span>

                    <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                      {projects[0].title}
                    </h3>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller Projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: (index + 1) * 0.1,
              }}
            >
              <Link
                href="/projects"
                className="group relative block h-[290px] overflow-hidden rounded-[1.5rem] sm:h-[330px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07182C] via-[#10243F]/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-[family-name:var(--font-work-sans)] text-xs text-[#C9922E]">
                          {project.number}
                        </span>

                        <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.15em] text-white/50">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.035em] text-white">
                        {project.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#10243F] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}