import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Task({ task, onCheck, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between bg-transparent border border-gray-400 hover:border-accent-red transition-colors duration-300 rounded-lg px-4 py-2 shadow-sm"
    >
      {/* الجزء الأيسر: checkbox + title */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onCheck(task.id)}
          className="h-4 w-4 accent-red-600 cursor-pointer"
        />
        <li
          className={`list-none ${
            task.isDone
              ? "line-through text-gray-400"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          {task.title}
        </li>
      </div>

      {/* الجزء الأيمن: drag handle + delete */}
      <div className="flex items-center gap-3">
        {/* Drag handle */}
        <span
          {...listeners} // هنا فقط handle اللي تقدر تسحب منه
          className="cursor-grab select-none px-2"
        >
          &#9776; {/* الخطين المتوازيين */}
        </span>

        {/* Delete button */}
        <span
          onClick={() => onDelete(task.id)}
          className="text-gray-600 dark:text-gray-400 text-xl font-bold cursor-pointer hover:text-accent-red transition-colors duration-300"
        >
          &times;
        </span>
      </div>
    </div>
  );
}
