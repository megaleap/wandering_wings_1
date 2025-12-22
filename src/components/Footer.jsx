import React from "react";
import { Phone, MapPin, Mail, Send, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import wander from "../app/assets/Wandiring.svg";
// import TwitterXIcon from "@/components/icons/TwitterXIcon";
import TwitterXIcon from "./TwitterXIcon";
const Footer = () => {
  return (
    <footer className="bg-[#3a2a1f] text-white">
      {/* Top Section */}
      <div
        className="max-w-7xl mx-auto px-6 py-14 grid gap-10
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4"
      >
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={wander} className="h-20" alt="logo" />
          </div>

          <p className="text-sm mb-6 text-gray-200">
            Healthy Eggs, Happy Hens.
          </p>
          <hr className="border-t border-white/20 mb-4" />
          <div className="space-y-4 text-sm text-gray-200">
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>(+91) 9885689398</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1" />
              <span>
                Survey No.132, Sriauro Farms, Balehonniga village, Halaguru,
                Mandya, Karnataka - 571421
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-l border-white/20  ">
          <h4 className="font-semibold text-lg mb-4 ml-4">Quick Link</h4>
          <ul className="space-y-3 text-sm text-gray-200 ml-4">
            <li>Homes</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Deep Drive</li>
            <li>Blogs</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Newsletter</h4>
          <p className="text-sm text-gray-200 mb-4">
            Join our newsletter and be the first to know about:
          </p>

          <div className="flex items-center bg-[#4a2f20] rounded-full overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Email Address *"
              className="bg-transparent px-4 py-3 w-full text-sm outline-none placeholder-gray-300"
            />
            <button className="bg-yellow-400 p-3 text-black">
              <Send size={18} />
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-200">
            <Mail size={16} />
            <span>operations@wanderingwings.in</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-200">
          <p>Copyright © 2025 All Rights Reserved.</p>

          <div className="flex gap-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 hover:text-yellow-400 transition"
            >
              <TwitterXIcon size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
