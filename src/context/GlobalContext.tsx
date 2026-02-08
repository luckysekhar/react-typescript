
import { GlobalContext } from "./context";
import type { ContextValueType } from "./context";
import useTodos from "../customhooks/useTodos";
import type { Todo } from "../types/todo";

interface ContextProviderProps {
    children: React.ReactNode;
}

const ContextProvider = ({children}: ContextProviderProps) => {
    const {data, setData, addTodo, setTodoCompleted, deleteTodo, deleteCompletedTodos, loading, error, currentPage, setCurrentPage, totalPages, paginatedTodos} = useTodos();
    const contextValue: ContextValueType = {
        todos: paginatedTodos || data || [],
        setTodos: setData as React.Dispatch<React.SetStateAction<Todo[]>>,
        addTodo: addTodo,
        setTodoCompleted: setTodoCompleted,
        deleteTodo: deleteTodo,
        deleteCompletedTodos: deleteCompletedTodos,
        currentPage,
        setCurrentPage,
        totalPages,
        loading,
        error
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;