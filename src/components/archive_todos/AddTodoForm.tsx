import { useRef } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

const AddTodoForm = ({onSubmit}: AddTodoFormProps) => {
    // const [inputVal, setInputVal] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value);
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputRef.current?.value.trim()) return;
        onSubmit(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <form className="flex" onSubmit = {handleSubmit}>
            <input type = 'text' ref = {inputRef} placeholder="What needs to be done..." className="border rounded-s-md p-2 grow"/>
            <button type = 'submit' className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-600">Add</button>
        </form>
    )
}

export default AddTodoForm;