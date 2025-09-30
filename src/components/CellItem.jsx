import React from "react";

const COLORS = {
  yellow: "bg-yellow-200",
  red: "bg-red-200",
  gray: "bg-gray-200 dark:bg-gray-400",
  green: "bg-green-200",
};

const CellItem = ({ color, task,onDelete }) => {
  return (
    <div
      className={`relative p-6 max-h-[70px] rounded-md shadow-md flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800`}
    >
      {" "}
      <div
        className={`h-4 w-full absolute left-0 top-0 right-0 rounded-t-md ${COLORS[color] || COLORS["gray"]} `}
      ></div>{" "}
        <div className={`absolute top-[-5px] right-1 font-semibold text-lg text-black hover:text-accent-red transition-colors duration-300 cursor-pointer`} onClick={() =>onDelete(task.id)}>&times;</div>
      <span className={`mt-3 capitalize`}>{task.title}</span>{" "}
    </div>
  );
};

export default CellItem;
