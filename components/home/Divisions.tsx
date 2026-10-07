"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import TextReveal from "@/components/ui/TextReveal";
import "@/components/ui/Divisions/Divisions.css";

const divisions = [
  {
    number: "01",
    name: "HRM Infralink",
    category: "Telecom & Utility Infrastructure",
    href: "/divisions/infralink",
    image: "/Images/infrastructure.webp",
  },
  {
    number: "02",
    name: "HRM Construction",
    category: "Building & Infrastructure",
    href: "/divisions/construction",
    image: "/Images/construction.webp",
  },
  {
    number: "03",
    name: "HRM Materials",
    category: "Supply & Distribution",
    href: "/divisions/materials",
    image: "/Images/trading.webp",
  },
  {
    number: "04",
    name: "HRM Agro",
    category: "Agriculture",
    href: "/divisions/agro",
    image: "/Images/agro.webp",
  },
  {
    number: "05",
    name: "HRM Realty",
    category: "Real Estate",
    href: "/divisions/realty",
    image: "/Images/realty.webp",
  },
  {
    number: "06",
    name: "HRM Trading",
    category: "Trade & Distribution",
    href: "/divisions/trading",
    image: "/Images/trading.webp",
  },
  {
    number: "07",
    name: "HRM Logistics",
    category: "Transportation & Logistics",
    href: "/divisions/logistics",
    image: "/Images/infrastructure.webp",
  },
  {
    number: "08",
    name: "HRM Equipment Rentals",
    category: "Equipment & Machinery",
    href: "/divisions/equipment-rentals",
    image: "/Images/construction.webp",
  },
  {
    number: "09",
    name: "HRM Manpower Solutions",
    category: "Workforce Solutions",
    href: "/divisions/manpower",
    image: "/Images/manpower.webp",
  },
  {
    number: "10",
    name: "HRM Marketing",
    category: "Creative & Digital",
    href: "/divisions/marketing",
    image: "/Images/realty.webp",
  },
];

function findClosestEdge(
  mouseX: number,
  mouseY: number,
  width: number,
  height: number
) {
  const topDistance =
    (mouseX - width / 2) ** 2 + mouseY ** 2;

  const bottomDistance =
    (mouseX - width / 2) ** 2 +
    (mouseY - height) ** 2;

  return topDistance < bottomDistance
    ? "top"
    : "bottom";
}

function DivisionItem({
  division,
  index,
}: {
  division: (typeof divisions)[number];
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef =
    useRef<HTMLDivElement>(null);

  const animationRef =
    useRef<gsap.core.Timeline | null>(null);

  const marqueeTweenRef =
    useRef<gsap.core.Tween | null>(null);

  const isHoveredRef = useRef(false);


  const repetitions = 8;

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    const inner = marqueeInnerRef.current;

    if (!marquee || !inner) return;

    const firstPart =
      inner.querySelector<HTMLElement>(
        ".division-marquee-part"
      );

    if (!firstPart) return;

    gsap.set(marquee, {
      y: "101%",
      autoAlpha: 0,
    });

    gsap.set(inner, {
      y: "101%",
      x: 0,
    });

    const contentWidth =
      firstPart.getBoundingClientRect().width;

    if (!contentWidth) return;
    marqueeTweenRef.current = gsap.to(inner, {
      x: -contentWidth,
      duration: 16,
      ease: "none",
      repeat: -1,
      paused: true,
    });

    return () => {
      marqueeTweenRef.current?.kill();
      animationRef.current?.kill();

      gsap.killTweensOf(marquee);
      gsap.killTweensOf(inner);
    };
  }, []);

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const item = itemRef.current;
    const marquee = marqueeRef.current;
    const inner = marqueeInnerRef.current;

    if (!item || !marquee || !inner) return;

    isHoveredRef.current = true;

    animationRef.current?.kill();

    gsap.killTweensOf(marquee);
    gsap.killTweensOf(inner);

    marqueeTweenRef.current?.pause();

    const rect =
      item.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const edge = findClosestEdge(
      x,
      y,
      rect.width,
      rect.height
    );

    const marqueeStart =
      edge === "top"
        ? "-101%"
        : "101%";

    const innerStart =
      edge === "top"
        ? "101%"
        : "-101%";

    gsap.set(marquee, {
      y: marqueeStart,
      autoAlpha: 1,
    });

    gsap.set(inner, {
      y: innerStart,
    });

    animationRef.current =
      gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "expo.out",
        },
      });

    animationRef.current.to(
      [marquee, inner],
      {
        y: "0%",
        overwrite: true,
      },
      0
    );

    animationRef.current.call(() => {
      if (
        isHoveredRef.current &&
        marqueeTweenRef.current
      ) {
        marqueeTweenRef.current.play();
      }
    });
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const item = itemRef.current;
    const marquee = marqueeRef.current;
    const inner = marqueeInnerRef.current;

    if (!item || !marquee || !inner) return;

    isHoveredRef.current = false;

    animationRef.current?.kill();

    marqueeTweenRef.current?.pause();

    gsap.killTweensOf(marquee);
    gsap.killTweensOf(inner);

    const rect =
      item.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const edge = findClosestEdge(
      x,
      y,
      rect.width,
      rect.height
    );

    const marqueeExit =
      edge === "top"
        ? "-101%"
        : "101%";

    const innerExit =
      edge === "top"
        ? "101%"
        : "-101%";

    animationRef.current =
      gsap.timeline({
        defaults: {
          duration: 0.45,
          ease: "expo.out",
        },
      });

    animationRef.current
      .to(
        marquee,
        {
          y: marqueeExit,
          overwrite: true,
        },
        0
      )
      .to(
        inner,
        {
          y: innerExit,
          overwrite: true,
        },
        0
      )

      .set(marquee, {
        autoAlpha: 0,
      });
  };

  return (
    <motion.div
      ref={itemRef}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(
          index * 0.035,
          0.25
        ),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="division-item"
    >
      <Link
        href={division.href}
        className="division-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* NUMBER */}
        <span className="division-number">
          {division.number}
        </span>

        {/* MAIN CONTENT */}
        <div className="division-main">
          <h3>{division.name}</h3>

          <p>{division.category}</p>
        </div>

        {/* ARROW */}
        <span className="division-arrow">
          <ArrowUpRight
            size={17}
            strokeWidth={1.7}
          />
        </span>

        {/* FLOWING MARQUEE */}
        <div
          ref={marqueeRef}
          className="division-marquee"
          aria-hidden="true"
        >
          <div className="division-marquee-wrap">
            <div
              ref={marqueeInnerRef}
              className="division-marquee-inner"
            >
              {Array.from({
                length: repetitions,
              }).map((_, marqueeIndex) => (
                <div
                  key={marqueeIndex}
                  className="division-marquee-part"
                >
                  <span>
                    {division.name}
                  </span>

                  <div
                    className="division-marquee-image"
                    style={{
                      backgroundImage: `url(${division.image})`,
                    }}
                  />

                  <span className="division-marquee-category">
                    {division.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Divisions() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C9922E]" />

              <span className="font-[family-name:var(--font-work-sans)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9922E]">
                Our Divisions
              </span>
            </motion.div>

            <TextReveal
              as="h2"
              delay={0.1}
              className="mt-6 max-w-3xl font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10243F] sm:text-5xl md:text-6xl"
            >
              {"Ten businesses.\nOne foundation."}
            </TextReveal>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="max-w-md font-[family-name:var(--font-work-sans)] text-sm leading-7 text-[#667085] lg:ml-auto"
          >
            From infrastructure and construction to
            agriculture, logistics and digital services,
            each HRM division brings focused expertise
            to a different part of the value chain.
          </motion.p>
        </div>

        {/* DIVISIONS */}
        <div className="mt-16 border-t border-[#10243F]/10">
          {divisions.map((division, index) => (
            <DivisionItem
              key={division.number}
              division={division}
              index={index}
            />
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] uppercase tracking-[0.18em] text-[#667085]">
            Explore the HRM Group
          </span>

          <Link
            href="/divisions"
            className="group flex items-center gap-2 font-[family-name:var(--font-work-sans)] text-sm font-medium text-[#10243F] transition-colors duration-300 hover:text-[#C9922E]"
          >
            <span>View all divisions</span>

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}