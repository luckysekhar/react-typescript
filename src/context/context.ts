import { createContext } from "react";
import type { Todo } from "../types/todo";

export interface ContextValueType {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    addTodo: (title:string) => void;
    setTodoCompleted: (id:number, completed: boolean) => void;
    deleteTodo: (id: number) => void;
    deleteCompletedTodos: () => void;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    loading: boolean;
    error: string | null;
}

export const GlobalContext = createContext<ContextValueType | undefined>(undefined);