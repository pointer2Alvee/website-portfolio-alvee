"use client";
import React, { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiYoutube, FiMapPin, FiClock } from 'react-icons/fi';
import { SiGooglescholar, SiLeetcode } from 'react-icons/si';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible'; // Import Radix Collapsible

import Image from 'next/image'; 
import profilePic from '@/images/profilePic.png'; 


const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" h-full px-7 py-3 xl:py-7 overflow-hidden">
      <div className="mx-auto h-full container overflow-y-auto">
        <div className="flex flex-col xl:flex-row items-start xl:items-top gap-5">

          {/* ------------------------------ Profile Section ------------------------------*/}
          <div className="flex flex-col items-center md:items-start gap-3 w-full xl:w-[20%]">
            
            {/* Profile Picture */}
            <div className="w-40 h-40 mx-auto xl:mx-0 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <Image
                src={profilePic}
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name, Title, Location */}
            <div className="text-center xl:text-center">
              <h1 className="text-xl font-semibold">Sadman Alvee</h1>
              <p className="text-accent text-md mb-1">ML, ES, Robotics</p>
              <div className="flex items-center justify-center xl:justify-start gap-2 text-gray-200 mt-0 text-sm">
                <FiMapPin size={18} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Media Links - Collapsible Button */}
            <div className="w-full xl:hidden"> {/* Hidden in large screens */}
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="w-full py-2 px-4 bg-gray-800 text-white text-center rounded-md">
                  {isOpen ? "Hide" : "Follow"}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-3">
                  <div className="flex flex-col items-left gap-1">
                    <a href="mailto:your_email@example.com" className="flex items-center gap-2 text-gray-500 hover:text-green-200">
                      <FiMail size={18} /> Email
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                      <FiLinkedin size={18} /> LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white">
                      <FiGithub size={18} /> GitHub
                    </a>
                    <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-600">
                      <SiGooglescholar size={18} /> Google Scholar
                    </a>
                    <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
                      <SiLeetcode size={18} /> LeetCode
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-red-600">
                      <FiYoutube size={18} /> YouTube
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Social Media Links - Always Visible on Large Screens */}
            <div className="hidden xl:flex flex-col items-start gap-1 mt-2">
              <a href="mailto:your_email@example.com" className="flex items-center gap-2 text-gray-500 hover:text-green-200">
                <FiMail size={18} /> Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                <FiLinkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white">
                <FiGithub size={18} /> GitHub
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-600">
                <SiGooglescholar size={18} /> Google Scholar
              </a>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
                <SiLeetcode size={18} /> LeetCode
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-red-600">
                <FiYoutube size={18} /> YouTube
              </a>
            </div>
          </div>

          {/* ------------------------------ Text Section ------------------------------ */}
          <div className="xl:w-[80%]">
            <p className="text-white-700 text-justify mb-5">
              Passionate about developing efficient and scalable solutions in Machine Learning and Embedded Systems. With a keen interest in innovation and a strong commitment to excellence, I aim to leverage technology to solve real-world problems.
            </p>

            <h1 className="text-xl font-bold mb-1 text-white">EXPERTISE:</h1>
            <ul className="text-white mb-7">
              <li>- Machine Learning</li>
              <li>- Deep Learning</li>
              <li>- Embedded Systems Development</li>
              <li>- Circuit Design</li>
              <li>- DSA</li>
            </ul>

            <h1 className="text-xl font-bold mb-3 text-white">Technology & Tools:</h1>
            <div className="flex gap-6 items-center">
              <div className="flex flex-col items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" className="h-10 w-10" />
                <p className="text-white text-sm mt-2">Python</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png" alt="PyTorch" className="h-10 w-10" />
                <p className="text-white text-sm mt-2">PyTorch</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" alt="Arduino" className="h-10 w-10" />
                <p className="text-white text-sm mt-2">Arduino</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" className="h-10 w-10" />
                <p className="text-white text-sm mt-2">TensorFlow</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="Embedded C" className="h-10 w-10" />
                <p className="text-white text-sm mt-2">Embedded C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;