import React, { useState } from "react";

const applications = [
  { id: 1, company: "Google", role: "Frontend Engineer", status: "Applied" },
  { id: 2, company: "Amazon", role: "SDE 1", status: "Interview" },
  { id: 3, company: "Meta", role: "UI Engineer", status: "Rejected" },
  { id: 4, company: "Atlassian", role: "React Developer", status: "Applied" },
];

export default function JobStatusBoard() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleApplications =
    activeFilter === "All"
      ? applications
      : applications.filter((application) => application.status === activeFilter);

  const getButtonStyle = (filter) => ({
    backgroundColor: activeFilter === filter ? "#ddd" : "white",
    padding: "8px 12px",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Job Application Status Board</h2>

      <button onClick={() => setActiveFilter("All")} style={getButtonStyle("All")}>
        All
      </button>
      <button
        onClick={() => setActiveFilter("Applied")}
        style={{ ...getButtonStyle("Applied"), marginLeft: "10px" }}
      >
        Applied
      </button>
      <button
        onClick={() => setActiveFilter("Interview")}
        style={{ ...getButtonStyle("Interview"), marginLeft: "10px" }}
      >
        Interview
      </button>
      <button
        onClick={() => setActiveFilter("Rejected")}
        style={{ ...getButtonStyle("Rejected"), marginLeft: "10px" }}
      >
        Rejected
      </button>

      <p style={{ marginTop: "20px" }}>
        Visible Applications: {visibleApplications.length}
      </p>

      {visibleApplications.length === 0 ? (
        <p>No applications found</p>
      ) : (
        visibleApplications.map((application) => (
          <div
            key={application.id}
            style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}
          >
            <h4>{application.company}</h4>
            <p>{application.role}</p>
            <p>Status: {application.status}</p>
          </div>
        ))
      )}
    </div>
  );
}