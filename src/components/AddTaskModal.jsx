import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddTaskModal({ toggleModal, cell, onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      cell: cell,
    };
    onAdd(newTask);
    setTask("");
    toggleModal();
  };

  return (
    <div>
      {/* المودال */}
      <AnimatePresence>
        {
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={toggleModal} // كليك برا يقفل
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()} // عشان الكليك جوه المودال م يقفلش
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Add New Task
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Enter your task..."
                  className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-lg transition text-white 
                                            ${
                                              task.trim().length === 0
                                                ? "bg-red-300 cursor-not-allowed"
                                                : "bg-red-600 hover:bg-red-700"
                                            }`}
                    disabled={!task.trim()}
                  >
                    Add
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
}
