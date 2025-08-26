import React from "react";
import "@/styles/Footer.css";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { label: "About Us", href: "#about" },
      { label: "Get Involved", href: "#get-involved" },
      { label: "Resources", href: "#resources" },
      { label: "Contact", href: "#contact" },
    ],
    Programs: [
      { label: "Community Cleanups", href: "#" },
      { label: "Educational Workshops", href: "#" },
      { label: "School Programs", href: "#" },
      { label: "Corporate Partnerships", href: "#" },
    ],
    Resources: [
      { label: "Fact Sheets", href: "#" },
      { label: "Research Reports", href: "#" },
      { label: "Educational Materials", href: "#" },
      { label: "Volunteer Toolkit", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: <SlSocialFacebook className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    { icon: <FaXTwitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    { icon: <FiLinkedin className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="general-box footer">
      <div className="general-container">
        <div className="footer-top">
          <div className="footer-head">
            <h1>THE B2 FOUNDATION</h1>
            <p>
              A foundation dedicated to raising awareness about litter's impact
              on our environment and empowering communities to create positive
              change.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-links-section">
              <h4 className="footer-links-title">{category}</h4>
              <ul className="footer-links-list">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="footer-separator" />

        {/* newsletter */}
        <div className="newsletter">
          <div>
            <h4>Stay Updated</h4>
            <p>Get the latest news and volunteer opportunities.</p>
          </div>
          <div className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-newsletter-input"
            />
            <button className="footer-newsletter-button">
              <AiOutlineMail />
            </button>
          </div>
        </div>
        <hr className="footer-separator" />
        <p className="footer-copyright-text">
          © 2025 The B2 Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
