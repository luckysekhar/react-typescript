import { useContext, useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import { dummyData } from "../data/todos";
import { GlobalContext } from "../context/context";

const useTodos = () => {
    const contextTodos = useContext(GlobalContext);
    console.log('contextTodos........', contextTodos);
    const [todos, setTodos] = useState(() => {
        const storedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || "[]");
        return storedTodos.length > 0 ? storedTodos : dummyData;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    })

    const setTodoCompleted = (id:number, completed: boolean) => {
        setTodos(prevTodo => 
        prevTodo.map(todo => todo.id === id ? {...todo, completed} : todo)
        )
    }
    const addTodo = (title: string) => {
        setTodos(prevTodo => 
        // prevTodo.push({id: prevTodo.length + 1, title, completed: false });
        [...prevTodo, {id: prevTodo.length + 1, title, completed: false }]
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
    }

    const deleteCompletedTodos = () => {
        setTodos(prevTodo => prevTodo.filter(todo => !todo.completed));
    }

    return {
        todos,
        addTodo,
        setTodoCompleted,
        deleteTodo,
        deleteCompletedTodos
    }
}

export default useTodos;