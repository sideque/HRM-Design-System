"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What does HRM Group do?",
    answer:
      "HRM Group is a diversified business group with roots in telecom and utility infrastructure. Its businesses span infrastructure, construction, materials, agriculture, real estate, trading, logistics, equipment rentals, manpower solutions and marketing.",
  },
  {
    question: "When was HRM Group established?",
    answer:
      "HRM Enterprises began its journey in 1986 in Kasaragod, Kerala.",
  },
  {
    question: "What are HRM Group's business divisions?",
    answer:
      "The group operates across ten divisions: HRM Infralink, HRM Construction, HRM Materials, HRM Agro, HRM Realty, HRM Trading, HRM Logistics, HRM Equipment Rentals, HRM Manpower Solutions and HRM Marketing.",
  },
  {
    question: "Where is HRM Group based?",
    answer:
      "HRM Group has its roots in Kasaragod, Kerala.",
  },
  {
    question: "How can I contact HRM Group?",
    answer:
      "You can reach the HRM Group team through the Contact page for business enquiries, partnerships and other conversations.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-[#F7F5F0]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                FAQ
              </span>
            </div>

            <h2 className="mt-6 max-w-md font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl">
              Questions,
              <br />
              <span className="text-[#C9922E]">answered.</span>
            </h2>

            <p className="mt-6 max-w-sm font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085]">
              A quick overview of HRM Group, our businesses and how to get in
              touch with us.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="border-t border-[#10243F]/10">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="border-b border-[#10243F]/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium tracking-[-0.02em] text-[#10243F] md:text-xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#C9922E] bg-[#C9922E] text-[#10243F]"
                          : "border-[#10243F]/15 text-[#10243F]"
                      }`}
                    >
                      <Plus
                        size={17}
                        strokeWidth={1.7}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-10 font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}