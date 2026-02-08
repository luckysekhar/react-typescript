import { useRef } from "react";
interface AddTodoFormProps {
    onInputChange: (value: string) => void;
}   

const AddTodoForm: React.FC<AddTodoFormProps> = ({onInputChange}) => {
    // const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();     
        onInputChange(inputRef.current?.value || "");
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }
    return (
        <form onSubmit = {handleSubmit} className = 'flex'>
            <input type = 'text' id = 'title' name = 'title' ref = {inputRef} placeholder="Add a new todo" className = 'p-2 rounded-s-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent grow' />
            <button type = 'submit' className = 'bg-blue-500 text-white px-4 py-2 rounded-e-md hover:bg-blue-600'>Add</button>
        </form>
    )
}

export default AddTodoForm;