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

          {/* ------------------------------ Text Section ------------------------------ */}
          <div className="xl:w-full">
            <p className="text-white-700 text-justify mb-5">
              Greetings! I am an aspiring Machine Learning Engineer with a strong founation in 
              Embedded systems, IoT and robotics. I am highly passionate about developing efficient and scalable solutions 
              in Machine Learning and Embedded Systems. I am also a businessman with two startups. 
              With a keen interest in innovation and business and a strong 
              commitment to excellence, I aim to leverage technology to solve real-world problems.
              My full name is `M M SADMAN IBRAHIM`, but call me `Alvee`, and welcome to my portfolio. 
              Feel free to explore and take a tour.  
            </p>

            <h1 className="text-xl font-bold mb-1 text-white">Expertise:</h1>
            <ul className="text-white mb-7">
              <li>- Machine Learning</li>
              <li>- Deep Learning</li>
              <li>- Embedded Systems Development</li>
              <li>- Circuit Design</li>
              <li>- DSA</li>
            </ul>

            <h1 className="text-xl font-bold mb-3 text-white">Tools-Technology:</h1>
            
            <div className=" text-md p-1 border rounded-lg bg-primary text-white shadow-xl">
              
            <ul className=" list-disc pl-2 text-gray-300">

              <li className="mb-1 flex items-center gap-1">
                <span className="font-secondary font-bold">ML Tech-Stack:-</span>
                <p className="font-secondary">Python, PyTorch, TensorFlow, NumPy, Matplotlib, Pandas, Scikit-learn, OpenCV </p>
              </li>

              <li className=" mb-1 flex items-center gap-1">
                <span className="font-secondary font-bold">ES Tech-Stack:-</span>
                <p className="font-secondary">C/C++, Arduino Boards, ESP32, Sensor-Modules, Segger, RaspberryPi</p>
              </li>
           

            <li className=" mb-1 flex items-center gap-1">
                <span className="font-secondary font-bold">Dev-Tools:-</span>
                <p className="font-secondary">VS Code, Arduino IDE, CodeBlocks, Linux, Google Colab, Git, Fritzing, Tinkercad</p>
              </li>
          

            <li className="mb-1 flex items-center gap-1">
                <span className="font-secondary font-bold">Fimiliar With:-</span>
                <p className="font-secondary">SQL, Firebase, Java, C#, JS, php, HTML, CSS, three.js, android, oracle, dotnet, next.js, IFTTT </p>
              </li>
       
              </ul>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;