import React, { useState } from "react";

const colorVariants = [
  { id: 1, colorName: "Black", image: "https://via.placeholder.com/300x200?text=Black+Shoes" },
  { id: 2, colorName: "White", image: "https://via.placeholder.com/300x200?text=White+Shoes" },
  { id: 3, colorName: "Blue", image: "https://via.placeholder.com/300x200?text=Blue+Shoes" },
];

function ColorSwatch({ variant, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(variant.id)}
      style={{
        marginRight: "10px",
        padding: "8px 12px",
        backgroundColor: isSelected ? "#ddd" : "white",
      }}
    >
      {variant.colorName}
    </button>
  );
}

export default function ProductColorPreview() {
  const [selectedColorId, setSelectedColorId] = useState(1);

  const selectedVariant = colorVariants.find(
    (variant) => variant.id === selectedColorId
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Running Shoes</h2>

      <img
        src={selectedVariant.image}
        alt={selectedVariant.colorName}
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />

      <p>Selected Color: {selectedVariant.colorName}</p>

      <div style={{ marginTop: "10px" }}>
        {colorVariants.map((variant) => (
          <ColorSwatch
            key={variant.id}
            variant={variant}
            isSelected={selectedColorId === variant.id}
            onSelect={setSelectedColorId}
          />
        ))}
      </div>
    </div>
  );
}