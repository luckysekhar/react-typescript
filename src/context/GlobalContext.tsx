
import { GlobalContext } from "./context";
import { dummyData } from "../data/todos";
import type { ContextValueType } from "./context";

interface ContextProviderProps {
    children: React.ReactNode;
}

const ContextProvider = ({children}: ContextProviderProps) => {
    const contextValue: ContextValueType = {
        todos: dummyData
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;