"use client";
import React, { useState } from "react";
import { FiGithub, FiYoutube } from "react-icons/fi";

const hardwareProjects = [
  {
    id: 1,
    name: "IoT Fingerprint Attendance",
    youtubeLink: "https://www.youtube.com/watch?v=example1",
    githubLink: "https://github.com/pointer2Alvee/iot-smart-fingerprint-attendance.git",
    description: "An IoT-based system that automates attendance",
    detailPage: "/projects/projectDetails",
  },
  {
    id: 2,
    name: "Automated Parking",
    youtubeLink: "https://www.youtube.com/watch?v=example2",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-automated-parking.git",
    description: "A car controlled by hand gestures using Arduino",
    detailPage: "/projects/gesture-car",
  },
  {
    id: 3,
    name: "Security Surveillance Robot",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-security-surveillance-service-bot.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 4,
    name: "IoT Automated Residence",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/iot-automated-residence.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 5,
    name: "Distance Measuring System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-distance-measuring-device.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 6,
    name: "Solar Bat Charge Controller",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-solar-battery-charge-controller.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 7,
    name: "RF Gesture Controlled Car",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-rf-gesture-controlled-car.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 8,
    name: "Dual-Axis Solar Tracker",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-dual-axis-solar-tracker.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 9,
    name: "Ulttrasonic Radar",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/pointer2Alvee/embd-sys-ultrasonic-radar.git",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
];

const softwareProjects = [
  {
    id: 1,
    name: "LLM TV-series Analysis",
    youtubeLink: "",
    githubLink: "https://github.com/pointer2Alvee/llm-tv-series-analysis.git",
    description: "An AI chatbot powered by NLP and machine learning.",
    detailPage: "/projects/chatbot",
  },
  {
    id: 2,
    name: "Virtual Reality",
    youtubeLink: "",
    githubLink: "https://github.com/pointer2Alvee/website-reality-virtual.git",
    description: "A scalable e-commerce platform built with React and Node.js.",
    detailPage: "/projects/ecommerce",
  },
  {
    id: 3,
    name: "Portfolio Website",
    youtubeLink: "",
    githubLink: "",
    description: "A personal portfolio website showcasing projects and skills.",
    detailPage: "/projects/portfolio",
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
              <a href={project.detailPage} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://img.youtube.com/vi/${project.youtubeLink.split("v=")[1]}/hqdefault.jpg`}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h3 className="mt-3 text-sm font-bold text-accent">{project.name}</h3>
              </a>

              {/* Description */}
              <p className="font-secondary text-sm text-gray-300 mb-4">{project.description}</p>

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
