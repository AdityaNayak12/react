import React, { useEffect, useRef, useState } from "react";

const topics = [
  "React Components",
  "Props and State",
  "useEffect Hook",
  "Context API",
  "React Router Basics",
];

export default function AutoFocusTopicSearch() {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Docs Search</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search topics"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "15px" }}>
        {filteredTopics.length === 0 ? (
          <p>No topics found</p>
        ) : (
          filteredTopics.map((topic) => <p key={topic}>{topic}</p>)
        )}
      </div>
    </div>
  );
}