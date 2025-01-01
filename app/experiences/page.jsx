"use client";
import React, { useState } from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    company: "proyogLab™",
    link: "https://www.facebook.com/proyogLab",
    position: "Founder | Software Engineer",
    duration: "Mar,2024 - Present",
    location: "Dhaka,Bangladesh",
    intro: "Launched proyogLab™, an IT-startup focused on developing R&D equipment, AI, software, and electronics.",
    logo: "/images/profilePic.png",
    details: [
      "Pioneered “alokShobdo” (PLD and Book), an innovative hardware platform for programming education.",
    ],
  },
  {
    id: 2,
    company: "Octagon Danismanlik",
    link: "https://www.facebook.com/proyogLab",
    position: "Research & Development Programmer (Part-Time)",
    duration: "Apr,2023 - Nov,2023",
    location: "Istanbul,Turkiye (Remote)",
    intro: "Handled diverse tasks in Machine Learning and Embedded Systems Development at a startup based in Türkiye.",
    logo: "/proyogLab.png",
    details: [
      "Designed and implemented machine learning models for facial recognition.",
    ],
  },
  {
    id: 3,
    company: "impedancePlus",
    link: "https://www.facebook.com/impedanceplus",
    position: "Founder | Embedded Systems Developer",
    duration: "Jun,2020 - Aug,2023",
    location: "Dhaka,Bangladesh",
    logo: "/proyogLab.png",
    intro: "Founded and operated impedancePlus, an e-commerce business selling electronic components and offering full embedded systems prototyping services while pursuing a full-time degree.",
    details: [
      "Developing and selling IoT-based products for educational purposes.",
    ],
  },
];

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section className="px-1 py-1">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex gap-0 mb-3">
          <button
            onClick={() => setActiveTab("work")}
            className={`py-1 px-3 text-white font-semibold rounded-lg ${
              activeTab === "work" ? "bg-accent" : "bg-primary"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`py-1 px-3 text-white font-semibold rounded-lg ${
              activeTab === "services" ? "bg-accent" : "bg-primary"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab("activities")}
            className={`py-1 px-3 text-white font-semibold rounded-lg ${
              activeTab === "activities" ? "bg-accent" : "bg-primary"
            }`}
          >
            Activities
          </button>
        </div>

        {/* Conditional Rendering */}
        <div className="flex flex-col gap-4">
          {activeTab === "work" && (
            <>
              {experiences.map((item) => (
                <div
                key={item.id}
                className="p-3 border rounded-lg bg-primary text-white shadow-xl"
              >
                {/* Company Name */}
                <a
                  href={item.link}
                  target="_blank"
                  className="block text-sm font-semibold text-accent hover:text-blue-300 transition-colors duration-200"
                >
                  {item.company}
                </a>
  
                {/* Position */}
                <div className="text-sm font-secondary mb-1">
                  {item.position}
                </div>
  
                {/* Duration & Location */}
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-3 ">
                  <FiClock size={16} />
                  {item.duration}
                  <FiMapPin size={16} className="ms-3" />
                  {item.location}
                </div>
  
                {/* Intro */}
                <p className="font-secondary text-sm text-gray-300">{item.intro}</p>
  
                {/* Details */}
                <ul className="list-disc pl-4 text-sm text-gray-300">
                  {item.details.map((detail, index) => (
                    <li className="font-secondary" key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              ))}
            </>
          )}

          {activeTab === "services" && (
            <div className="p-4 bg-primary text-white rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Our Services</h3>
              <ul className="list-disc pl-4 text-gray-300">
                <li>
                  Creating Embedded Systems
                  <ul className="list-circle pl-4 text-blue-500">
                    <li>
                      <a href="/project1" target="_blank">
                        Previous Work 1
                      </a>
                    </li>
                    <li>
                      <a href="/project2" target="_blank">
                        Previous Work 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Tutoring
                  <ul className="list-circle pl-4 text-blue-500">
                    <li>
                      <a href="/tutoring" target="_blank">
                        Tutoring Details
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "activities" && (
            <div className="p-4 bg-primary text-white rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Activities</h3>
              <ul className="list-disc pl-4 text-gray-300">
                <li>Participating in various competitions</li>
                <li>Business Works</li>
                <li>Environmental Care Certifications</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
