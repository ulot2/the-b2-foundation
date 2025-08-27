import React from "react";
import "@/styles/GetInvolved.css";
import { CiCalendar } from "react-icons/ci";
import { HiUsers } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuBookOpen } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

export const GetInvolved = () => {
  const actions = [
    {
      icon: <CiCalendar style={{ color: "#16a34a" }} className="get-icon" />,
      title: "Join Cleanup Events",
      description:
        "Participate in organized community cleanup events in your area.",
      action: "Find Events",
    },
    {
      icon: <HiUsers style={{ color: "#155dfc" }} className="get-icon" />,
      title: "Start a Local Group",
      description:
        "Organize your own cleanup group and make a difference in your community.",
      action: "Get Started",
    },
    {
      icon: (
        <IoShareSocialOutline
          style={{ color: "#9810fa" }}
          className="get-icon"
        />
      ),
      title: "Spread Awareness",
      description:
        "Share information about litter's impact on social media and with friends.",
      action: "Share Now",
    },
    {
      icon: (
        <BsCurrencyDollar style={{ color: "#f66020" }} className="get-icon" />
      ),
      title: "Make a Donation",
      description:
        "Support our programs and help us expand our reach to more communities.",
      action: "Donate",
    },
    {
      icon: <LuBookOpen style={{ color: "#e7000b" }} className="get-icon" />,
      title: "Educate Others",
      description:
        "Use our educational materials to teach others about litter prevention.",
      action: "Get Materials",
    },
    {
      icon: <LuMapPin style={{ color: "#009689" }} className="get-icon" />,
      title: "Report Litter Hotspots",
      description:
        "Help identify areas that need attention by reporting problem locations.",
      action: "Report Now",
    },
  ];
  return (
    <section id="get-involved" className="general-box getInvolved">
      <div className="general-container">
        <div className="header">
          <h1>Get Involved</h1>
          <p>
            Ready to make a difference? Here are practical ways you can join our
            mission to create cleaner, healthier communities.
          </p>
        </div>

        <div className="get-involved-details">
          {actions.map((action, index) => (
            <div key={index} className="get-involved-item">
              <div>{action.icon}</div>
              <h1 className="text-xl">{action.title}</h1>
              <p>{action.description}</p>
              <button className="w-full">{action.action}</button>
            </div>
          ))}
        </div>
        <div className="take-action">
          <h1>Ready to take action?</h1>
          <p>
            Join thousands of volunteers already making a difference in their
            communities
          </p>
          <div>
            <button>Sign up for updates</button>
          <button>Find Local Events</button>
          </div>
        </div>
      </div>
    </section>
  );
};
