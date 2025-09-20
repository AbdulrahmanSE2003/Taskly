import { useState } from "react";

export default function AddTask({ onAdd }) {
    const [todo, setTodo] = useState("");

    function handleAdd() {
        const newTask = {
            id: crypto.randomUUID(),
            title: todo,
            isDone: false,
        };

        onAdd(newTask);
        setTodo("");
    }

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Add New Task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            ></input>
            <button className="btn" onClick={handleAdd}>
                +
            </button>
        </div>
    );
}
