"use client";
import React, { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiYoutube, FiMapPin, FiClock } from 'react-icons/fi';
import { SiGooglescholar, SiLeetcode } from 'react-icons/si';
import { FaKaggle } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible'; // Import Radix Collapsible

import Image from 'next/image'; 
import profilePic from '@/images/profilePic.png'; 


const SideProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" h-full px-3 py-3 xl:py-2 overflow-hidden">
      {/*}<div className="mx-auto h-full container overflow-y-auto">
        <div className="flex flex-col xl:flex-row items-start xl:items-top gap-5"> {*/}

          {/* ------------------------------ Profile Section ------------------------------*/}
          <div className="flex flex-col items-center md:items-start gap-3 w-full xl:w-full ">
            
          <div className="flex flex-col items-center xl:items-start space-y-4">
            {/* Profile Image */}
            <div className="w-40 h-40 mx-auto xl:mx-0 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image
                src={profilePic}
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name, Title, Location */}
            <div className="text-center xl:text-left">
              <h1 className="text-md font-semibold">Sadman Alvee</h1>
              <p className="text-accent text-sm ">Founder,SWE @ proyogLab™</p>
              <p className="text-accent text-sm mb-1">Founder @ impedancePlus</p>
              <p className="text-accent text-sm">ML/DL, ES, Robotics</p>
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
                <a href="https://maps.app.goo.gl/5CfSPm1uGbfeDcMU9" className="flex items-center gap-2 text-white hover:text-gray-400">
                    <FiMapPin size={18} /> Dhaka,Bangladesh
                </a>
                  <a href="mailto:your_email@example.com" className="flex items-center gap-2 text-gray-500 hover:text-green-200">
                    <FiMail size={18} /> Email
                </a>
                
                <a href="https://linkedin.com/in/sadman-alvee-1bb464249" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                    <FiLinkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/Pointer2Alvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white">
                    <FiGithub size={18} /> GitHub
                </a>
                {/*}<a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-600">
                    <SiGooglescholar size={18} /> Google Scholar
                </a>{*/}
                <a href="https://www.leetcode.com/iamalvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
                    <SiLeetcode size={18} /> LeetCode
                </a>
                <a href="https://www.youtube.com/@pointer2Alvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-red-600">
                    <FiYoutube size={18} /> YouTube
                </a>
                <a href="https://kaggle.com/pointer2alvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400">
                    <FaKaggle size={18} /> Kaggle
                </a>
                <a href="https://huggingface.co/iamAlvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-yellow-300">
                    <SiHuggingface size={18} /> Hugging Face
                </a>

                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Social Media Links - Always Visible on Large Screens */}
            <div className="hidden xl:flex flex-col items-start gap-1 mt-2">
            <a href="https://maps.app.goo.gl/5CfSPm1uGbfeDcMU9" className="flex items-center gap-2 text-white hover:text-gray-400">
                    <FiMapPin size={18} /> Dhaka,Bangladesh
                </a>
              <a href="mailto:your_email@example.com" className="flex items-center gap-2 text-gray-500 hover:text-green-200">
                <FiMail size={18} /> Email
              </a>
              <a href="https://linkedin.com/in/sadman-alvee-1bb464249" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                <FiLinkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/Pointer2Alvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white">
                <FiGithub size={18} /> GitHub
              </a>
              {/*}<a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-green-600">
                <SiGooglescholar size={18} /> Google Scholar
              </a>{*/}
              <a href="https://www.leetcode.com/iamalvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-orange-500">
                <SiLeetcode size={18} /> LeetCode
              </a>
              <a href="https://www.youtube.com/@pointer2Alvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-red-600">
                <FiYoutube size={18} /> YouTube
              </a>
              <a href="https://kaggle.com/pointer2alvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-blue-400">
                <FaKaggle size={18} /> Kaggle
              </a>
              <a href="https://huggingface.co/iamAlvee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-yellow-300">
                <SiHuggingface size={18} /> Hugging Face
              </a>
            </div>
          </div>

         
          
         {/*}</div>
        </div>{*/}
    </section>
  );
};

export default SideProfile;