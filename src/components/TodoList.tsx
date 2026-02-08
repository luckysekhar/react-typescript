import { useContext } from "react";
import { GlobalContext } from "../context/context";
import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
// import { sortList } from "../utils/utils";
import PaginationBtns from "./PaginationBtns";
import AddTodoForm from "./AddTodoForm";


const TodoList: React.FC = () => {
    const { todos, addTodo, setTodoCompleted, deleteTodo, currentPage, totalPages, setCurrentPage } = useContext(GlobalContext)!;
    // const sortedTodos = [...todos].sort((a, b) => Number(a.completed) - Number(b.completed));
    // const sortedTodos = useMemo(() => sortList({list: todos, key: "completed"}), [todos])

    const handleChange = (id: number, completed: boolean) => {
        console.log('id, completed', id, completed);
        setTodoCompleted(id, completed);
    }   
    const handleClick = (id: number) => {
        deleteTodo(id);
    }

    const onInputChange = (title: string) => {
        addTodo(title);
    }
    
    return (
        <>
            <AddTodoForm onInputChange = {onInputChange}/>
            <div>
                <h2>Todo List</h2>
                <ul>
                    {todos.map((todo: Todo) => (
                        <TodoItem key = {todo.id} {...todo} onChange = {handleChange} onClick = {handleClick} />
                    ))}
                </ul>
            </div>
            <PaginationBtns currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    );
}

export default TodoList;