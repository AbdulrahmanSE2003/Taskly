// Sidebar.jsx
import { Home, Grid, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen shadow-2xl bg-gray-100 dark:bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 
        ${isOpen ? "w-56" : "w-16"}`}
    >
      {/* زرار المينيو */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 mb-6 rounded-md transition-colors duration-300 cursor-pointer text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:text-gray-900 ${!isOpen ? "p-[4px]" : "px-[4px] py-2"}`}
      >
        <Menu size={24} />
      </button>

      {/* العنوان */}
      {isOpen && (
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Taskly
        </h1>
      )}

      {/* الناف */}
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${!isOpen ? "p-[5px]" : "px-3 py-2"}
     ${
       isActive
         ? "bg-gray-300 text-gray-900 dark:text-gray-900" // Active style
         : "text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:text-gray-900"
     }`
          }
        >
          <Home size={20} /> {isOpen && "Tasks"}
        </NavLink>
        <NavLink
          to="/eisenhower"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${!isOpen ? "p-[5px]" : "px-3 py-2"}
     ${
       isActive
         ? "bg-gray-300 text-gray-900 dark:text-gray-900" // Active style
         : "text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:text-gray-900"
     }`
          }
        >
          <Grid size={20} /> {isOpen && "Eisenhower"}
        </NavLink>
      </nav>
    </div>
  );
}
