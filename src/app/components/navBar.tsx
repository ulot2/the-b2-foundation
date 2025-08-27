"use client";
import { useState, useEffect } from "react";
import "@/styles/Navbar.css";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#get-involved", label: "Get Involved", id: "get-involved" },
    { href: "#community", label: "Community", id: "community" },
    { href: "#faq", label: "FAQ", id: "faq" },
    { href: "#team", label: "Team", id: "team" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  // Handle logo click - scroll to top
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  // Handle donation button click
  const handleDonateClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.id);
      let currentSection = "";

      // Check each section to see which one is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = window.innerHeight * 0.3; // 30% of viewport

          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If we're at the very top, clear active section
      if (scrollPosition < 100) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Initial call to set correct state
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [navItems]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`nav-container ${isScrolled ? "scrolled" : "not-scrolled"}`}
    >
      <div className="nav-content">
        <div className="nav-logo" onClick={handleLogoClick}>
          <div className="nav-logo-icon">
            <span className="text-white font-bold">🌱</span>
          </div>
          <span className="nav-logo-text">Clean Community</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="nav-donate-button" onClick={handleDonateClick}>
            Donate
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className="nav-mobile-icon">
            <IoIosMenu
              className={`icon ${isMenuOpen ? "menu-hidden" : "menu-visible"}`}
            />
            <IoCloseOutline
              className={`icon ${
                isMenuOpen ? "close-visible" : "close-hidden"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile-menu ${isMenuOpen ? "open" : "closed"}`}>
        <div className="nav-mobile-content">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className={`nav-mobile-link ${
                activeSection === item.id ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <button
            className="nav-mobile-donate"
            onClick={handleDonateClick}
            style={{ animationDelay: `${navItems.length * 50}ms` }}
          >
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}
