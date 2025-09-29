import {useEffect, useState} from "react";
import TasksList from "./components/TasksList.jsx";
import AddTask from "./components/AddTask";

export default function App() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [theme, setTheme] = useState(savedTheme);


    function handleAddTask(task) {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks, task];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        });
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
        <div className={`${
            theme === "light"
                ? "bg-white text-black"
                : "bg-gray-900 text-white"
        }`}>
            <div
                className={`flex flex-col justify-center items-center px-5 sm:px-0 w-full sm:w-1/2 mx-auto h-screen transition-[width] duration-500 ease-in-out `}
            >
                <label className="absolute right-8 top-5 inline-block w-12 h-6">
                    <input
                        type="checkbox"
                        onClick={handleMode}
                        checked={theme === "dark"}
                        className="opacity-0 w-0 h-0 peer"
                    />
                    <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 peer-checked:bg-red-600"></span>
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></span>
                </label>

                <h3 className="text-xl sm:text-4xl font-medium mt-4 w-full -ml-3">
                    <span className="mx-2 text-red-600 font-medium">|</span>
                    Your To
                    <span className="text-red-600">-</span>Do
                    <span className="text-red-600">'</span>s
                </h3>

                <AddTask onAdd={handleAddTask} />
                <TasksList tasks={tasks} setTasks={setTasks} />
            </div>

        </div>
    );
}
