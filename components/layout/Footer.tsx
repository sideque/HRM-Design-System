"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Divisions", href: "/divisions" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Infrastructure", href: "/divisions/infralink" },
    { label: "Construction", href: "/divisions/construction" },
    { label: "Real Estate", href: "/divisions/realty" },
    { label: "Logistics", href: "/divisions/logistics" },
    { label: "Trading", href: "/divisions/trading" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#07182C] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16"
      >
        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 md:py-20 lg:grid-cols-[1.2fr_0.6fr_0.8fr] lg:gap-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-90"
              aria-label="HRM Group home"
            >
              <Image
                src="/Footer.svg"
                alt="HRM Group"
                width={150}
                height={45}
                priority
                className="h-auto w-[140px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-white/50">
              A diversified business group built on decades of experience,
              connected capabilities and a long-term approach to growth.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white transition-colors duration-300 hover:text-[#C9922E]"
            >
              <span>Start a conversation</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#C9922E] group-hover:bg-[#C9922E] group-hover:text-[#10243F] group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>

          {/* Company */}
          <div>
            <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
              Company
            </span>

            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-work-sans)] text-sm text-white/60 transition-colors duration-200 hover:text-[#C9922E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses */}
          <div>
            <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
              Businesses
            </span>

            <ul className="mt-6 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-work-sans)] text-sm text-white/60 transition-colors duration-200 hover:text-[#C9922E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="grid gap-8 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.18em] text-white/30">
              Location
            </span>

            <p className="mt-2 font-[family-name:var(--font-work-sans)] text-sm text-white/70">
              Kasaragod, Kerala
            </p>
          </div>

          <div>
            <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.18em] text-white/30">
              Get in touch
            </span>

            <Link
              href="/contact"
              className="mt-2 block font-[family-name:var(--font-work-sans)] text-sm text-white/70 transition-colors duration-300 hover:text-[#C9922E]"
            >
              Contact HRM Group
            </Link>
          </div>

          <div className="flex items-start gap-3 lg:justify-end">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:scale-110 hover:border-[#C9922E] hover:bg-[#C9922E] hover:text-[#10243F]"
            >
              <FaLinkedinIn size={14} />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:scale-110 hover:border-[#C9922E] hover:bg-[#C9922E] hover:text-[#10243F]"
            >
              <FaInstagram size={14} />
            </Link>

            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:scale-110 hover:border-[#C9922E] hover:bg-[#C9922E] hover:text-[#10243F]"
            >
              <FaFacebookF size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="font-[family-name:var(--font-work-sans)] text-[11px] text-white/30">
            © {new Date().getFullYear()} HRM Group. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-[family-name:var(--font-work-sans)] text-[11px] text-white/30 transition-colors duration-200 hover:text-white/70"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="font-[family-name:var(--font-work-sans)] text-[11px] text-white/30 transition-colors duration-200 hover:text-white/70"
            >
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}