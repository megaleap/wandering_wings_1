"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import wander from "../app/assets/Wandiring.svg";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  /* ------------------ JSX ------------------ */
  return (
    <header
      className={`fixed top-0 2xl:h-38 h-30 right-0 z-50 w-full transition-colors duration-300
        ${
          !scrolled && pathname === "/"
            ? "bg-transparent"
            : "bg-[#3a2a1f]"
        }`}
    >
      <div className="mx-auto flex 2xl:h-36 h-26 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Image
          src={wander}
          alt="Wandering Wings"
          className="2xl:h-32 h-24 mt-5 w-auto"
          priority
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/products" className={linkClass("/products")}>Our Products</Link>
          <Link href="/deep-dive" className={linkClass("/deep-dive")}>Deep Dive</Link>
          <Link href="/journal" className={linkClass("/journal")}>Founder’s Journal</Link>
        </nav>

        {/* Desktop CTA */}
        <motion.button
          className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition text-black font-extrabold pl-5 pr-1.5 text-lg py-1.5 rounded-xl shadow"
          onClick={() => router.push("/contact")}
        >
          Contact Us
          <span className="w-10 h-10 rounded bg-white flex items-center justify-center">
            <ArrowRight size={16} />
          </span>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#3a2a1f] border-t border-white/10"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {[
                { label: "Home", href: "/" },
                { label: "Our Products", href: "/products" },
                { label: "Deep Dive", href: "/deep-dive" },
                { label: "Founder’s Journal", href: "/journal" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </header>
  );
}
