import React, { useState } from "react";
import Modal from "../components/Modal.jsx";
import Button from "../components/Button.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

function QuarterlyGoals() {
  const [activeQuarter, setActiveQuarter] = useState("q1");
  const [isOpen, setIsOpen] = useState(false);
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("quarterlyGoals")) || [],
  );

  const quarters = ["q1", "q2", "q3", "q4"];

  function handleAdd(QG) {
    const newGoals = [...goals, QG];
    setGoals(newGoals);
    localStorage.setItem("quarterlyGoals", JSON.stringify(newGoals));
  }

  function handleProgress(id) {

      const item= goals.find(goal=> goal.id === id);
      if (item.progress >= item.length) return
    const newGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, progress: goal.progress +1 } : goal,
    );
    setGoals(newGoals);
    localStorage.setItem("quarterlyGoals", JSON.stringify(newGoals));
  }

  function handleDelete(id) {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
    localStorage.setItem("quarterlyGoals", JSON.stringify(newGoals));
  }

  return (
    <div className="p-6">
      <div className={`flex justify-between items-center`}>
        <h1 className="text-2xl font-bold mb-6">Quarterly Goals</h1>

        <Button onClick={() => setIsOpen(true)}>Add New Goal</Button>
      </div>

      {isOpen && (
        <Modal
          quarterly={true}
          onClose={() => setIsOpen(false)}
          onAdd={handleAdd}
        />
      )}
      {/* Tabs */}
      <div className="flex space-x-3 mb-6">
        {quarters.map((q) => (
          <button
            key={q}
            onClick={() => setActiveQuarter(q)}
            className={`px-4 py-2 rounded-xl uppercase ${
              activeQuarter === q
                ? "bg-red-600 text-white"
                : "bg-gray-200 dark:bg-slate-700"
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      <div className={`grid md:grid-cols-2`}>
        {/* Goals List */}
        {goals
          .filter((g) => g.quarter === activeQuarter)
          .map((goal) => (
            <div
              key={goal.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-5 mb-4"
            >
              <h2 className="text-lg font-semibold">{goal.title}</h2>
              {/*  Progress bar */}

              <ProgressBar length={goal.length} progress={goal.progress} />

              <div className={`flex justify-end items-center gap-1`}>
                <Button
                  bg={`bg-gray-300`}
                  className={`text-black hover:text-white`}
                  onClick={() => handleDelete(goal.id)}
                >
                  Delete
                </Button>

                <Button onClick={() => handleProgress(goal.id)}>+</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QuarterlyGoals;
