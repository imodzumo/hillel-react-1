import {createContext, useEffect, useState} from "react";


export const TodosContext = createContext(null);
TodosContext.displayName = "TodosContext"

const TodosInfoContext = ({children})=> {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }
                const todosData = await response.json();
                setTodos(todosData);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchTodos();
    }, []);

    if (!todos) {
        return <div>Loading...</div>;
    }

    return (
        <TodosContext.Provider value={todos}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosInfoContext
