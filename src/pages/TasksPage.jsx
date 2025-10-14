import AddTask from "../components/AddTask";
import TasksList from "../components/TasksList.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import MotivationalQuotes from "../components/MotivationalQuotes.jsx";
import Button from "../components/Button.jsx";
import EmptyState from "../components/EmptyState.jsx";

export default function TasksPage({ tasks, setTasks, addTask, clearTasks }) {
  return (
    <div>
      <MotivationalQuotes />

      <h3 className="text-xl sm:text-4xl font-medium mt-4 w-full -ml-3">
        <span className="mx-2 text-red-600 font-medium">|</span>
        Your To<span className="text-red-600">-</span>Do
        <span className="text-red-600">'</span>s
      </h3>

      <AddTask onAdd={addTask} />
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <ProgressBar items={tasks} />
          <TasksList tasks={tasks} setTasks={setTasks} />
        </>
      )}

      {tasks.length > 0 && (
        <Button onClick={clearTasks} bg={`bg-red-500`}>
          Clear All
        </Button>
      )}
    </div>
  );
}
