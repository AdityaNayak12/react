import React, { useState } from "react";

const initialJobs = [
  { id: 1, company: "Google", role: "Frontend Engineer", saved: false },
  { id: 2, company: "Amazon", role: "SDE 1", saved: true },
  { id: 3, company: "Notion", role: "Product Engineer", saved: false },
];

function JobCard({ job, onToggleSaved }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "10px", backgroundColor: job.saved? "#fff7e6" : "white" }}>
      <h4>{job.company}</h4>
      <p>{job.role}</p>
      <button onClick={() => onToggleSaved(job.id)}>
        {job.saved ? "Remove Saved": "Save Job"}
      </button>
    </div>
  );
}

export default function SavedJobsBoard() {
  const [jobs, setJobs] = useState(initialJobs);

  // TODO: implement toggle logic
  const handleToggleSaved = (id) => {
    setJobs((prev) =>
        prev.map((job)=>
            job.id === id ? {...job, saved: !job.saved} : job
        )
    )
  };

  const savedCount = jobs.filter((job) => job.saved).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Saved Jobs</h2>
      <p>Saved Jobs: {savedCount}</p>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onToggleSaved={handleToggleSaved} />
      ))}
    </div>
  );
}