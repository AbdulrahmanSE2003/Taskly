import React from "react";

const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <label className="absolute right-5 top-5 inline-block w-12 h-6 z-10">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="opacity-0 w-0 h-0 peer"
      />
      <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 peer-checked:bg-red-600"></span>
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></span>
    </label>
  );
};

export default ThemeSwitch;
