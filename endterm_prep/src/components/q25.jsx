import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <NotificationContext.Provider value={{ preferences, togglePreference }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function PreferencesControls() {
  const { preferences, togglePreference } = useContext(NotificationContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => togglePreference("email")}>
        {preferences.email ? "Disable Email" : "Enable Email"}
      </button>

      <button onClick={() => togglePreference("sms")} style={{ marginLeft: "10px" }}>
        {preferences.sms ? "Disable SMS" : "Enable SMS"}
      </button>

      <button onClick={() => togglePreference("push")} style={{ marginLeft: "10px" }}>
        {preferences.push ? "Disable Push" : "Enable Push"}
      </button>
    </div>
  );
}

export function PreferencesSummary() {
  const { preferences } = useContext(NotificationContext);

  const enabledCount = Object.values(preferences).filter(Boolean).length;

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
      <h3>Preferences Summary</h3>
      <p>Email: {preferences.email ? "Enabled" : "Disabled"}</p>
      <p>SMS: {preferences.sms ? "Enabled" : "Disabled"}</p>
      <p>Push: {preferences.push ? "Enabled" : "Disabled"}</p>
      <p>Total Enabled: {enabledCount}</p>
    </div>
  );
}

export function PreferencesPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Notification Preferences</h2>
      <PreferencesControls />
      <PreferencesSummary />
    </div>
  );
}

