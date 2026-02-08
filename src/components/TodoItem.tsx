import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo";

interface TodoItemProps extends Todo {
    onChange: (id: number, checked: boolean) => void;
    onClick: (id: number) => void;
}

const TodoItem = ({ completed, title, id, onChange, onClick }: TodoItemProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(id, event.target.checked);
    }
    const handleClick = () => {
        onClick(id);
    }
    return (
        <li className="flex items-center gap-2">
            <div className="border rounded-lg p-2 mb-2 grow">
                <label className = "flex items-center gap-2">
                    <input type = 'checkbox' checked = {completed} className="w-5 h-5" onChange = {handleChange} />
                    <span className={completed ? "line-through text-gray-400" : ""}>{title}</span>
                </label>
            </div>
            <Trash2 onClick = {handleClick} className = "text-red-500 hover:text-red-400 cursor-pointer" />
        </li>
    )
}

export default TodoItem;