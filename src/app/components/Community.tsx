import React from "react";
import "@/styles/Community.css";
import Image from "next/image";

export const Community = () => {
  const community = [
    {
      title: "Neighbours making a difference",
      desc: "Volunteering with the B2 Foundation for a cleanup has allowed me to connect with my environment in healthier ways.It has allowed me to to keep the environment as clean as possible to ensure a general healthier living environment.",
      src: "/images/tolu.png",
      name: "Toluwanimi Odeleye",
    },
    {
      title: "Motivated to create change",
      desc: "Joining this community reminded me that small actions add up. From picking up litter to inspiring friends to also do the same, I’ve seen how consistent effort sparks real impact. This isn’t just about cleaning, it’s about caring.",
      src: "/images/ojo.png",
      name: "Ayooluwa Ojo",
    },
    {
      title: "Together for a cleaner tomorrow",
      desc: "The B2 Foundation showed me that real change starts with individual responsibility and small actions that inspire others.",
      src: "/images/dami.png",
      name: "Damilola Ayandele",
    },
    {
      title: "Building a legacy of care",
      desc: "The B2 foundation inspired me to be a better person, I used throw dirt on the roadside before but now I'm a changed person",
      src: "/images/josh.png",
      name: "Joshua Ajiboye",
    },
    {
      title: "Motivated to create change",
      desc: "Volunteering with the B2 Foundation deepened my responsibility and awareness, making me more proactive about the environment.",
      src: "/images/temi.png",
      name: "Temiloluwa Sunmola",
    },
  ];

  return (
    <section className="general-box" id="community">
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
