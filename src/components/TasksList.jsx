import Task from "./Task.jsx";

export default function TasksList({ setTasks, tasks }) {
    function handleCheck(id) {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    }

    function handleDelete(id) {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }

    return (
        <ul className="tasks">
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
