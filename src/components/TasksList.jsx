import Task from "./Task.jsx";

export default function TasksList({ setTasks, tasks }) {
    function handleCheck(id) {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        console.log(updatedTasks);
        setTasks(updatedTasks);
    }

    function handleDelete(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        console.log(updatedTasks)
        setTasks(updatedTasks)
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
