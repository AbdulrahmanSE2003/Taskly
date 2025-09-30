import AddTask from "../components/AddTask";
import TasksList from "../components/TasksList.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import MotivationalQuotes from "../components/MotivationalQuotes.jsx";

export default function TasksPage({ tasks, setTasks, addTask, clearTasks, theme, toggleTheme }) {
    return (
        <div>
            {/* Theme Switch */}
            <label className="absolute right-8 top-5 inline-block w-12 h-6">
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    className="opacity-0 w-0 h-0 peer"
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 peer-checked:bg-red-600"></span>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></span>
            </label>

            <MotivationalQuotes />

            <h3 className="text-xl sm:text-4xl font-medium mt-4 w-full -ml-3">
                <span className="mx-2 text-red-600 font-medium">|</span>
                Your To<span className="text-red-600">-</span>Do
                <span className="text-red-600">'</span>s
            </h3>

            <AddTask onAdd={addTask} />
            <ProgressBar tasks={tasks} />
            <TasksList tasks={tasks} setTasks={setTasks} />

            {tasks.length > 0 && (
                <button
                    onClick={clearTasks}
                    className="mt-3 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors capitalize"
                >
                    Clear All
                </button>
            )}
        </div>
    );
}
