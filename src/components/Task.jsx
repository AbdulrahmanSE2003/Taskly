export default function Task({ task, onCheck, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-transparent border border-gray-400 hover:border-accent-red transition-colors duration-300 rounded-lg px-4 py-2 shadow-sm">
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
      <span
        onClick={() => onDelete(task.id)}
        className="text-gray-600 dark:text-gray-400 text-xl font-bold cursor-pointer  hover:text-accent-red transition-colors duration-300"
      >
        &times;
      </span>
    </div>
  );
}
