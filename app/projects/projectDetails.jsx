"use client";
import React from "react";
import { FiGithub, FiLink, FiYoutube } from "react-icons/fi";

const ProjectDetails = ({ projects }) => {
  const projectId = new URLSearchParams(window.location.search).get("id");
  const project = projects.find((proj) => proj.id === parseInt(projectId, 10));

  if (!project) {
    return (
      <div className="container mx-auto text-center py-10">
        <h2 className="text-2xl font-semibold text-red-500">
          Project Not Found
        </h2>
        <p className="mt-2">The project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="px-4 py-6">
      <div className="container mx-auto">
        {/* Project Title */}
        <h1 className="text-3xl font-bold text-primary mb-4">{project.name}</h1>
        <p className="text-gray-600 text-sm mb-6">{project.description}</p>

        {/* YouTube Video */}
        <div className="mb-6">
          <iframe
            src={project.youtubeLink.replace("watch?v=", "embed/")}
            title={project.name}
            className="w-full rounded-lg shadow-md"
            height="400"
            allowFullScreen
          ></iframe>
        </div>

        {/* Links */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Useful Links
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 underline hover:text-blue-700 transition duration-200"
            >
              <FiGithub />
              GitHub Repository
            </a>
            {project.youtubeLink && (
              <a
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-500 underline hover:text-red-700 transition duration-200"
              >
                <FiYoutube />
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
