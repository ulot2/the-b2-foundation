import React from "react";
import "@/styles/Team.css";
import Image from "next/image";

export const Team = () => {
  const TeamMembers = [
    {
      name: "Faith Sodiya",
      role: "Executive Director (Founder)",
      image: "/images/faith.png",
    },
    {
      name: "Ayo Oshinowo",
      role: "Community Engagement & Volunteer Coordinator",
      image: "/images/ayo.png",
    },
    {
      name: "Precious Alake",
      role: "Finance & Fundraising Lead",
      image: "/images/precious.png",
    },
    {
      name: "Faith Sodiya",
      role: "Programs & Operations Lead",
      image: "/images/faith.png",
    }
  ];
  return (
    <section className="general-box" id="team">
      <div className="general-container team">
        <div className="team-header">
          <h1>Meet the changemakers</h1>
          <h1>United for a litter-free world</h1>
          <p>
            Our team is a passionate group of advocates, educators, and
            organizers dedicated to inspiring action and building a cleaner,
            healthier environment for everyone. Each person brings unique energy
            and heart to our mission and together, we’re making a real
            difference.
          </p>
        </div>
        <div className="teams-container">
          {TeamMembers.map((member, i) => (
            <div key={i} className="team-item">
              <Image
                className="team-image"
                src={member.image}
                alt="team-image"
                width={85}
                height={85}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
