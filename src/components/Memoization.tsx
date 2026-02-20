import { memo, useCallback, useState } from "react";
import Child from "./Child";

const MemoizedChild = memo(Child);
const Memoization = () => {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({ name: "John", age: 30 });
    // const updateObj = (val) => {
    //     console.log('Updating object...', val);
    // }
    const memoizedFun = useCallback((val: string) => {
        console.log('Updating object...', val);
    }, [])

    const handleBtnClick = () => {
        setCount(count + 1);
        setCount(count + 10);
        setObj(prevObj => ({...prevObj, name: 'Doe'}));
        // setCount(prevCount => prevCount + 1);
    }
    console.log('count.......', count);
    return (
        <div className="text-red-500 border-2">
            <h1>Memoization</h1>
            <p>Count: {count}</p>
            <button onClick={handleBtnClick}>Increment</button>
            <MemoizedChild obj = {obj} updateObj = {memoizedFun}/>
        </div>
    )
}

export default Memoization;