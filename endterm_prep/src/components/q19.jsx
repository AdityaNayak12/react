import React, { useMemo, useState } from "react";

const employees = [
  { id: 1, name: "Riya Sharma", department: "Engineering" },
  { id: 2, name: "Aman Verma", department: "Design" },
  { id: 3, name: "Kabir Khanna", department: "Engineering" },
  { id: 4, name: "Neha Rao", department: "HR" },
];

export default function EmployeeDirectory() {
  const [search, setSearch] = useState("");

  // TODO: memoize filtered employees
  const visibleEmployees = useMemo(() => {
    return employees.filter((employee) => {
        return employee.name.toLowerCase().includes(search.toLowerCase()) || employee.department.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Directory</h2>

      <input
        type="text"
        placeholder="Search by name or department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p style={{ marginTop: "15px" }}>Visible Employees: {visibleEmployees.length}</p>

      <div style={{ marginTop: "15px" }}>
        {visibleEmployees.map((employee) => (
          <div key={employee.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h4>{employee.name}</h4>
            <p>{employee.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}