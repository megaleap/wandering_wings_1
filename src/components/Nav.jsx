"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import wander from "../app/assets/Wandiring.svg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  /* ------------------ Scroll background ------------------ */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ------------------ Active helpers ------------------ */
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href) =>
    `text-lg font-medium transition ${
      isActive(href)
        ? "text-yellow-400"
        : "text-white hover:text-yellow-300"
    }`;

  const aboutActive =
  pathname === "/gallery" ||
  (pathname === "/" &&
    typeof window !== "undefined" &&
    window.location.hash.startsWith("#about"));

  /* ------------------ JSX ------------------ */
  return (
    <>
    <header
      className={`fixed top-0 right-0 z-50 w-full transition-colors duration-300
        ${
          !scrolled && pathname === "/"
            ? "bg-transparent"
            : "bg-[#3a2a1f]"
        }`}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-10 pr-16">
        {/* Logo */}
        <Image
          src={wander}
          alt="Wandering Wings"
          className="h-16 w-auto"
          priority
        />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 relative">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 text-lg font-medium transition ${
                aboutActive
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              About <span className="text-sm">▾</span>
            </button>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-3 w-48 rounded-xl bg-yellow-400 text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-3">
                <li>
                  <Link
                    href="/#about-farm"
                    className="block px-5 py-2 hover:bg-yellow-300"
                  >
                    About Farm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about-eggs"
                    className="block px-5 py-2 hover:bg-yellow-300"
                  >
                    About Eggs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="block px-5 py-2 hover:bg-yellow-300"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/products" className={linkClass("/products")}>
            Our Products
          </Link>

          <Link href="/deep-dive" className={linkClass("/deep-dive")}>
            Deep Dive
          </Link>

          <Link href="/journal" className={linkClass("/journal")}>
            Founder’s Journal
          </Link>
        </nav>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition text-black text-sm font-extrabold px-5 py-1.5 rounded-xl shadow"
          onClick={() => router.push("/contact")}
        >
          Contact Us
          <span className="w-10 h-10 rounded bg-white flex items-center justify-center">
            <ArrowRight size={16} />
          </span>
        </motion.button>
      </div>
     <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

    </header>

    </>
  );
}
