"use client";
import React, { useState } from "react";
import { FiMapPin, FiClock, FiGithub, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiGlobe, FiYoutube  } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


const ventures = [
  { 
    id : 1,
    name: "proyogLab™",
    detailPage: "../images/pr.jpg", // Replace with your logo's path
    establishmentDate: "Established: December 2023",
    location: "Dhaka, Bangladesh",
    aim: "proyogLab aims to solve modern real-world problems, through innovating R&D tools, AI systems, cutting-edge software and electronics.",
    description: "IT start-up focused on developing AI systems, R&D tools, software and electronic devices",
    services: [
      "AI System Development",
      "R&D Tools and Equipment",
      "Embedded Systems",
      "IoT Solutions",
      "Software Development",
    ],
    socialLinks: {
      facebook: "https://facebook.com/proyogLab",
      instagram: "https://instagram.com/proyogLab",
      youtube: "https://youtube.com/proyogLab",
      linkedin: "https://linkedin.com/company/proyogLab",
      website: "impedanceplus.blogspot.com",
      whatsapp: "+8801318580409"
    },
    recentWorks: "'alokShobdo' Programmable Learning Device", // Replace with your image path
    currentProjects: "Enhancing 'AlokShobdo' PLD and IoT-based R&D solutions.",
  },
  {
    id: 2,
    name: "impedancePlus",
    detailPage: "../images/ip.jpg",
    establishmentDate: "Established: June 2020",
    location: "Dhaka, Bangladesh",
    aim: "impedancePlus aims to provide top quality electronic and robotics components at a very resonable price and also provide high quality embedded/Robotics and software prototypes",
    description : "E-commerce business selling electronics-robotics components and providing complete embedded, IoT/Robotics systems and software prototypes.",
    services: [
      "Electronic Component Sales",
      "Robotics Prototyping",
      "IoT and Embedded Systems",
      "Circuit Design",
      "Software Prototyping",
    ],
    socialLinks: {
      facebook: "https://facebook.com/impedancePlus",
      instagram: "https://instagram.com/impedancePlus",
      youtube: "https://youtube.com/impedancePlus",
      linkedin: "https://linkedin.com/company/impedancePlus",
      website: "impedanceplus.blogspot.com",
      whatsapp: "+8801318580409"
    },
    recentWorks: "IoT-system prototype: IoT Fingerprint Attendance System",
    currentProjects: "Developing embedded prototypes and expanding e-commerce offerings.",
  },
];

const Ventures = () => {
  return (
    <section className="px-1 py-1 mt-4">
      <div className="container mx-auto">
      

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {ventures.map((project) => (
            <div
              key={project.id}
              className="p-3 border rounded-xl bg-primary text-white shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Thumbnail */}
              <img
                src={project.detailPage} // Use the `recentWorkImage` or relevant image property
                alt={project.name}
                className="w-full h-30 object-cover rounded-xl"
              />


              {/* Title*/}
              <h3 className="mt-3 text-sm font-bold text-accent">{project.name}</h3>
              {/* Description */}
              <p className="font-secondary text-sm text-gray-300 mb-2">{project.description}</p>
             

              {/* Estd. Date */}
              <p className="font-secondary text-sm text-gray-300 mb-1 flex items-center gap-1">
                <FiClock size={16} /> {project.establishmentDate}
              </p>


              {/*location */}
              <p className="font-secondary text-sm text-gray-300 mb-4 flex items-center gap-1">
                <FiMapPin size={16} /> {project.location}
              </p>

                {/*aim */}
                <p className="font-secondary text-sm text-gray-300 mb-1">{project.aim}</p>
             

               


               {/* recent works */}
               <p className="font-secondary text-sm text-gray-300 mb-1">{project.recentWorks}</p>

              {/* on going works */}
              <p className="font-secondary text-sm text-gray-300 mb-1">{project.currentProjects}</p>

              <div className="flex items-bottom">
              {/* Social Links */}
              <div className="flex items-center gap-3 mt-3">
                {project.socialLinks.facebook && (
                  <a
                    href={project.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-blue-600"
                  >
                    <FiFacebook className="stroke-blue-500" size={18} />
                  </a>
                )}
                {project.socialLinks.instagram && (
                  <a
                    href={project.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-pink-500"
                  >
                    <FiInstagram  className="stroke-orange-500" size={18} />
                  </a>
                )}
                {project.socialLinks.youtube && (
                  <a
                    href={project.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-red-500"
                  >
                    <FiYoutube  className="stroke-red-700" size={18} />
                  </a>
                )}
                {project.socialLinks.website && (
                  <a
                    href={project.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-blue-400"
                  >
                    <FiGlobe  className="stroke-blue-300" size={18} />
                  </a>
                )}
                {project.socialLinks.linkedin && (
                  <a
                    href={project.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-blue-700"
                  >
                    <FiLinkedin  className="stroke-blue-700" size={18} />
                  </a>
                )}
                {project.socialLinks.website && (
                  <a
                    href={`mailto:${project.socialLinks.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-red-400"
                  >
                    <FiMail  className="stroke-purple-500" size={18} />
                  </a>
                )}
                {project.socialLinks.whatsapp && (
                  <a
                    href={`https://wa.me/${project.socialLinks.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-green-500"
                  >
                    <FaWhatsapp  className="text-green-500" size={18} />
                  </a>
                )}
              </div>
              </div>

              
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
