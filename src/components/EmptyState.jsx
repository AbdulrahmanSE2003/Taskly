import React from "react";
import { BiTargetLock } from "react-icons/bi"; // أيقونة رمزية للـ Goals

const EmptyState = ({ message = "No goals yet!", actionText, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500 dark:text-gray-400">
      <BiTargetLock className="text-5xl mb-4 text-gray-400 dark:text-gray-500" />
      <h3 className="text-lg font-medium mb-2">{message}</h3>
      <p className="text-sm mb-6">Start by adding your first goal 🎯</p>

      {onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          {actionText || "Add Goal"}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
