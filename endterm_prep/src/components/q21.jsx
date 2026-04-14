import React, { useState } from "react";

const candidates = [
  { id: 1, name: "Riya Sharma", role: "Frontend Engineer", yearsOfExperience: 2 },
  { id: 2, name: "Aman Verma", role: "Backend Engineer", yearsOfExperience: 5 },
  { id: 3, name: "Neha Rao", role: "Product Designer", yearsOfExperience: 3 },
  { id: 4, name: "Kabir Jain", role: "Full Stack Engineer", yearsOfExperience: 1 },
];

export default function CandidatePipelineBoard() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // TODO: derive visibleCandidates using search + sort
  const visibleCandidates = [...candidates]
    .filter((candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "exp-asc") {
        return a.yearsOfExperience - b.yearsOfExperience;
      }

      if (sortBy === "exp-desc") {
        return b.yearsOfExperience - a.yearsOfExperience;
      }

      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Candidate Pipeline</h2>

      <input
        type="text"
        placeholder="Search candidates"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="default">Default</option>
        <option value="exp-asc">Experience: Low to High</option>
        <option value="exp-desc">Experience: High to Low</option>
      </select>

      <p style={{ marginTop: "15px" }}>
        Visible Candidates: {visibleCandidates.length}
      </p>

      <div style={{ marginTop: "15px" }}>
        {visibleCandidates.map((candidate) => (
          <div key={candidate.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h4>{candidate.name}</h4>
            <p>{candidate.role}</p>
            <p>{candidate.yearsOfExperience} years experience</p>
          </div>
        ))}
      </div>
    </div>
  );
}