// Sidebar.jsx
import { Home, Grid, Menu, Goal, Moon, Sun } from "lucide-react";
import { BiPieChartAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen sticky top-0 shadow-2xl bg-gray-100 dark:bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 
        ${isOpen ? "w-56" : "w-16"}`}
    >
      {/* زرار المينيو */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 mb-6 rounded-md transition-colors duration-300 cursor-pointer w-fit text-gray-900 dark:text-gray-100 hover:bg-red-200/60 dark:hover:bg-red-200  dark:hover:text-gray-900 ${!isOpen ? "p-[4px]" : "px-[4px] py-2"}`}
      >
        <Menu size={24} />
      </button>

      {/* العنوان */}
      {isOpen && (
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="text-2xl font-bold mb-6 text-red-800 dark:text-red-200"
        >
          Taskly
        </motion.h1>
      )}

      {/* الناف */}
      <nav className="flex flex-col gap-4 relative h-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${!isOpen ? "p-[5px]" : "px-3 py-2"}
     ${
       isActive
         ? "bg-red-200/60 text-gray-900 dark:text-gray-900 dark:bg-red-200 " // Active style
         : "text-gray-900 dark:text-gray-100 hover:bg-red-200  dark:hover:text-gray-900"
     }`
          }
        >
          <Home size={20} />{" "}
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              Tasks
            </motion.span>
          )}
        </NavLink>

        <NavLink
          to="/eisenhower"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${!isOpen ? "p-[5px]" : "px-3 py-2"}
     ${
       isActive
         ? "bg-red-200/60 text-gray-900 dark:text-gray-900 dark:bg-red-200 " // Active style
         : "text-gray-900 dark:text-gray-100 hover:bg-red-200 :bg-red-200/60 dark:hover:text-gray-900"
     }`
          }
        >
          <Grid size={20} />{" "}
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              Eisenhower
            </motion.span>
          )}
        </NavLink>

        <NavLink
          to="/yearlyGoals"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${!isOpen ? "p-[5px]" : "px-3 py-2"}
     ${
       isActive
         ? "bg-red-200/60 text-gray-900 dark:text-gray-900 dark:bg-red-200 " // Active style
         : "text-gray-900 dark:text-gray-100 hover:bg-red-200 dark:hover:text-gray-900"
     }`
          }
        >
          <Goal size={20} />{" "}
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              Yearly Goals
            </motion.span>
          )}
        </NavLink>

        <NavLink
          to="/quarterlyGoals"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg transition-colors duration-300
     ${!isOpen ? "p-[5px]" : "px-3 py-2"}
     ${
       isActive
         ? "bg-red-200/60 text-gray-900 dark:text-gray-900 dark:bg-red-200 " // Active style
         : "text-gray-900 dark:text-gray-100 hover:bg-red-200 dark:hover:text-gray-900"
     }`
          }
        >
          <BiPieChartAlt2 size={20} />{" "}
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              Quarterly Goals
            </motion.span>
          )}
        </NavLink>

        {/* زرار الدارك مود */}
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.65 }}
            className="flex justify-start items-center gap-2 rounded-lg transition-all text-black opacity-80 hover:opacity-100 dark:text-gray-100 duration-300 cursor-pointer p-[5px] absolute bottom-10"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </motion.button>
        )}
      </nav>
    </div>
  );
}
