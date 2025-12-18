"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import wander from '../app/assets/Wandiring.svg'
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Deep Dive", href: "/deep-dive" },
  { name: "Founder's Journal", href: "/journal" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full h-36 bg-[#3a2a1f]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 ">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white font-bold tracking-wide">
           <Image src={wander} className='h-20'></Image>
          </span>
        </div>

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

        {/* Contact Button */}
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
        >
          Contact US
          <span className="text-lg">→</span>
        </Link>
      </div>
    </header>
  );
}
