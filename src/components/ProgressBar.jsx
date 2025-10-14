function ProgressBar({ items }) {
  const total = items.length || 0;
  const completed = items.filter((t) => t.done).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    items.length > 0 && (
      <div className="w-full my-4 ">
        <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-300">
          <span>
            {completed} of {total} tasks
          </span>
          <span>{percent}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              percent === 100
                ? "bg-green-500"
                : percent >= 50
                  ? "bg-yellow-500"
                  : "bg-red-500"
            }`}
            style={{ width: `${percent}%` }}
          />
        </div>
        {percent === 100 && (
          <p className="mt-2 text-center text-green-600 font-medium">
            🎉 You did it! All tasks completed!
          </p>
        )}
      </div>
    )
  );
}
export default ProgressBar;
