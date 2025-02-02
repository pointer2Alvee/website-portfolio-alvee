"use client";
import React from "react";
import { FiMapPin, FiClock, FiAward, FiFileText } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    university: "Ahsanullah University of Science and Technology",
    institutionLink: "https://aust.edu/",
    location: "Dhaka,Bangladesh",
    degree: "Bachelor of Science in Computer Science & Engineering",
    cgpa: "CGPA: 3.470/4.00",
    duration: "Jan,2019 - Jun,2023",
    certificateLink: "https://drive.google.com/file/d/10oz_WuCfW_I0Lp7AMNCLlX3mTPVCGV2l/view?usp=drive_link",
    /*transcriptLink: "https://drive.google.com/file/d/1MSE5PYQyBOWwTNBB73P-ka9i4l84PJto/view?usp=drive_link",*/
    awardsOne: "",
    awardsTwo : ""
  },
  {
    id: 2,
    university: "Birshreshtha Noor Mohammad Public College",
    institutionLink: "https://www.noormohammadcollege.ac.bd/",
    location: "Dhaka,Bangladesh",
    degree: "Higher Secondary Certificate (HSC)",
    cgpa: "GPA: 5.00/5.00",
    duration: "2018",
    certificateLink: "https://drive.google.com/file/d/1_2Wg-TRYo03fqBj2LAaZKTJ4K4B-mexq/view?usp=sharing",
    transcriptLink: "https://drive.google.com/file/d/1EC-kwO5TLtFDPv99hdbutkXGom8Hu0uF/view?usp=drive_link",
    awardsOne: "",
    awardsTwo : ""
  },
  {
    id: 3,
    university: "Scholars' School & College",
    institutionLink: "https://scholars.edu.bd/",
    location: "Dhaka,Bangladesh",
    degree: "Secondary School Certificate (SSC)",
    cgpa: "GPA: 5.00/5.00",
    duration: "2016",
    certificateLink: "https://drive.google.com/file/d/1_FkFvOmsssKOizwogdhmvBaHwpRD0_n0/view?usp=drive_link",
    transcriptLink: "https://drive.google.com/file/d/1WNAIOPS6wYzSIXp2PiW_MnJHAfmzQfnf/view?usp=drive_link",
    awardsOne : "",
    awardsTwo : ""
  },
  {
    id: 4,
    university: "Scholars' School & College",
    institutionLink: "https://scholars.edu.bd/",
    location: "Dhaka,Bangladesh",
    degree: "Junior School Certificate (JSC)",
    cgpa: "GPA: 5.00/5.00",
    duration: "2013",
    certificateLink: "https://drive.google.com/file/d/1psyY6V3dkjirQ89gtPwOoJdIY1q0uxCb/view?usp=sharing",
    transcriptLink: "https://drive.google.com/file/d/1psyY6V3dkjirQ89gtPwOoJdIY1q0uxCb/view?usp=sharing",
    awardsOne : '',
    awardsTwo : ""
  },
  {
    id: 5,
    university: "Bangladesh Elementary School",
    institutionLink: "https://bes.edu.bd/",
    location: "Chattogram,Bangladesh",
    degree: "Primary School Certificate (PSC)",
    cgpa: "Division: 1st",
    duration: "2010",
    certificateLink: "https://drive.google.com/file/d/1h2ILjkdG33KpojDVfPK86oyGnCp5NXmK/view?usp=drive_link",
    transcriptLink: "https://drive.google.com/file/d/1MNhzh8xWznVedUZHBu7RXa2PPGusV_VJ/view?usp=drive_link",
    awardsOne : "Merit: 9th (CTG Division)",
    awardsTwo : "Government Scholarship [TalentPool]",
  },
];

const Education = () => {
  return (
    <section className="px-1 py-1">
      <div className=" container mx-auto">
        
        {/*Title*/}
        <div className="flex items-left gap-0 mb-3">
          <h1 className="font-semibold">Education</h1>
        </div>



        <div className="flex flex-col gap-4">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-3 border rounded-lg bg-primary text-white shadow-xl"
            >
              {/* University Name */}
              <a
                href={item.institutionLink}
                target="_blank"
                className="block text-sm font-semibold text-accent hover:text-blue-300 transition-colors duration-200"
              >
                {item.university}
              </a>

              {/* Degree and CGPA */}
              <div className="text-sm font-secondary mb-1">
                {item.degree} | {item.cgpa}
                
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1 text-xs text-green-400 mb-2 ">
                <FiClock size={16} />
                {item.duration}

                {/* Location */}
                <FiMapPin size={16} className="ms-3"/>
                {item.location}
              </div>

             
              {/* AwardsOne (if present) */}
              {item.awardsOne && (
                <div className="flex items-center gap-2 text-sm ">
                <FaMedal size={16} />
                <span className="text-yellow-400  font-secondary">{item.awardsOne}</span>
              </div>

              )}
              {/* Awards (if present) */}
              {item.awardsTwo && (
                <div className="flex items-center gap-2 text-sm ">
                <FaMedal size={16} />
                <span className="text-yellow-400 font-secondary">{item.awardsTwo}</span>
              </div>

              )}



              {/* Certificate Links */}
              <div className="flex items-center gap-1 text-sm">
                {item.certificateLink && (
                  <>
                    <FiAward size={16} className="text-gray-400" />
                    <a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200"
                    >
                      Certificate
                    </a>
                  </>
                )}

                {/* Transcript Links */}
                {item.transcriptLink && (
                  <>
                    <FiFileText size={16} className="ms-2 text-gray-400" />
                    <a
                      href={item.transcriptLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-300 transition-colors duration-200"
                    >
                      Transcript
                    </a>
                  </>
                )}
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
