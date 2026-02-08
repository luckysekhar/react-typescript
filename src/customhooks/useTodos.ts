import { useState, useMemo } from "react";
import type { Todo } from "../types/todo";
import useFetch from "./useFetch";

const useTodos = () => {
    const {data, setData, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos');

    const [currentPage, setCurrentPage] = useState(1);
    
    const filteredTodos = useMemo(() => {
        if (data) {
            return data.filter((todo: Todo) => todo.userId <= 5);
        }
    }, [data])

    const paginatedTodos = useMemo(() => {
        if (filteredTodos) {
            const recordsPerPage = 10;
            const lastIndex = currentPage * recordsPerPage;
            const firstIndex = lastIndex - recordsPerPage;
            return filteredTodos.slice(firstIndex, lastIndex);
        }
    }, [filteredTodos, currentPage])
    console.log('paginatedTodos', paginatedTodos);

    const setTodoCompleted = (id:number, completed: boolean) => {
        if(data){
            setData(prevTodo => 
                (prevTodo || []).map(todo => todo.id === id ? {...todo, completed} : todo)
            )
        }
    }
    const addTodo = (title: string) => {
        const recordsPerPage = 10;
        const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;
        const updatedTodos = [
            ...filteredTodos!.slice(0, firstIndex),
            {id: (data || []).length + 1, userId: 5, title, completed: false },
            ...filteredTodos!.slice(firstIndex)
        ]
        // setData(prevTodo => 
            // [{id: (prevTodo || []).length + 1, userId: 5, title, completed: false }, ...(prevTodo || [])]
        // )
        setData([...updatedTodos]);
    }

    const deleteTodo = (id: number) => {
        setData(prevTodo => (prevTodo || []).filter(todo => todo.id !== id));
    }

    const deleteCompletedTodos = () => {
        setData(prevTodo => (prevTodo || []).filter(todo => !todo.completed));
    }

    return {
        data, 
        setData,
        addTodo,
        setTodoCompleted,
        deleteTodo,
        deleteCompletedTodos,
        loading,
        error,
        currentPage,
        setCurrentPage,
        totalPages: filteredTodos ? Math.ceil(filteredTodos.length / 10) : 0,
        paginatedTodos
    }
}

export default useTodos;