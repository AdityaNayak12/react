import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Aarav", present: true },
  { id: 2, name: "Meera", present: false },
  { id: 3, name: "Kunal", present: true },
  { id: 4, name: "Ishita", present: false },
];

function StudentRow({ student, onToggle }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: student.present ? "#eafbea" : "#fdeaea",
        borderRadius: "8px",
      }}
    >
      <h4>{student.name}</h4>
      <p>Status: {student.present ? "Present" : "Absent"}</p>
      <button onClick={() => onToggle(student.id)}>
        {student.present ? "Mark Absent" : "Mark Present"}
      </button>
    </div>
  );
}

export default function AttendanceToggleList() {
  const [students, setStudents] = useState(initialStudents);

  const handleToggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const totalStudents = students.length;
  const presentCount = students.filter((student) => student.present).length;
  const absentCount = totalStudents - presentCount;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendance Dashboard</h2>

      <p>Total Students: {totalStudents}</p>
      <p>Present: {presentCount}</p>
      <p>Absent: {absentCount}</p>

      <div style={{ marginTop: "20px" }}>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            onToggle={handleToggleAttendance}
          />
        ))}
      </div>
    </div>
  );
}