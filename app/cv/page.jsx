"use client";
import React from "react";
import { FiDownload } from "react-icons/fi";

const CV = () => {
  const googleDrivePdfUrl = "https://drive.google.com/file/d/1Z8ok-TBtL7iSyvtbKhRGcS4NL8FuXRNR/preview";
  const downloadPdfUrl = "https://drive.google.com/uc?export=download&id=1Z8ok-TBtL7iSyvtbKhRGcS4NL8FuXRNR";

  return (
    <section className="px-2 py-4">
      <div className="container mx-auto text-center">
        {/* PDF iframe */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md inline-block mb-4">
          <iframe
            src={googleDrivePdfUrl}
            title="CV"
            width="680" // Smaller width
            height="770" // Smaller height
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>

        {/* Download CV Button */}
        <div>
          <a
            href={downloadPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-accent justify-center mx-auto w-fit px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-secondary-dark transition-colors duration-200"
          >
            <FiDownload className="mr-2 " size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
