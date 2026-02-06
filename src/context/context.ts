import { createContext } from "react";
import type { Todo } from "../types/todo";

export interface ContextValueType {
    todos: Todo[]
}

export const GlobalContext = createContext<ContextValueType | undefined>(undefined);