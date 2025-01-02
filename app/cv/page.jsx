"use client";
import React from "react";
import { FiDownload } from "react-icons/fi";

const CV = () => {
  const googleDrivePdfUrl = "https://drive.google.com/file/d/1Z8ok-TBtL7iSyvtbKhRGcS4NL8FuXRNR/preview";
  const downloadPdfUrl = "https://drive.google.com/uc?export=download&id=1Z8ok-TBtL7iSyvtbKhRGcS4NL8FuXRNR";

  return (
    <section className="px-1 py-1">
      <div className="container mx-auto">
        {/* CV Header */}
        <div className="flex items-center gap-4 mb-3">
          <h1 className="font-semibold">Curriculum Vitae</h1>
          <a
            href={downloadPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-accent px-3 py-1 bg-primary text-white rounded-xl shadow hover:bg-secondary-dark transition-colors duration-200"
          >
            <FiDownload className="mr-2" size={18} />
            Download CV
          </a>
        </div>

        {/* PDF iframe */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md inline-block mb-4">
          <iframe
            src={googleDrivePdfUrl}
            title="CV"
            width="550" // Smaller width
            height="630" // Smaller height
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CV;
