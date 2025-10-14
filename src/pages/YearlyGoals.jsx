import React, { useState } from "react";
import GoalCard from "../components/GoalCard.jsx";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";

function YearlyGoals() {
  const [isOpen, setIsOpen] = useState(false);

  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem('yearlyGoals')) || []);

  function addGoal(newGoal) {
      const newGoals =  [...goals, newGoal]
    setGoals(newGoals);
    localStorage.setItem('yearlyGoals', JSON.stringify(newGoals))
  }

  function handleToggleST(gId, stId) {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === gId
          ? {
              ...goal,
              subTasks: goal.subTasks.map((subTask) =>
                subTask.id === stId
                  ? {
                      ...subTask,
                      done: !subTask.done,
                    }
                  : subTask,
              ),
            }
          : goal,
      ),
    );
  }

  function handleDelete(id) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <div className="p-6">
      {isOpen && <Modal onAdd={addGoal} onClose={() => setIsOpen(false)} />}

      <div className={`flex justify-between items-center mb-8`}>
        <h1 className="text-2xl font-bold">Yearly Goals</h1>
        <Button onClick={() => setIsOpen(true)}>Add New Goal</Button>
      </div>

      {/* Goal Card */}
      {goals.map((goal) => (
        <GoalCard
          goal={goal}
          key={goal.id}
          onToggle={handleToggleST}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default YearlyGoals;
