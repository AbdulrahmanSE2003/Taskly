import React, { useState } from "react";

function QuarterlyGoals() {
  const [activeQuarter, setActiveQuarter] = useState("Q1");

  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  const goals = [
    {
      id: 1,
      quarter: "Q1",
      title: "Go to the gym 20 times",
      target: 20,
      progress: 5,
    },
    {
      id: 2,
      quarter: "Q2",
      title: "Build side project",
      target: 1,
      progress: 0,
    },
    { id: 3, quarter: "Q4", title: "Finish 3 courses", target: 3, progress: 1 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quarterly Goals</h1>

      {/* Tabs */}
      <div className="flex space-x-3 mb-6">
        {quarters.map((q) => (
          <button
            key={q}
            onClick={() => setActiveQuarter(q)}
            className={`px-4 py-2 rounded-xl ${
              activeQuarter === q
                ? "bg-red-600 text-white"
                : "bg-gray-200 dark:bg-slate-700"
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Goals List */}
      {goals
        .filter((g) => g.quarter === activeQuarter)
        .map((goal) => (
          <div
            key={goal.id}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-5 mb-4"
          >
            <h2 className="text-lg font-semibold">{goal.title}</h2>
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 mb-3">
              <div
                className="bg-red-600 h-3 rounded-full"
                style={{ width: `${(goal.progress / goal.target) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm">
              {goal.progress} of {goal.target} done
            </p>
          </div>
        ))}
    </div>
  );
}

export default QuarterlyGoals;
