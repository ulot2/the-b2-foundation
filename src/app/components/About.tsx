"use client";
import React from "react";
import { useEffect, useRef } from "react";
import "@/styles/About.css";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { SiTheconversation } from "react-icons/si";
import { GiPolarStar } from "react-icons/gi";
import { MdPerson } from "react-icons/md";

export const About = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const items = [
    {
      icon: <FaRegCheckCircle className="about-mission-icon" />,
      title: "Neighbourhood Cleanup",
      desc: "Roll up your sleeves with us and help transform parks, streets, and riversides into cleaner, greener spaces for everyone to enjoy.",
    },
    {
      icon: <CiCalendar className="about-mission-icon" />,
      title: "Youth engagement",
      desc: "Inspire the next generation with interactive workshops and activities that make caring for our planet fun and meaningful.",
    },
    {
      icon: <SiTheconversation className="about-mission-icon" />,
      title: "Policy advocacy",
      desc: "Join our collective voice as we champion smarter policies and encourage everyone to take part in protecting our environment.",
    },
    {
      icon: <GiPolarStar className="about-mission-icon" />,
      title: "Recycling events",
      desc: "Bring your recyclables and discover how easy it is to turn everyday waste into valuable resources for our community.",
    },
    {
      icon: <MdPerson className="about-mission-icon" />,
      title: "Volunteer community",
      desc: "Meet passionate people, share ideas, and work together to create lasting change in the places we all call home.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("visible");
          } else {
            el.classList.remove("visible");
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="general-box">
      <div className="general-container">
        <div className="about-header">
          <h1>About B2 Foundation</h1>
          <p>
            We are a foundation dedicated to educating communities about the
            environmental and social impact of litter, and empowering people to
            create positive change.
          </p>
        </div>
        <div className="about-mission">
          <div className="about-details">
            <h1>Our Mission</h1>
            <p>
              {"Our mission is to reduce waste in our communities by promoting responsible disposal habits and raising awareness about the dangers of littering. We work with individuals, groups, and businesses to encourage proper waste management, sustainable practices, and cleaner, healthier environments."}
            </p>
            <p>
              {"The Fight Against Littering! is built on responsibility, respect, sustainability, community, and health. We believe everyone has a duty to care for the spaces they share. By taking ownership of our waste, we can create litter-free communities, protect nature, and leave a cleaner world for future generations."}
            </p>
          </div>
          <div className="about-details">
            <Image
              className="about-image"
              src="/images/about-us.jpg"
              alt="hero image"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="about-mission-container">
          <div className="about-mission-header">
            <p>{"what we're making possible"}</p>
            <h1>Small actions, big environmental impact</h1>
          </div>
          <div className="about-mission">
            {items.map((item, i) => (
              <div
                key={i}
                className={`item ${i % 2 === 0 ? "item-left" : "item-right"}`}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
