import {useEffect, useState} from "react";
import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/AddTask";

const tasksList = [
    {
        id: 1,
        title: "Studying React.JS 👩‍💻",
        isDone: false,
    },
    {
        id: 2,
        title: "Finishing Assignment 📃",
        isDone: true,
    },
    {
        id: 3,
        title: "Listening to Podcast 🎙",
        isDone: false,
    },
];

export default function App() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const [tasks, setTasks] = useState(tasksList);
    const [theme, setTheme] = useState(savedTheme);

    function handleAddTask(task) {
        setTasks((tasks) => [...tasks, task]);
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") document.body.classList.add("dark");
        if (theme !== "dark") document.body.classList.remove("dark")
    }, [theme]);

    function handleMode() {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    }

    return (
        <div
            className={theme === "light" ? "container light" : "container dark"}
        >
            <label className="switch">
                <input type="checkbox" onClick={handleMode} checked={theme === "dark"} />
                <span className="slider"></span>
            </label>
            <h3>
                <span
                    className="red"
                    style={{ margin: "0px 9px", fontWeight: "500" }}
                >
                    |
                </span>
                Your To
                <span className="red">-</span>Do
                <span className="red">'</span>s
            </h3>
            <AddTask onAdd={handleAddTask} />
            <TasksList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}
