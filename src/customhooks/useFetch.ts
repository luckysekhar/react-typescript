import { useCallback, useEffect, useState } from "react"
import type { Todo } from "../types/todo";

const useFetch = (url: string) => {
    const [data, setData] = useState<Todo[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = useCallback(async (url: string, signal?: AbortSignal) => {
        try {
            const response = await fetch(url, { signal });
            if(!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log('data', data);
            setData(data);
        } catch (error:Error | unknown) {
            console.error('Fetch error:', error);
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [])
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetchData(url, signal);
        return () => {
            controller.abort();
        }
    }, [])

    return { data, setData, loading, error };
}

export default useFetch;