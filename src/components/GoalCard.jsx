import React from "react";
import ProgressBar from "./ProgressBar.jsx";

const GoalCard = ({ goal, onToggle, onDelete }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-5 mb-4 relative">
      {/* Close Button */}
      <span
        onClick={() => onDelete(goal.id)}
        className={`absolute right-5 top-2 text-gray-400 cursor-pointer text-2xl hover:text-gray-600 transition-colors duration-300`}
      >
        &times;
      </span>

      <h2 className="text-lg font-semibold">{goal.title}</h2>
      <div className={`flex justify-start items-center my-4`}>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {goal.desc}
        </p>
      </div>
      {/*    Priority  */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
        Priority:
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium
      ${
        goal.priority === "low"
          ? "bg-emerald-100 text-emerald-600"
          : goal.priority === "medium"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-600"
      }`}
        >
          {goal.priority}
        </span>
      </p>

      {/* Progress Bar */}
      <ProgressBar items={goal.subTasks} />

      {/* Subtasks */}
      <ul className="space-y-1 text-sm">
        {goal.subTasks.length > 0 &&
          goal.subTasks.map((subTask) => (
            <li key={subTask.id}>
              <input
                onChange={() => onToggle(goal.id, subTask.id)}
                type="checkbox"
                defaultChecked={subTask.done}
                className="mr-2"
              />{" "}
              {subTask?.title}
            </li>
          ))}
      </ul>

      {/*    Date*/}
      <div>{goal.date}</div>
    </div>
  );
};

export default GoalCard;
