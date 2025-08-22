import React from "react";
import "@/styles/Community.css";
import Image from "next/image";

export const Community = () => {
  const community = [
    {
      title: "Neighbours making a difference",
      desc: "Volunteering at local cleanups brought me closer to my community.Seeing our collective impact inspires me to keep going and invite others to join.",
      src: "/images/casey.jpeg",
      name: "Casey Brokehart",
    },
    {
      title: "Motivated to create change",
      desc: "Learning about environmental issues pushed me to start small events. The encouragement I found here made every step feel meaningful.",
      src: "/images/casey.jpeg",
      name: "Riley Chen",
    },
    {
      title: "Building a legacy of care",
      desc: "Sharing eco-friendly habits with my kids has been so fulfilling. Cleanup days are now a special family tradition we all look forward to.",
      src: "/images/casey.jpeg",
      name: "Skylar Patel",
    },
    {
      title: "Together for a cleaner tomorrow",
      desc: "Joining this movement showed me how much one person can do. Every day, I see our efforts making a real difference.",
      src: "/images/casey.jpeg",
      name: "Jamie Brooks",
    },
  ];

  return (
    <section className="general-box">
      <div className="general-container">
        <div className="community-header">
          <h6>VOICES FROM OUR COMMUNITY</h6>
          <h1>Real stories, real change</h1>
        </div>
        <div className="community-details">
          {community.map((community, i) => (
            <div key={i} className="community-details-item">
              <h1>{community.title}</h1>
              <p>{community.desc}</p>
              <div>
                <Image
                  className="community-image"
                  src={community.src}
                  alt="hero image"
                  width={45}
                  height={45}
                />
                <span>{community.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
