import React from "react";
import "@/styles/Community.css";
import Image from "next/image";

export const Community = () => {
  return (
    <section className="community">
      <div className="community-container">
        <div className="community-header">
          <h6>VOICES FROM OUR COMMUNITY</h6>
          <h1>Real stories, real change</h1>
        </div>
        <div className="community-details">
          <div className="community-details-item">
            <h1>Neighbours making a difference</h1>
            <p>
              Volunteering at local cleanups brought me closer to my community.
              Seeing our collective impact inspires me to keep going and invite
              others to join.
            </p>
            <div>
              <Image
                className="community-image"
                src="/images/casey.jpeg"
                alt="hero image"
                width={45}
                height={45}
              />
              <span>Casey Brokehart</span>
            </div>
          </div>
          <div className="community-details-item">
            <h1>Neighbours making a difference</h1>
            <p>
              Volunteering at local cleanups brought me closer to my community.
              Seeing our collective impact inspires me to keep going and invite
              others to join.
            </p>
            <div>
              <Image
                className="community-image"
                src="/images/casey.jpeg"
                alt="hero image"
                width={45}
                height={45}
              />
              <span>Casey Brokehart</span>
            </div>
          </div>
          <div className="community-details-item">
            <h1>Neighbours making a difference</h1>
            <p>
              Volunteering at local cleanups brought me closer to my community.
              Seeing our collective impact inspires me to keep going and invite
              others to join.
            </p>
            <div>
              <Image
                className="community-image"
                src="/images/casey.jpeg"
                alt="hero image"
                width={45}
                height={45}
              />
              <span>Casey Brokehart</span>
            </div>
          </div>
          <div className="community-details-item">
            <h1>Neighbours making a difference</h1>
            <p>
              Volunteering at local cleanups brought me closer to my community.
              Seeing our collective impact inspires me to keep going and invite
              others to join.
            </p>
            <div>
              <Image
                className="community-image"
                src="/images/casey.jpeg"
                alt="hero image"
                width={45}
                height={45}
              />
              <span>Casey Brokehart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
