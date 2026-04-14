import React, { useMemo, useState } from "react";

const expenses = [
  { id: 1, title: "Lunch", category: "Food", amount: 250 },
  { id: 2, title: "Cab Ride", category: "Travel", amount: 480 },
  { id: 3, title: "Electricity Bill", category: "Bills", amount: 1800 },
  { id: 4, title: "Coffee", category: "Food", amount: 180 },
];

export default function ExpenseDashboard() {
  const [activeCategory, setActiveCategory] = useState("All");

  // TODO: memoize filtered expenses
  const visibleExpenses = useMemo(() => {
    return activeCategory === 'All' ? expenses : expenses.filter((expense) => expense.category === activeCategory);
  }, [activeCategory]);

  // TODO: memoize total amount
  const totalAmount = useMemo(() => {
    return visibleExpenses.reduce((sum, expense) => sum+expense.amount,0);
  }, [visibleExpenses]);

  const getButtonStyle = (category) =>({
    backgroundColor: activeCategory === category ? "#ddd" : "white",
    padding: "8px 12px",
  })

  return (
    <div style={{ padding: "20px" }}>
      <h2>Expense Dashboard</h2>

      <button onClick={() => setActiveCategory("All")} style={getButtonStyle("All")}>
        All
      </button>
      <button onClick={() => setActiveCategory("Food")} style={{ ...getButtonStyle("Food"), marginLeft: "10px" }}>
        Food
      </button>
      <button onClick={() => setActiveCategory("Travel")} style={{ ...getButtonStyle("Travel"), marginLeft: "10px" }}>
        Travel
      </button>
      <button onClick={() => setActiveCategory("Bills")} style={{ ...getButtonStyle("Bills"), marginLeft: "10px" }}>
        Bills
      </button>

      <p style={{ marginTop: "15px" }}>Visible Total: ₹{totalAmount}</p>

      <div style={{ marginTop: "15px" }}>
        {visibleExpenses.map((expense) => (
          <div key={expense.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h4>{expense.title}</h4>
            <p>{expense.category}</p>
            <p>₹{expense.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}