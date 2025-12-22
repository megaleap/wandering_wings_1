"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import wander from "../app/assets/Wandiring.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Deep Dive", href: "/deep-dive" },
  { name: "Founder's Journal", href: "/journal" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
  <header
  className={`relative z-20  w-full transition-colors duration-300 ${
    isHome ? "bg-transparent" : "bg-[#3a2a1f]"
  }`}
>


      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-10 pr-16">
        
        {/* Logo */}
        <Image src={wander} alt="Wandering Wings" className="h-16 w-auto" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-lg bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
        >
          Contact Us →
        </Link>
      </div>
    </header>
  );
}
