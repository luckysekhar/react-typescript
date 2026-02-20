import TodoItem from "./TodoItem";
import type { Todo } from "../../types/todo";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, onCompletedChange, onDelete}) => {
    // const todosSorted = [...todos].sort((a, b) => Number(a.completed) - Number(b.completed));
    const todosSorted = todos.sort((a,b) => {
        if(a.completed === b.completed) return b.id - a.id;
        return a.completed ? 1 : -1;
    })

    return (
        <>
            <div className="space-y-2">
            {
                todosSorted.map(todo => <TodoItem todo = {todo} onCompletedChange = {onCompletedChange} onDelete = {onDelete} />)
            }
            </div>
            {
                todos.length === 0 && <p className = "text-center text-red-500">No todos yet. Add new one above.</p>
            }
        </>
    );
}

export default TodoList;    