import React, { useState } from "react";

const Modal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [subTasks, setSubtasks] = useState([]);
  const [subTasksInput, setSubtaskInput] = useState("");

  function handleAddSubtask(e) {
    e.preventDefault();
    if (!subTasksInput.trim()) return;

    setSubtasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: subTasksInput.trim(), done: false },
    ]);
    setSubtaskInput([]);
  }

  function handleAdd(e) {
    e.preventDefault();

    const newGoal = {
      id: crypto.randomUUID(),
      title,
      desc,
      date: date || null,
      priority: priority || "low",
      subTasks,
    };

    console.log(newGoal);

    onAdd(newGoal);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Goal</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div>
          <form onSubmit={handleAdd} className="flex flex-col gap-4 w-full">
            {/* Title */}
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                Goal Title
              </label>
              <input
                type="text"
                placeholder="Enter goal title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Description */}
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                Description
              </label>
              <textarea
                placeholder="Write a short description..."
                rows={3}
                value={desc}
                required
                onChange={(e) => setDesc(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Date */}
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">
                Target Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Priority */}
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Subtasks */}
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium">Subtasks</label>

              {/* Input + Button */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={subTasksInput}
                  onChange={(e) => setSubtaskInput(e.target.value)}
                  placeholder="Add a subTask..."
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={handleAddSubtask}
                  className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* List of Subtasks */}
              <ul className="mt-2 space-y-1">
                {subTasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex justify-between items-center bg-gray-100 px-3 py-1 rounded-md "
                  >
                    <span>{task.title}</span>
                    <button
                      onClick={() =>
                        setSubtasks((prev) =>
                          prev.filter((st) => st.id !== task.id),
                        )
                      }
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => onClose()}
                className="px-4 py-2 rounded-lg border border-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer"
              >
                Save Goal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
