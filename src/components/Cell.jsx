import CellItem from "./CellItem.jsx";

const colorClasses = {
  red: "bg-red-500 shadow-red-900",
  emerald: "bg-emerald-500 shadow-emerald-900",
  yellow: "bg-yellow-500 shadow-yellow-900",
  gray: "bg-gray-500 shadow-gray-900", // fallback
};

const Cell = ({
  className,
  color,
  summery,
  examples,
  title,
  toggleModal,
  tasks,
  onDelete,
}) => {
  const accepted = tasks.filter((task) => task.cell === title);
  console.log(accepted);

  return (
    <>
      <div
        className={`border border-gray-200 rounded-xl p-5 ${className || ""} hover:border-gray-300 transition-colors duration-300 dark:border-gray-400 dark:hover:border-gray-200 flex flex-col items-start gap-3`}
      >
        <div className={`flex items-center justify-start gap-4 mb-2`}>
          <div
            className={`w-4 rounded-full ${colorClasses[color] || colorClasses.gray} h-4 shadow-xl shadow-${colorClasses[color] || colorClasses.gray}-900`}
          ></div>
          <h4
            className={`font-semibold capitalize text-black dark:text-gray-100`}
          >
            {title}
          </h4>
          <span className={`text-gray-400 capitalize`}>({summery})</span>
        </div>
        <p className={`text-gray-500`}>{examples}</p>

        {/*Tasks*/}

        <div
          className={`flex gap-3 mt-4 overflow-y-auto flex-wrap max-h-40 w-full flex-1`}
        >
          {accepted.map((task) => (
            <CellItem
              task={task}
              color={color}
              key={task.id}
              onDelete={onDelete}
            />
          ))}
        </div>

        <button
          className={`mt-auto border-2 border-gray-200 w-full p-2 py-3 rounded-xl border-dashed hover:border-gray-400 cursor-pointer transition-colors duration-300 text-gray-500 hover:text-black font-semibold dark:border-gray-400 dark:hover:border-gray-200 dark:hover:text-gray-200`}
          onClick={() => toggleModal(title)}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default Cell;
