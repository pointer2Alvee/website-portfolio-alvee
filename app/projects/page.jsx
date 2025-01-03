"use client";
import React, { useState } from "react";
import { FiGithub, FiYoutube } from "react-icons/fi";

const hardwareProjects = [
  {
    id: 1,
    name: "IoT Fingerprint Attendance",
    img: "../images/projects/iot_Fingerprint.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example1",
    githubLink: "https://github.com/pointer2Alvee/iot-smart-fingerprint-attendance.git",
    description: "An IoT system for fingerprint based attendance, marks and notices that comes with a web Dashboard",
    techs:"C, ESP32, Arduino Nano, Firebase, Sensor-Modules, html, css",
    detailPage: "/projects/projectDetails",
  },
  {
    id: 2,
    name: "Automated Parking",
    img: "../images/projects/auto_parking.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example2",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-automated-parking.git",
    description: "An automated parking system to automate entry of vehicles that also shows capacity of parking lot",
    techs:"C, Arduino Nano, Sensor-Modules, Circuitry",
    detailPage: "/projects/gesture-car",
  },
  {
    id: 3,
    name: "Security Surveillance Robot",
    img: "../images/projects/3sBot.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-security-surveillance-service-bot.git",
    description: "A robot used for surveillance in risky and unreachable areas. Also has security features",
    techs:"C, Arduino, Sensor-Modules, Hardware Circuitry",
    detailPage: "/projects/home-automation",
  },
  {
    id: 4,
    name: "IoT Automated Residence",
    img: "../images/projects/iot_automated_home.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/iot-automated-residence.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    techs:"C, ESP32, Arduino, Blynk IoT app, Sensor-Modules, Motors, Circuitry",
    detailPage: "/projects/home-automation",
  },
  {
    id: 5,
    name: "Distance Measuring System",
    img: "../images/projects/dist_measure.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-distance-measuring-device.git",
    description: "A device to measure distance using ultrasonic sensor, Circuitry",
    techs:"C, Arduino UNO, Sensor-Modules",
    detailPage: "/projects/home-automation",
  },
  {
    id: 6,
    name: "Solar Bat Charge Controller",
    img: "../images/projects/Solar_Bat_Chrg_ctrl.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-solar-battery-charge-controller.git",
    description: "A Controller for solar based battery charger",
    techs:"C, Arduino Nano, Firebase, Sensor-Modules, Circuitry",
    detailPage: "/projects/home-automation",
  },
  {
    id: 7,
    name: "RF Gesture Controlled Car",
    img: "../images/projects/Gesture_car.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-rf-gesture-controlled-car.git",
    description: "A car controlled by hand gestures using Arduino and 433MHz radio frequency",
    techs:"C, ArduinoLilyPad, Accelerometer-Gyroscope, Sensor-Modules, Motors, Circuitry",
    detailPage: "/projects/home-automation",
  },
  {
    id: 8,
    name: "Dual-Axis Solar Tracker",
    img: "../images/projects/Dual_axis_solar.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-dual-axis-solar-tracker.git",
    description: "A embedded system to track and orient itself to solar energry source with rain water protection alarm",
    techs:"C, Arduino nano, Solar panel, Sensor-Modules, Circuitry",
    detailPage: "/projects/home-automation",
  },
  {
    id: 9,
    name: "Ulttrasonic Radar",
    img: "../images/projects/US_radar.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-ultrasonic-radar.git",
    description: "A radar system using ultrasonic sensor with alarm when object detected, also shows real-time radar graphics",
    techs:"C, Arduino, Sensor-Modules, Hardware Circuitry, processing-IDE, java",
    detailPage: "/projects/home-automation",
  },
];

const softwareProjects = [
  {
    id: 1,
    name: "LLM TV-series Analysis",
    img: "../images/projects/software.jpg",
    youtubeLink: "",
    githubLink: "https://github.com/pointer2Alvee/llm-tv-series-analysis.git",
    description: "An NLP system for theme classification, charater network, chatbot for naruto tv-series",
    techs:"Python, Pytorch, LLM, ML/DL, Gradio, Transformer models, Hugging face",
    detailPage: "/projects/chatbot",
  },
  {
    id: 2,
    name: "Virtual Reality",
    img: "../images/projects/rnv.jpg",
    youtubeLink: "",
    githubLink: "https://github.com/pointer2Alvee/website-reality-virtual.git",
    description: "A scalable social media of the future",
    techs:"PHP, HTML, CSS, SQL",
    detailPage: "/projects/ecommerce",
  },
  {
    id: 3,
    name: "Portfolio Website",
    img: "../images/projects/software_two.jpg",
    youtubeLink: "",
    githubLink: "",
    description: "A personal portfolio website showcasing projects and skills.",
    techs:"Next.js, Tailwind, HTML, CSS",
    detailPage: "",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("hardware");

  const projects = activeTab === "hardware" ? hardwareProjects : softwareProjects;

  return (
    <section className="px-1 py-1">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex justify-left gap-0 mb-3">
          <button
            onClick={() => setActiveTab("hardware")}
            className={`py-1 px-3 mr-2 font-semibold  rounded-lg ${
              activeTab === "hardware" ? "bg-accent text-white" : "bg-primary text-white"
            }`}
          >
            Hardware
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`py-1 px-3  font-semibold  rounded-lg ${
              activeTab === "software" ? "bg-accent text-white" : "bg-primary text-white"
            }`}
          >
            Software
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-3 border rounded-xl bg-primary text-white shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Thumbnail and Title as Links */}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-ull object-cover rounded-xl"
                />
                <h3 className="mt-3 text-sm font-bold text-accent">{project.name}</h3>
              </a>

              {/* Description */}
              <p className="font-secondary text-justify text-sm text-gray-300 mb-2 ">{project.description}</p>

               {/* Tech-stack */}
               <p className="font-secondary text-sm text-gray-400 mb-4">Techs:- {project.techs}</p>

              {/* Links */}
              <div className="flex text-sm items-center gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-1 "
                  rel="noopener noreferrer"
                >
                  <FiGithub size={18} />
                  <span className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200">Github</span>
                </a>
                
                {/* uncomment later when video availabe and uploaded to youtube}
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  className=" flex items-center gap-1"
                  rel="noopener noreferrer"
                >
                  <FiYoutube size={18} />
                  <span className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200">Demo</span>
                </a>
                {*/}

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
