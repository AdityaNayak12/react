import React, { createContext, use, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme((prev) =>prev === "light"? "dark": "light");
    }
  // TODO: create theme state
  // TODO: create toggle function

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  // TODO: consume theme context
  return <button onClick={toggleTheme}>{theme === "light"?"Switch to Dark Mode":"Switch to Light Mode"}</button>;
}

export function ThemePreviewCard() {
    const {theme} = useContext(ThemeContext); 
  // TODO: consume theme context
  return (
    <div style={{ padding: "20px", marginTop: "20px" , backgroundColor: theme === "dark"?"#222":"#f5f5f5", color: theme === "dark" ? "#fff" : "#000"}}>
      <h3>Theme Preview</h3>
      <p>Current theme {theme}</p>
    </div>
  );
}

export function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Theme Preference Center</h2>
      <ThemeSwitcher />
      <ThemePreviewCard />
    </div>
  );
}

