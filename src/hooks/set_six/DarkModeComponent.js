import React from "react";

import useDarkMode from "./useDarkMode";

import "./body.css";

const DarkModeComponent = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <button
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        style={{
          border: `1px solid ${darkMode ? "white" : "black"}`,
          background: "none",
          color: darkMode ? "white" : "black",
        }}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeComponent;
