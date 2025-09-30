// App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import EisenhowerPage from "./pages/EisenhowerPage.jsx";
import ThemeSwitch from "../src/components/ThemeSwitch.jsx";

export default function App() {
  // ===== State =====
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ===== Handlers =====
  function addTask(task) {
    setTasks((prev) => {
      const updated = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
  }

  function clearTasks() {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // ===== Effects =====
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // ===== Render =====
  return (
    <Router>
      <div
        className={
          theme === "light"
            ? "bg-white text-black flex min-h-screen"
            : "bg-body-bg-dark text-white flex"
        }
      >
        {/* Sidebar ثابت */}
        <Sidebar />
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />

        {/* Main content area */}
        <main className="flex-1 px-5 p-6 full-width md:px-20 relative ">
          <Routes>
            <Route
              path="/"
              element={
                <TasksPage
                  tasks={tasks}
                  setTasks={setTasks}
                  addTask={addTask}
                  clearTasks={clearTasks}
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
              }
            />
            <Route path="/eisenhower" element={<EisenhowerPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
