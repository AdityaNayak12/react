import React, { useCallback, useState } from "react";

const initialCourses = [
  { id: 1, title: "React Basics", completed: false },
  { id: 2, title: "Node.js Fundamentals", completed: true },
  { id: 3, title: "System Design Intro", completed: false },
];

function CourseCard({ course, onToggle }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "10px" , backgroundColor: course.completed ? "#eafbea" : "white"}}>
      <h4>{course.title}</h4>
      <p>Status: {course.completed ? "Completed" : "In Progress"}</p>
      <button onClick={() => onToggle(course.id)}>
        {course.completed? "Mark Incomplete":"Mark Complete"}
      </button>
    </div>
  );
}

export default function CourseProgressBoard() {
  const [courses, setCourses] = useState(initialCourses);

  // TODO: wrap with useCallback
  const handleToggle = useCallback((id) => {
    setCourses((prev)=>
        prev.map((course) => 
            course.id === id ? {...course, completed: !course.completed}: course
        )
    )
  }, []);

  const completedCount = courses.filter((course)=> course.completed).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Progress Board</h2>
      <p>Total Courses: {courses.length}</p>
      <p>Completed Courses: {completedCount}</p>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onToggle={handleToggle} />
      ))}
    </div>
  );
}