"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>

      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6"
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? "rgba(7,24,44,0.72)"
              : "rgba(7,24,44,0.32)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.14)"
              : "rgba(255,255,255,0.10)",
            boxShadow: scrolled
              ? "0 12px 40px rgba(0,0,0,0.20)"
              : "0 8px 30px rgba(0,0,0,0.10)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl md:px-5"
        >

          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center transition-opacity duration-300 hover:opacity-90"
          >
            <Image
              src="/Footer.svg"
              alt="HRM Group"
              width={150}
              height={45}
              priority
              className="h-auto w-[130px] object-contain md:w-[145px]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-4 py-2 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white/75 transition-colors duration-300 hover:text-white"
              >
                <span>{item.label}</span>

                <span className="absolute bottom-1 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-[#C9922E] transition-all duration-300 ease-out group-hover:w-6" />
              </Link>
            ))}
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <Link
            href="/contact"
            className="group hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 font-[family-name:var(--font-work-sans)] text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 lg:flex"
          >
            <span>Start a Conversation</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9922E] text-[#10243F] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight
                size={14}
                strokeWidth={2.2}
              />
            </span>
          </Link>

          {/* =================================================
              MOBILE
          ================================================= */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? (
              <X size={19} strokeWidth={1.8} />
            ) : (
              <Menu size={19} strokeWidth={1.8} />
            )}
          </button>
        </motion.nav>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 bg-[#10243F] lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-28">
              <div className="flex flex-1 flex-col justify-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#C9922E]">
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={22}
                        className="text-[#C9922E] transition-transform duration-300 group-hover:rotate-45"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="group flex w-full items-center justify-between rounded-full bg-[#C9922E] px-6 py-4 font-[family-name:var(--font-work-sans)] text-sm font-semibold text-[#10243F]"
                >
                  <span>Start a Conversation</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10243F] text-[#C9922E]">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.div>

              {/* Footer */}

              <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-wider text-white">
                    HRM GROUP
                  </p>

                  <p className="mt-1 font-[family-name:var(--font-work-sans)] text-xs text-white/50">
                    Since 1986
                  </p>
                </div>

                <p className="max-w-[180px] text-right font-[family-name:var(--font-work-sans)] text-xs leading-relaxed text-white/50">
                  Infrastructure first.
                  <br />
                  Everything after.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}