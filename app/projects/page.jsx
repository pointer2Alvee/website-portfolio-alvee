"use client";
import React from "react";
import { FiGithub, FiLink, FiYoutube } from "react-icons/fi";

const projects = [
  {
    id: 1,
    name: "IoT Smart Attendance System",
    youtubeLink: "https://www.youtube.com/watch?v=example1",
    githubLink: "https://github.com/username/project1",
    description: "An IoT-based system that automates attendance",
    detailPage: "/projects/projectDetails",
  },
  {
    id: 2,
    name: "Gesture-Controlled Car",
    youtubeLink: "https://www.youtube.com/watch?v=example2",
    githubLink: "https://github.com/username/project2",
    description: "A car controlled by hand gestures using Arduino",
    detailPage: "/projects/gesture-car",
  },
  {
    id: 3,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=RaLbDslqUZw",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 4,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 5,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 6,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 7,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 8,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 9,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 10,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 11,
    name: "Home Automation System",
    youtubeLink: "https://youtu.be/RaLbDslqUZw?si=H8t22xV8NUeIDP6I",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
  {
    id: 12,
    name: "Home Automation System",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    githubLink: "https://github.com/username/project3",
    description: "A smart home system controlled via mobile app using ESP32.",
    detailPage: "/projects/home-automation",
  },
];

const Projects = () => {
  return (
    <section className="px-1 py-3">
      <div className="container mx-auto">
        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-3 border rounded-xl bg-primary text-white shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Card as a link */}
              <a
                href={`${project.detailPage}?id=${project.id}`}
                className="block mb-0"
              >
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${project.youtubeLink.split("v=")[1]}/hqdefault.jpg`}
                  alt={project.name}
                  className="w-full h-50 object-cover rounded-xl"
                />
               {/* Project Name */}
               <div className="text-sm font-semibold text-accent mt-2">
                {project.name}
              </div>

              </a>

             

              {/* Description */}
              <p className="text-sm text-gray-300 mb-2">{project.description}</p>

              {/* GitHub Link */}
              <div className="flex items-center gap-1 text-sm">
                <FiGithub size={16} className="text-gray-400" />
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <FiYoutube size={16} className="ms-3 text-gray-400" />
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
              


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;