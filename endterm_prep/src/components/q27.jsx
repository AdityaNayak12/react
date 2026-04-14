import React, { useCallback, useState } from "react";

const initialNotes = [
  { id: 1, title: "Prepare interview questions", pinned: false },
  { id: 2, title: "Finish React practice sheet", pinned: true },
  { id: 3, title: "Review project PRD", pinned: false },
];

function NoteCard({ note, onTogglePin }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "10px" }}>
      <h4>{note.title}</h4>
      <button onClick={() => onTogglePin(note.id)}>
        {note.pinned ? "Unpin" : "Pin" }
      </button>
    </div>
  );
}

export default function PinnedNotesBoard() {
  const [notes, setNotes] = useState(initialNotes);

  // TODO: use useCallback
  const handleTogglePin = useCallback((id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  }, []);

  const pinnedCount = notes.filter((note) => note.pinned).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Pinned Notes Board</h2>
      <p>Total Notes: {notes.length}</p>
      <p>Pinned Notes: {pinnedCount}</p>

      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onTogglePin={handleTogglePin} />
      ))}
    </div>
  );
}