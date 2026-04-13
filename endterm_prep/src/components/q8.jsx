import React, { useState } from "react";

const courses = [
  { id: 1, title: "React Basics", instructor: "Mrinal", duration: "4 Weeks" },
  { id: 2, title: "Advanced JavaScript", instructor: "Aman", duration: "6 Weeks" },
  { id: 3, title: "Node.js Fundamentals", instructor: "Riya", duration: "5 Weeks" },
];

function CourseList({ courses, selectedCourseId, onSelect }) {
  return (
    <div>
      {courses.map((course) => (
        <button
          key={course.id}
          onClick={() => onSelect(course.id)}
          style={{ display: "block", marginBottom: "10px", backgroundColor: selectedCourseId === course.id? "#ddd": "white" }}
        >
          {course.title}
        </button>
      ))}
    </div>
  );
}

function CourseDetails({ course }) {
  return (
    <div>
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
}

export default function SharedCourseViewer() {
  const [selectedCourseId, setSelectedCourseId] = useState(1);

  // TODO: derive selected course
  const selectedCourse = courses.find((course) => course.id === selectedCourseId);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Viewer</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <CourseList
          courses={courses}
          selectedCourseId={selectedCourseId}
          onSelect={setSelectedCourseId}
        />
        <CourseDetails course={selectedCourse} />
      </div>
    </div>
  );
}