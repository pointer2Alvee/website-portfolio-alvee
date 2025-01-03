
"use client";
import React from "react";
import { FiMapPin, FiClock, FiAward, FiFileText } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";

const awardsData = [
  {
    id: 1,
    title: "Government Scholarship [Talentpool]",
    institution: "Bangladesh Elementary School",
    location: "Chattogram,Bangladesh",
    degree: "Primary School Certificate",
    cgpa: "| Division: 1st",
    duration: "2010",
    certificateLink: "https://drive.google.com/file/d/1MNhzh8xWznVedUZHBu7RXa2PPGusV_VJ/view?usp=drive_link",

  },
  {
    id: 2,
    title: "Merit Position: 9th (Chattogram Division)",
    institution: "Bangladesh Elementary School",
    location: "Chattogram,Bangladesh",
    degree: "Primary School Certificate",
    cgpa: "| Division: 1st",
    duration: "2010",
    certificateLink: "https://drive.google.com/file/d/1MNhzh8xWznVedUZHBu7RXa2PPGusV_VJ/view?usp=drive_link",
  
  },
  {
    id: 3,
    title: "Published my First Book 'alokShobdo' ",
    institution: "proyogLab™",
    location: "Dhaka,Bangladesh",
    degree: "A book for learning Embedded programming and electronics",
    cgpa: "",
    duration: "2024",
    certificateLink: "https://drive.google.com/file/d/1i4Z0rtyxwGFQifbad1pXf-9SkGPxkgBg/view",
  
  },
  
];

const Awards_Activities = () => {
  return (
    <section className="px-1 py-1">
      <div className=" container mx-auto">
         
         {/*Title*/}
         <div className="flex items-left gap-0 mb-3">
          <h1 className="font-semibold">Achievements & Awards</h1>
        </div>

        <div className="flex flex-col gap-4">
          {awardsData.slice().reverse().map((item) => (
            <div
              key={item.id}
              className="p-3 border rounded-lg bg-primary text-white shadow-xl"
            >
 
              {/* Awards (if present) */}
              {item.title && (
                <div className="flex items-center gap-2 text-sm ">
                <FaMedal size={16} />
                <span className="text-yellow-400">{item.title}</span>
              </div>

              )}

              {/* institution name*/}
              <div className="text-md font-secondary">
                {item.institution}
                
              </div>

               {/* Degree and CGPA */}
               <div className="text-sm font-secondary">
                {item.degree} {item.cgpa}
                
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1 text-xs text-green-400">
                <FiClock size={16} />
                {item.duration}

                {/* Location */}
                <FiMapPin size={16} className="ms-3"/>
                {item.location}

                {/* Certificate Link */}

                <FiAward size={16} className=" ms-3 text-gray-400" />
                <a
                  href={item.certificateLink}
                  target="_blank"
                  className=" text-blue-500 underline hover:text-blue-300 transition-colors duration-200"
                >
                  Certificate
                </a>

           

              </div>

              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards_Activities;
