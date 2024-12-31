"use client";
import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    company: "proyogLab™",
    position: "Founder | Software Engineer",
    duration: "Mar,24 - Present",
    location: "Dhaka, Bangladesh",
    intro: "Launched proyogLab™, an IT-startup focused on developing R&D equipments, AI , software and electronics.",
    logo: "/images/profilePic.png",
    details: [
      "Pioneered “alokShobdo” (PLD and Book), an innovative hardware platform for programming education.",
    ]
  },
  {
    id: 2,
    company: "Octagon Danismanlik",
    position: "Research & Development Programmer (Part-Time)",
    duration: "Apr,23 - Nov,23",
    location: "Istanbul, Turkiye (Remote)",
    intro: "Handled diverse tasks in MachineLearning and Embedded Systems Development at a startup based in Türkiye.",
    logo: "/proyogLab.png",
    details: [
      "Designed and implemented machine learning models for facial recognition.",
      
    ]
  },
  {
    id: 3,
    company: "impedancePlus",
    position: "Founder | Embedded Systems Developer",
    duration: "Jun,20 - Present",
    location: "Dhaka, Bangladesh",
    logo: "/proyogLab.png",
    intro: "Founded and operated impedancePlus, an e-commerce business selling electronic components and offering full embedded systems (iot, robotics, software) prototyping services while pursuing a full-time degree.",
    details: [
      "Developing and selling IoT-based products for educational purposes.",
     
    ]
  },

];

const Experiences = () => {
  return (
    <section className="px-0 py-2">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold mb-7 text-white">Work Experience</h1>
        
        <div className="flex flex-col gap-3">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 p-4 border rounded-xl bg-primary text-white shadow-md"
            >
              {/* Details */}
              <div className="flex flex-col text-justify">
                <h2 className="text-md font-semibold">{item.company}</h2>
                <p className="text-sm text-accent mt-0">{item.position}</p>
                <div className="flex items-center gap-3 text-gray-400 text-xs mt-0 mb-2">
                  <span className="flex items-center gap-1">
                    <FiClock size={16} />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin size={16} />
                    {item.location}
                  </span>
                  
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm" >
                  <span>
                    {item.intro}
                  </span>
                </div>
                {/* Bullet Points for Details */}
                <ul className="list-disc pl-4 text-gray-300 text-sm ">
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
