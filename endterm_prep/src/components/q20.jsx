import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [collapsed, setCollpased] = useState(false);

    function toggleCollpased(){
        setCollpased((prev) => !prev);
    }
  // TODO: create collapsed state and toggle function

  return (
    <SidebarContext.Provider value={{collapsed, toggleCollpased}}>
      {children}
    </SidebarContext.Provider>
  );
}

export function Header() {
    const {collapsed, toggleCollpased} = useContext(SidebarContext);
  // TODO: consume sidebar context
  return <button onClick={toggleCollpased}>{collapsed?"Expand SideBar":"Collapse SideBar"}</button>;
}

export function Sidebar() {
    const {collapsed} = useContext(SidebarContext);
  // TODO: consume sidebar context
  return (
    <div
      style={{
        width: collapsed ? "100px" : "220px",
        border: "1px solid #ddd",
        padding: "20px",
        transition: "0.2s",
      }}
    >
      {collapsed ? "Collapsed Sidebar" : "Expanded Sidebar"}
    </div>
  );
}

export function DashboardLayout() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        <Sidebar />
        <div style={{ flex: 1, border: "1px solid #ddd", padding: "20px" }}>
          Main Content Area
        </div>
      </div>
    </div>
  );
}

