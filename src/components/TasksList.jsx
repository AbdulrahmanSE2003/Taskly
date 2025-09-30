import { CheckCircle2 } from "lucide-react"; // أيقونة جاهزة من lucide
import Task from "./Task.jsx";

export default function TasksList({ setTasks, tasks }) {
  function handleCheck(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-500">
        <CheckCircle2 className="w-12 h-12 mb-4 text-gray-400" />
        <p className="text-sm sm:text-lg font-medium text-center">
          No tasks yet ✨ <br />
          Start by adding your first one 🚀
        </p>
      </div>
    );
  }

  return (
    <ul className="w-full py-5 space-y-3 overflow-y-auto">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onCheck={handleCheck}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
