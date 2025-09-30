import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "./Task.jsx";

export default function TasksList({ tasks, setTasks }) {
  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((t) => t.id === active.id);
    const newIndex = tasks.findIndex((t) => t.id === over.id);

    setTasks(arrayMove(tasks, oldIndex, newIndex));
    localStorage.setItem(
      "tasks",
      JSON.stringify(arrayMove(tasks, oldIndex, newIndex)),
    );
  }

  function handleCheck(id) {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, isDone: !t.isDone } : t,
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <ul
          className={`w-full py-5 space-y-3 overflow-y-hidden overflow-x-hidden max-h-[${tasks.length * 50}px]`}
        >
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCheck={handleCheck}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
