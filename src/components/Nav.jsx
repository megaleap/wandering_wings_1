"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import wander from "../app/assets/Wandiring.svg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`relative z-50 w-full transition-colors duration-300 ${
        isHome ? "bg-transparent" : "bg-[#3a2a1f]"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-10 pr-16">
        {/* Logo */}
        <Image src={wander} alt="Wandering Wings" className="h-16 w-auto" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-white relative">
          <Link
            href="/"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Home
          </Link>
          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-lg font-medium hover:text-yellow-300">
              About
              <span className="text-sm">▾</span>
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
                {/* <li>
                  <Link
                    href="/#about-eggs"
                    className="block px-5 py-2 hover:bg-yellow-300"
                  >
                    About Hens
                  </Link>
                </li> */}
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
                {/* <li>
                  <Link
                    href="/about/story"
                    className="block px-5 py-2 hover:bg-yellow-300"
                  >
                    Our Story
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Other links */}
          <Link
            href="/products"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Our Products
          </Link>

          <Link
            href="/deep-dive"
            className="text-lg font-medium hover:text-yellow-300"
          >
            Deep Dive
          </Link>

          <Link
            href="/journal"
            className="text-lg font-medium hover:text-yellow-300"
          >
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
                delay: 0.15, // ✅ button comes slightly after text
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition text-black text-sm font-extrabold px-5 py-3 rounded-xl shadow cursor-pointer" 
              onClick={() => router.push('/contact')}
            >
              Contact Us
              <span className="w-7 h-7 rounded bg-white flex items-center justify-center">
                <ArrowRight size={16} className="text-black" />
              </span>
            </motion.button>
      </div>
    </header>
  );
}
