"use client";
import React, { useState } from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    company: "proyogLab™",
    link: "https://www.facebook.com/proyogLab",
    position: "Founder | Software Engineer",
    duration: "Mar,24 - Present",
    location: "Dhaka, Bangladesh",
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
    duration: "Apr,23 - Nov,23",
    location: "Istanbul, Turkiye (Remote)",
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
    duration: "Jun,20 - Aug,23",
    location: "Dhaka, Bangladesh",
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
    <section className="px-0 py-2">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex gap-1 mb-3">
          <button
            onClick={() => setActiveTab("work")}
            className={`py-1 px-3 text-white font-semibold rounded-lg ${
              activeTab === "work" ? "bg-accent" : "bg-primary"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`py-1 px-4 text-white font-semibold rounded-lg ${
              activeTab === "services" ? "bg-accent" : "bg-primary"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab("activities")}
            className={`py-1 px-4 text-white font-semibold rounded-lg ${
              activeTab === "activities" ? "bg-accent" : "bg-primary"
            }`}
          >
            Activities
          </button>
        </div>

        {/* Conditional Rendering */}
        <div className="flex flex-col gap-1">
          {activeTab === "work" && (
            <>
              {experiences.map((item) => (
                <div
                  key={item.id}
                  className="p-3 mb-1 mt-1 border border-accent rounded-xl bg-primary text-white shadow-md"
                >
                  {/* Company and Location */}
                  <div className="flex justify-between items-center text-md font-semibold">
                    <span>
                      <a href={item.link} target="_blank" className="text-white hover:text-blue-500 transition-colors duration-200">
                        {item.company}
                        </a>
                    </span>
                    <span className="flex items-center gap-2 text-gray-400">
                        <FiMapPin size={16} />
                        {item.location}
                      </span>
                  </div>

                  {/* Position and Duration */}
                  <div className="flex justify-between items-center text-sm text-accent">
                    
                    <span> {item.position}</span>
                    <span className="flex items-center gap-2">
                        <FiClock size={16} />
                        {item.duration}
                    </span>
                  </div>

                  {/* Intro */}
                  <p className="mt-1 text-gray-400">{item.intro}</p>
                  {/* Bullet Points */}
                  <ul className="list-disc px-4 text-gray-300 text-sm mt-0">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
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
