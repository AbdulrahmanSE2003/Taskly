// AddTask.jsx
import { useState } from "react";

export default function AddTask({ onAdd }) {
    const [todo, setTodo] = useState("");

    function handleAdd() {
        if (todo.trim().length === 0) return;
        const newTask = {
            id: crypto.randomUUID(),
            title: todo,
            isDone: false,
        };
        onAdd(newTask);
        setTodo("");
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div className="flex items-center justify-between w-full mt-4">
            <input
                type="text"
                placeholder="Add New Task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-l-lg border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:border-accent-red transition-colors duration-300"
            />
            <button
                onClick={handleAdd}
                className="rounded-r-lg bg-red-600 text-white text-xl font-bold w-12 h-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
                +
            </button>
        </div>
    );
}
