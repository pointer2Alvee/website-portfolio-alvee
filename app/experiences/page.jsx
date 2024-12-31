"use client";
import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    company: "proyogLab™",
    position: "Founder | Software Engineer",
    duration: "Mar, 2024 - Present",
    location: "Dhaka, Bangladesh",
    intro: "Launched proyogLab™, an IT-startup focused on developing R&D equipments, AI , software and electronics.",
    logo: "/images/profilePic.png",
    details: [
      "Leading the development of embedded systems for educational products.",
      "Managing a team of engineers and designers for product development.",
      "Developing software and hardware solutions for educational projects."
    ]
  },
  {
    id: 2,
    company: "Octagon Danismanlik",
    position: "Research & Development Programmer (Part-Time)",
    duration: "Apr, 2023 - Nov, 2023",
    location: "Istanbul, Turkiye (Remote)",
    intro: "Handled diverse tasks in MachineLearning and Embedded Systems Development at a startup based in Türkiye.",
    logo: "/proyogLab.png",
    details: [
      "Designed and implemented machine learning models for facial recognition.",
      "Worked on the integration of AI models on embedded platforms.",
      "Collaborated remotely with international teams on software development."
    ]
  },
  {
    id: 3,
    company: "impedancePlus",
    position: "Founder | Embedded Systems Developer",
    duration: "Jun, 2020 - Present",
    location: "Dhaka, Bangladesh",
    logo: "/proyogLab.png",
    intro: "Founded and operated impedancePlus, an e-commerce business selling electronic components and offering full embedded systems (iot, robotics, software) prototyping services while pursuing a full-time degree.",
    details: [
      "Developing and selling IoT-based products for educational purposes.",
      "Creating embedded systems with Arduino and ESP32 platforms.",
      "Providing embedded solutions for various clients in Bangladesh."
    ]
  },

];

const Experiences = () => {
  return (
    <section className="px-7 py-1">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold mb-7 text-white">Work Experience</h1>
        
        <div className="flex flex-col gap-3">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 p-4 border rounded-xl bg-primary text-white shadow-md"
            >
              {/* Details */}
              <div className="flex flex-col">
                <h2 className="text-md font-semibold">{item.company}</h2>
                <p className="text-sm text-accent mt-0">{item.position}</p>
                <div className="flex items-center gap-3 text-gray-400 text-xs mt-0">
                  <span className="flex items-center gap-1">
                    <FiClock size={16} />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin size={16} />
                    {item.location}
                  </span>
                  
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs" >
                  <span>
                    {item.intro}
                  </span>
                </div>
                {/* Bullet Points for Details */}
                <ul className="list-disc pl-5 text-gray-300 text-sm mt-3">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
