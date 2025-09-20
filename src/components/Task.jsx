export default function Task({ task, onCheck, onDelete }) {
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => onCheck(task.id)}
            />
            <li className={task.isDone ? "checked" : ""}>{task.title}</li>
            <span onClick={() => onDelete(task.id)}>&times;</span>
        </div>
    );
}
