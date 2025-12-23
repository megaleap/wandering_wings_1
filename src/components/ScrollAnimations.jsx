"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-image-reveal");
            observer.unobserve(entry.target); // run once
          }
        });
      },
      {
        threshold: 0.25, // image starts revealing when 25% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
