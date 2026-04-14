import React, { useState } from "react";

const initialEmployees = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Software Engineer",
    department: "Engineering",
    location: "Bangalore",
    showDetails: false,
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Product Manager",
    department: "Product",
    location: "Mumbai",
    showDetails: false,
  },
];

function EmployeeCard({ employee, onToggleDetails }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "10px", borderRadius: "8px" }}>
      <h4>{employee.name}</h4>
      <p>{employee.role}</p>

      {employee.showDetails && (
        <div>
          <p>Department: {employee.department}</p>
          <p>Location: {employee.location}</p>
        </div>
      )}

      <button onClick={() => onToggleDetails(employee.id)}>
        {employee.showDetails ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
}

export default function ExpandableTeamCards() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleToggleDetails = (id) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === id
          ? { ...employee, showDetails: !employee.showDetails }
          : employee
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Team Directory</h2>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onToggleDetails={handleToggleDetails}
        />
      ))}
    </div>
  );
}