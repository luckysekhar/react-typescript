// import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
// import TodoSummary from "./components/TodoSummary";
// import useTodos from "./customhooks/useTodos";
// import Memoization from "./components/Memoization";

function App() {
  // const [todos, setTodos] = useState(() => {
  //   const storedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || "[]");
  //   return storedTodos.length > 0 ? storedTodos : dummyData;
  // });

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // })

  // const setTodoCompleted = (id:number, completed: boolean) => {
  //   setTodos(prevTodo => 
  //     prevTodo.map(todo => todo.id === id ? {...todo, completed} : todo)
  //   )
  // }
  // const addTodo = (title: string) => {
  //   setTodos(prevTodo => 
  //     // prevTodo.push({id: prevTodo.length + 1, title, completed: false });
  //     [...prevTodo, {id: prevTodo.length + 1, title, completed: false }]
  //   )
  // }

  // const deleteTodo = (id: number) => {
  //   setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
  // }

  // const deleteCompletedTodos = () => {
  //   setTodos(prevTodo => prevTodo.filter(todo => !todo.completed));
  // }
  // const {
  //   todos,
  //   addTodo,
  //   setTodoCompleted,
  //   deleteTodo,
  //   deleteCompletedTodos
  // } = useTodos();
  // console.log('todos........', todos);
  return (
    <div className = 'py-10 h-screen space-y-6'>
      <h1 className = "font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto space-y-6 bg-red-100 p-4">
        <TodoList />
        {/* <AddTodoForm onSubmit = {addTodo}/>
        <TodoList todos = {todos} onCompletedChange = {setTodoCompleted} onDelete = {deleteTodo} />
        <TodoSummary todos = {todos} deleteAllCompleted={deleteCompletedTodos} /> */}
      </div>
      {/* <Memoization /> */}
    </div>
  )
}

export default App
