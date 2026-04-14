import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Revamp the marketing website homepage and landing pages.",
    teamSize: 4,
    status: "In Progress",
  },
  {
    id: 2,
    name: "Mobile App Launch",
    description: "Prepare the first production release for the mobile app.",
    teamSize: 6,
    status: "Planning",
  },
  {
    id: 3,
    name: "Dashboard Analytics",
    description: "Build usage analytics for internal stakeholders.",
    teamSize: 3,
    status: "Completed",
  },
];

function ProjectList({ projects, selectedProjectId, onSelect }) {
  return (
    <div>
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onSelect(project.id)}
          style={{ display: "block", marginBottom: "10px", backgroundColor: selectedProjectId===project.id? "#ddd" : "white" }}
        >
          {project.name}
        </button>
      ))}
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Team Size: {project.teamSize}</p>
      <p>Status: {project.status}</p>
    </div>
  );
}

export default function ProjectBoard() {
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  // TODO: derive selectedProject
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Project Board</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <ProjectList
          projects={projects}
          selectedProjectId={selectedProjectId}
          onSelect={setSelectedProjectId}
        />
        <ProjectDetails project={selectedProject} />
      </div>
    </div>
  );
}