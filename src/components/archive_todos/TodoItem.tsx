import { Trash2 } from "lucide-react";
import type { Todo } from "../../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({todo, onCompletedChange, onDelete}: TodoItemProps) => {
    // const {todo} = props;
    return (
        <div className="flex items-center">
            <label className="flex items-center border rounded-md gap-2 p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
                <input type = 'checkbox' className="scale-125" checked = {todo.completed} onChange = {(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
            </label>
            <Trash2 onClick = {() => onDelete(todo.id)} className="ml-4 text-red-500 hover:text-red-700 cursor-pointer" size = {20} />
        </div>
    )
}

export default TodoItem;