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
            <p className="text-gray-300 text-justify mb-9 text-md font-secondary">
            {/*Bio */}
            Welcome to my portfolio! I am a passionate <b className='text-white-100'>'Machine Learning Engineer'</b> with a deep enthusiasm for Embedded Systems, IoT, and Robotics. 
            My focus lies in developing efficient and scalable solutions by blending the power of Machine Learning with cutting-edge Embedded Systems technologies. 
            Beyond engineering, I am also an entrepreneur, proudly leading two startups ——<a href='/ventures' className='text-blue-400 underline'>proyogLab </a> and <a href='/ventures' className='text-blue-400 underline'>impedancePlus</a>—— which 
            reflect my drive to merge innovation and business for impactful solutions. 
            My full name is <b className='text-accent'>`M M Sadman Ibrahim`</b>, but you can call me <b className='text-yellow-500'>`ALVEE`</b>. With a strong commitment to excellence and a passion for solving real-world challenges, 
            I strive to leverage technology to make a meaningful difference. Thank you for visiting—feel free to explore and learn more about my work and aspirations!
            </p>

            {/*Expertise */}
            <div className="grid grid-cols-2 gap-4 mb-9">
            <h1 className="text-2xl font-semibold mb-4 text-accent border-b border-accent pb-2">Expertise</h1>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                Embedded Systems Development
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                Machine Learning / Deep Learning
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                Circuit Design
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                System Prototyping
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                Hardware-Software Integration
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                DSA
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center text-accent font-medium">
                AI/IoT Automation Systems
              </div>
            </div>


            {/*Tools-Tech */}
            <div className="p-3 bg-primary rounded-lg ">
                <h1 className="text-xl font-semibold mb-2 text-accent border-b border-accent pb-2">Tools & Technology</h1>
                
                <ul className="text-sm text-gray-300">
                  <li className="flex flex-col">
                    <span className="text-accent font-semibold ">ML Tech Stack:</span>
                    <p className="text-gray-300 p-2 bg-gray-700 rounded-lg mb-3">Python, PyTorch, TensorFlow, NumPy, Matplotlib, Pandas, Scikit-learn, OpenCV</p>
                  </li>

                  <li className="flex flex-col">
                    <span className="text-accent  font-semibold">Embedded Systems Tech Stack:</span>
                    <p className="text-gray-300 p-2 bg-gray-700  rounded-lg mb-3">C/C++, Arduino Boards, ESP32, Sensor-Modules, Segger, Raspberry Pi, STM32, Aurix</p>
                  </li>

                  <li className="flex flex-col">
                    <span className="text-accent  font-semibold">Development Tools:</span>
                    <p className="text-gray-300 p-2 bg-gray-700  rounded-lg mb-3">VS Code, Arduino IDE, CodeBlocks, Linux, Google Colab, Git, Fritzing, Tinkercad</p>
                  </li>

                  <li className="flex flex-col">
                    <span className="text-accent  font-semibold">Familiar With:</span>
                    <p className="text-gray-300 p-2 bg-gray-700 rounded-lg mb-3">SQL, Firebase, Java, C#, JS, PHP, HTML, CSS, Three.js, Android, Oracle, .NET, Next.js, IFTTT</p>
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