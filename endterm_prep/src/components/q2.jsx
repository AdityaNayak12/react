import React, { useState } from "react";

const songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
  { id: 2, title: "Levitating", artist: "Dua Lipa" },
  { id: 3, title: "Heat Waves", artist: "Glass Animals" },
];

function SongItem({ song, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(song.id)}
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        marginBottom: "8px",
        cursor: "pointer",
        backgroundColor: isSelected ? "blue" : "white",
      }}
    >
      <strong>{song.title}</strong>
      <p>{song.artist}</p>
    </div>
  );
}

export default function PlaylistHighlighter() {
  const [selectedSongId, setSelectedSongId] = useState(1);

  // TODO: derive selected song
  const selectedSong = songs.find((song) => song.id === selectedSongId);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Playlist</h2>

      <div>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            isSelected={selectedSongId === song.id}
            onSelect={setSelectedSongId}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Now Selected</h3>
        <p>Title: {selectedSong.title}</p>
        <p>Artist: {selectedSong.artist}</p>
      </div>
    </div>
  );
}