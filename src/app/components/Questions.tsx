import React from "react";
import "@/styles/Questions.css";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export const Questions = () => {
  const questions = [
    {
      question: "Why does litter matter?",
      answer:
        "Litter isn’t just unsightly—it endangers wildlife, pollutes water, and harms our shared spaces. Every piece picked up helps restore balance and beauty to our environment.",
    },
    {
      question: "How can I help?",
      answer:
        "Start simple: pick up litter, talk to your neighbors, and invite others to join you. Every action, big or small, inspires change.",
    },
    {
      question: "What support is available",
      answer:
        "You’ll find resources, friendly advice, and a supportive community ready to help you organize cleanups and spread awareness.",
    },
    {
      question: "Who benefits from clean spaces?",
      answer:
        "Clean environments mean healthier people, thriving wildlife, and a brighter future for everyone—today and tomorrow.",
    },
  ];

  const preventionTips = [
    {
      number: "1",
      tip: "Always carry a reusable bag to avoid using plastic bags",
    },
    {
      number: "2",
      tip: "Properly dispose of cigarette butts in designated receptacles",
    },
    {
      number: "3",
      tip: "Secure trash in vehicles to prevent roadside litter",
    },
    {
      number: "4",
      tip: "Choose products with minimal or recyclable packaging",
    },
    {
      number: "5",
      tip: "Participate in local cleanup events at least once a month",
    },
    {
      number: "6",
      tip: "Report illegal dumping to local authorities immediately",
    },
  ];
  return (
    <section className="general-box questions" id="faq">
      <div className="general-container questions-container">
        <div className="questions-flex">
          <div className="questions-header">
            <h1>Your questions, answered here</h1>
            <p>
              Curious about how you can help keep our world cleaner? Explore
              these common questions to learn more about making a real impact,
              one small step at a time.
            </p>
            <button>Join now</button>
          </div>
          <div className="all-questions">
            {questions.map((question, i) => (
              <div key={i}>
                <h1>{question.question}</h1>
                <p>{question.answer}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <div className="prevention-container">
          <div className="prevention-tips">
            <h1>Prevention Tips</h1>
            {preventionTips.map((preventionTip, number) => (
              <div key={number}>
                <h4>{preventionTip.number}</h4>
                <p>{preventionTip.tip}</p>
              </div>
            ))}
          </div>
          <div className="research">
            <h1>Research & Studies</h1>
            <p>
              Stay informed with the latest research on litter's environmental
              impact and the effectiveness of prevention strategies.
            </p>
            <div>
              <h6>Ocean Plastic Report 2024</h6>
              <Link href="#" className="research-link">
                <FiExternalLink />
              </Link>
            </div>
            <div>
              <h6>Ocean Plastic Report 2024</h6>
              <Link href="#" className="research-link">
                <FiExternalLink />
              </Link>
            </div>
            <div>
              <h6>Ocean Plastic Report 2024</h6>
              <Link href="#" className="research-link">
                <FiExternalLink />
              </Link>
            </div>
            <div>
              <h6>Ocean Plastic Report 2024</h6>
              <Link href="#" className="research-link">
                <FiExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
