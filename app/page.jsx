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
              Passionate about developing efficient and scalable solutions in Machine Learning and Embedded Systems. With a keen interest in innovation and a strong commitment to excellence, I aim to leverage technology to solve real-world problems.
            </p>

            <h1 className="text-xl font-bold mb-1 text-white">Expertise:</h1>
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