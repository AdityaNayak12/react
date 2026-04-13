import React, { useState } from "react";

const products = [
  { id: 1, name: "Wireless Mouse", category: "Accessories", inStock: true },
  { id: 2, name: "Mechanical Keyboard", category: "Accessories", inStock: false },
  { id: 3, name: "Laptop Stand", category: "Office", inStock: true },
  { id: 4, name: "USB-C Hub", category: "Electronics", inStock: true },
];

export default function ProductSearchStockFilter() {
  const [search, setSearch] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // TODO: derive visible products using both filters
  const visibleProducts = products.filter((product)=>{
    const MatchSearches = product.name.toLowerCase().includes(search.toLowerCase());
    const MatchStock = showInStockOnly ? product.inStock: true;

    return MatchSearches && MatchStock
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Catalog</h2>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <label style={{ display: "block", marginTop: "10px" }}>
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={(e) => setShowInStockOnly(e.target.checked)}
        />
        Show in-stock only
      </label>

      <p style={{ marginTop: "15px" }}>Visible Products: {visibleProducts.length}</p>

      {visibleProducts.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <h4>{product.name}</h4>
          <p>{product.category}</p>
          <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
    </div>
  );
}