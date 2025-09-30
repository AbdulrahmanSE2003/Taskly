import React from "react";

const COLORS = {
  yellow: "bg-yellow-200",
  red: "bg-red-200",
  gray: "bg-gray-200",
  green: "bg-green-200",
};

const CellItem = ({ color, title }) => {
  return (
    <div
      className={`relative p-3 max-h-[60px] rounded-md shadow-md flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800`}
    >
      {" "}
      <div
        className={`h-4 w-full absolute left-0 top-0 right-0 rounded-t-md ${COLORS[color] || COLORS["gray"]}`}
      ></div>{" "}
      <span className={`mt-3`}>{title}</span>{" "}
    </div>
  );
};

export default CellItem;
