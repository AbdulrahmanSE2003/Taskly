import React, { useState } from "react";
import Cell from "../components/Cell.jsx";
import AddTaskModal from "../components/AddTaskModal.jsx";

const EisenhowerPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [cellToEdit, setCellToEdit] = useState(null);
  const [tasksForCells, setTasksForCells] = useState(
    JSON.parse(localStorage.getItem("eisenhowerTasks")) || [],
  );

  function handleShowModal(t) {
    setShowModal((prev) => !prev);
    setCellToEdit(t);
  }

  function handleAddTask(t) {
    const updatedTasks = [...tasksForCells, t];
    localStorage.setItem("eisenhowerTasks", JSON.stringify(updatedTasks));
    setTasksForCells(updatedTasks);
  }

  function handleDelete(id) {
    const updatedTasks = tasksForCells.filter((task) => task.id !== id);
    localStorage.setItem("eisenhowerTasks", JSON.stringify(updatedTasks));
    setTasksForCells(updatedTasks);
  }

  return (
    <>
      {showModal && (
        <AddTaskModal
          toggleModal={handleShowModal}
          cell={cellToEdit}
          onAdd={handleAddTask}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 lg:full-height gap-5 gap-y-7">
        <Cell
          toggleModal={handleShowModal}
          tasks={tasksForCells}
          onDelete={handleDelete}
          className={`h-full `}
          examples={`Crises, deadlines, problems, Focus on these tasks first.`}
          title={`Urgent & important`}
          summery={`Do`}
          color={`red`}
        />
        <Cell
          toggleModal={handleShowModal}
          tasks={tasksForCells}
          onDelete={handleDelete}
          className={`h-full`}
          examples={`Long-term goals, Planning, Build new habits.`}
          title={`Not Urgent & important`}
          summery={`Schedule`}
          color={`emerald`}
        />
        <Cell
          toggleModal={handleShowModal}
          tasks={tasksForCells}
          onDelete={handleDelete}
          className={`h-full`}
          examples={`Interruptions, some meeting, assignments, other priorities.`}
          title={`Urgent & Not important`}
          summery={`Delegate`}
          color={`yellow`}
        />
        <Cell
          toggleModal={handleShowModal}
          tasks={tasksForCells}
          onDelete={handleDelete}
          className={`h-full`}
          examples={`Distractions, time-wasters.`}
          title={`Not Urgent & Not important`}
          summery={`Eliminate`}
        />
      </div>
    </>
  );
};

export default EisenhowerPage;
