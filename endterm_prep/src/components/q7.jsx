import React, { useState } from "react";

const products = [
  { id: 1, name: "Wireless Earbuds", rating: 5 },
  { id: 2, name: "Laptop Stand", rating: 4 },
  { id: 3, name: "Phone Holder", rating: 3 },
  { id: 4, name: "Bluetooth Speaker", rating: 5 },
];

export default function ProductRatingFilter() {
  const [activeFilter, setActiveFilter] = useState("All");

  // TODO: derive visible products
  const visibleProducts = activeFilter === "All" ? products : products.filter((product) => product.rating === activeFilter);

  const getButtonStyle = (filterValue) => ({
    backgroundColor: activeFilter === filterValue ? "#ddd" : "white",
    padding: "8px, 12px"
  })

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Rating Filter</h2>

      <button onClick={() => setActiveFilter("All")} style={getButtonStyle("All")}>
        All
      </button>
      <button onClick={() => setActiveFilter(5)} style={{ ...getButtonStyle(5), marginLeft: "10px" }}>
        5 Stars
      </button>
      <button onClick={() => setActiveFilter(4)} style={{ ...getButtonStyle(4), marginLeft: "10px" }}>
        4 Stars
      </button>
      <button onClick={() => setActiveFilter(3)} style={{ ...getButtonStyle(3), marginLeft: "10px" }}>
        3 Stars
      </button>

      <p style={{ marginTop: "15px" }}>Visible Products: {visibleProducts.length}</p>
      {visibleProducts.length === 0 ? (
        <p>No products available for this rating</p>
      ) : (
        visibleProducts.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}
          >
            <h4>{product.name}</h4>
            <p>Rating: {product.rating} Stars</p>
          </div>
        ))
      )}
    </div>
  );
}