import React from "react";
import "@/styles/Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { text } from "stream/consumers";

export const Contact = () => {
  const contacts = [
    {
      method: "Email",
      detail: "info@gmail.com",
      href: "mailto:info@gmail.com",
      text: "Send us a message",
      icon: <AiOutlineMail className="contact-icon" />,
    },
    {
      method: "Phone",
      detail: "23412345678",
      href: "tel:+23412345678",
      text: "Call us directly",
      icon: <FiPhone className="contact-icon" />,
    },
  ];

  const socials = [
    {
      platform: "Facebook",
      handle: "@theb2foundation",
      href: "#",
      icon: <SlSocialFacebook className="contact-icon" />,
    },
    {
      platform: "Instagram",
      handle: "@theb2foundation",
      href: "#",
      icon: <FaInstagram className="contact-icon" />,
    },
    {
      platform: "X (Twitter)",
      handle: "@theb2foundation",
      href: "#",
      icon: <FaXTwitter className="contact-icon" />,
    },
    {
      platform: "LinkedIn",
      handle: "@theb2foundation",
      href: "#",
      icon: <FiLinkedin className="contact-icon" />,
    },
  ];

  return (
    <section className="general-box contact" id="contact">
      <div className="general-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team to learn more about our environmental
            initiatives or to get involved in making a difference in your
            community.
          </p>
        </div>
        <div className="contact-methods">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="contact-icon-container">{contact.icon}</div>
              <h4>{contact.method}</h4>
              <p>{contact.text}</p>
              <Link className="contact-link" href={contact.href}>
                {contact.detail}
              </Link>
            </div>
          ))}
        </div>
        <div>
            <div className="social-header">
                <h4>Follow our social media</h4>
                <p>Stay updated on our latest environmental initiatives, cleanup events, and community impact stories.</p>
            </div>
          <div className="socials">
            {socials.map((social, index) => (
            <div key={index}>
              <Link href={social.href} className="social-link">
                <div className="contact-icon-container">
                  {social.icon}
                </div>
                <h5>{social.platform}</h5>
                <p>{social.handle}</p>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
