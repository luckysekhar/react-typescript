interface ChildProps {
    obj: {
        name: string;
        age: number;
    },
    updateObj: (val: string) => void;
}

const Child: React.FC<ChildProps> = ({ obj: {name, age}, updateObj }) => {
    console.log('Child component rendered');
    return (
        <div>   
            <h1>Child Component</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={() => updateObj('Updated Name')}>Update Object</button>
        </div>
    )
}

export default Child;