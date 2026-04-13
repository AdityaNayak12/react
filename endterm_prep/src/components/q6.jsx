import React, { useState } from "react";

const members = [
  { id: 1, name: "Aarav Sharma", role: "Frontend Engineer" },
  { id: 2, name: "Meera Nair", role: "Product Designer" },
  { id: 3, name: "Kabir Jain", role: "Backend Engineer" },
  { id: 4, name: "Ishita Rao", role: "QA Engineer" },
];

function MemberCard({ member }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <h4>{member.name}</h4>
      <p>{member.role}</p>
    </div>
  );
}

export default function TeamDirectorySearch() {
  const [search, setSearch] = useState("");

  // TODO: derive visible members
  const visibleMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Team Directory</h2>


      <input
        type="text"
        placeholder="Search team members"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p style={{ marginTop: "15px" }}>Visible Members: {visibleMembers.length}</p>

      <div style={{ marginTop: "15px" }}>
        {visibleMembers.length === 0 ? (
          <p>No team members found</p>
        ) : (
          visibleMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))
        )}
      </div>
    </div>
  );
}