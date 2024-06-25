import React from "react";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import "./App.css";

function Themecolor({ isDarkTheme, setIsDarkTheme }) {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="theme-icon" onClick={toggleTheme}>
      {isDarkTheme ? <BsFillMoonStarsFill /> : <FiSun className="sun-icon" />}
    </div>
  );
}

export default Themecolor;
