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
    techStack: " C, Embedded Systems Development, Arduino IDE, Sensor-Modules, Circuit Design, Entrepreneurship",
    intro: "Founded and currently overseeing my second startup, proyogLab™, an IT venture focused on developing AI systems, R&D tools-equipment, software, and electronics. Currently working on enhancing 'alokShobdo' PLD.",
    logo: "/images/profilePic.png",
    details: [
      "Pioneered “alokShobdo” (PLD and Book), an innovative hardware platform for programming education.",
      "Authored my debut book, 'alokShobdo', a guide to learning embedded programming and electronics.",
    ],
  },
  {
    id: 2,
    company: "Octagon Danismanlik",
    link: "https://www.facebook.com/proyogLab",
    position: "Research & Development Programmer (Part-Time)",
    duration: "Apr,2023 - Nov,2023",
    location: "Istanbul,Turkiye (Remote)",
    techStack: "Python, C, OpenCV, Linux, ESP32, Arduino, Segger, FaceNet, Deep Learning, dlib, CNN, EEPROM",
    intro: "Had the privilege of working on diverse tasks involving Machine Learning, Deep Learning, Computer Vision, and Embedded Systems Development at a startup based in Istanbul, Türkiye.",
    logo: "/proyogLab.png",
    details: [
      "Developed and tested face detection and recognition systems using pre-trained ML/DL models for prototype applications.", 
      "Optimized image preprocessing and algorithms, reducing execution time and enhancing on performance embedded platform .",
      "Explored and attempted vectorization techniques to further boost efficiency.",
      "Designed and implemented embedded software and hardware circuits for Arduino-based prototypes.",
      "Worked with BLE (Bluetooth Low Energy) firmware for Nordic SoCs, enabling seamless communication with mobile apps.",
      "Successfully facilitated data transfer using ESP32 BLE modules. Gained foundational knowledge of BLE protocols for Nordic SoCs.",
    ],
  },
  {
    id: 3,
    company: "impedancePlus",
    link: "https://www.facebook.com/impedanceplus",
    position: "Founder | Embedded Systems Developer",
    duration: "Jul,2020 - Aug,2023",
    location: "Dhaka,Bangladesh",
    techStack: "C, Embedded Systems, Arduino, IoT, ESP32, Sensor-Modules, Fritzing, Tinkercad, Entrepreneurship",
    logo: "/proyogLab.png",
    intro: "Founded and operated my first startup, impedancePlus, an e-commerce business providing electronic components and comprehensive services in embedded-systems/IoT/robotics and software prototyping, all while completing my full-time degree.",
    details: [
      "Sold a wide range of electronic and robotics components, including Arduino boards, ESP modules, sensors, shields, motors, ICs.",
      "Developed software solutions and complete embedded system prototypes, including application-level softwares and circuit design, driving a significant increase in revenue.",
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
                <div className="flex items-center gap-1 text-xs text-green-400 mb-3 ">
                  <FiClock size={16} />
                  {item.duration}
                  <FiMapPin size={16} className="ms-3" />
                  {item.location}
                </div>

                {/* techStack */}  
                <p className="font-secondary text-sm text-gray-300"> 
                  <span className="font-secondary font-bold ">Tech-Stack:</span> {item.techStack}
                  </p>

                {/* Intro */}
                <p className="font-secondary text-sm text-gray-200">{item.intro}</p>
  
                {/* Details */}
                <ul className="list-disc pl-5 text-sm text-gray-300">
                  {item.details.map((detail, index) => (
                    <li 
                      className="font-secondary" 
                      key={index}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
              ))}
            </>
          )}

          {activeTab === "services" && (
            <div className="p-4 bg-primary text-white rounded-xl">
              <h3 className="font-semibold text-lg mb-3">My Services</h3>
              <ul className="list-disc pl-4 text-gray-300">
                <li>
                  Creating Embedded Systems
                  <ul className="list-circle pl-4 text-blue-500">
                    <li>
                      <a href="/project1" target="_blank">
                        IoT Smart Attendance System
                      </a>
                    </li>
                    <li>
                      <a href="/project2" target="_blank">
                        RF Gesture Controlled Car
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                Creating AI Systems
                  <ul className="list-circle pl-4 text-blue-500">
                    <li>
                      <a href="/tutoring" target="_blank">
                        LLM TV Series Analysis System
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
                <li>Participated in MindSparks, 2022 | AUST, Dhaka, Bangladesh</li>

              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
