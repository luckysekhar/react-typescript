import type { Todo } from "../../types/todo"

interface TodoSummaryProps {
    todos: Todo[]
    deleteAllCompleted: () => void
}

const TodoSummary: React.FC<TodoSummaryProps> = ({todos, deleteAllCompleted}) => {
    const completedTodos = todos.filter(todo => todo.completed);
    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">{completedTodos.length} / {todos.length} is Completed.</p>
            {
                completedTodos.length > 0 && 
                <button onClick = {deleteAllCompleted} className = "text-red-500 hover:underline text-sm font-medium cursor-pointer">Delete All Completed</button>
            }
        </div>
    )
}

export default TodoSummary;