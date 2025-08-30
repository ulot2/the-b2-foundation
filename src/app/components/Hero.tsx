"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/Hero.css";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxSpeed = 0.5;
  const backgroundTransform = `translate3d(0, ${scrollY * parallaxSpeed}px, 0)`;
  const contentTransform = `translate3d(0, ${scrollY * 0.2}px, 0)`;

  const handleScrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-container">
      <div
        className="hero-background"
        style={{ transform: backgroundTransform }}
      >
        <Image
          className="hero-background-image"
          src="/images/hero-image.jpg"
          alt="hero image"
          fill
          priority
        />
      </div>
      <div className="hero-background-overlay"></div>

      <div className="hero-content" style={{ transform: contentTransform }}>
        <h1>Cleaner communities, brighter futures</h1>
        <h1>Empowering change, one action at a time</h1>
        <p>
          Every piece of litter picked up is a step toward a healthier planet.
          Join our welcoming community, share your story, and inspire others to
          make a real difference—together, we can create lasting change.
        </p>
        <div
          className="hero-scroll-indicator"
          onClick={handleScrollToNext}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleScrollToNext();
            }
          }}
        >
          <svg className="chevron" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div
        className="hero-parallax-layer hero-parallax-layer-1"
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      ></div>
      <div
        className="hero-parallax-layer hero-parallax-layer-2"
        style={{ transform: `translate3d(0, ${scrollY * 0.7}px, 0)` }}
      ></div>
    </section>
  );
};
