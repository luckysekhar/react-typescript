import type { Todo } from "../types/todo";

interface SortListOptions {
    list: Todo[];
    key: keyof Todo;
    order?: 'asc' | 'desc';
}

export const sortList = (sortListOptions: SortListOptions) => {
    const { list, key } = sortListOptions;
    return list.sort((a, b) => {
        if (a[key] === b[key]) return b.id - a.id;
        return a[key] ? 1 : -1;            
        // return order === 'asc' ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1);
    });                         
}