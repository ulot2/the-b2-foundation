import React from "react";
import "@/styles/Team.css";
import Image from "next/image";

export const Team = () => {
    const TeamMembers = [
        {
            name: "Alex Monroe",
            role: "Community Engagement Lead",
            image: "/images/img1.jpeg",
        },
        {
            name: "Taylor Singh",
            role: "Eco Education Coordinator",
            image: "/images/img2.jpeg",
        },
        {
            name: "Morgan Avery",
            role: "Program Development Manager",
            image: "/images/img3.jpeg",
        },
        {
            name: "Jordan Lee",
            role: "Sustainability Advisor",
            image: "/images/img4.jpeg",
        },
        {
            name: "Casey Morgan",
            role: "Volunteer Coordinator",
            image: "/images/img5.jpeg",
        },
        {
            name: "Riley Bennett",
            role: "Partnerships Manager",
            image: "/images/img6.jpeg",
        },
        {
            name: "Skylar Quinn",
            role: "Communications Lead",
            image: "/images/img7.jpeg",
        },
        {
            name: "Drew Ellis",
            role: "Field Operations Manager",
            image: "/images/img8.jpeg",
        },
    ]
  return (
    <section className="general-box">
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
