import {useEffect, useState} from "react";

const Box = ()=> {
    // const [count, setCount] = useState(0)
    // const [isAuth, setIsAuth] = useState(true)
    // const callback = ()=> console.log("UseEffect")
    // useEffect(callback);

    const [todo, setTodo] = useState([])
    const [todoId, setTodoId] = useState(1)

    useEffect(()=> {
        // // Mount
        // console.log("UseEffect", count)

        // return ()=> {
        //     // Unmount
        //     console.log("Delete");
        // }

        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        const getTodo = async ()=> {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }
                const data = await res.json()
                setTodo(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        getTodo();
    }, [todoId]);

    return (
        <div>
            {/*<h1>Box component</h1>*/}
            {/*<h2>Count: {count}</h2>*/}
            {/*<button onClick={()=> setCount(prev => prev + 1)}>increment</button>*/}
            {/*<button onClick={()=> setIsAuth(!isAuth)}>Toggle {isAuth ? "yes" : "no" }</button>*/}
            <input type="number" value={todoId} onChange={(e) => setTodoId(e.target.value)}/>
            <div>
                <h3>{todo.title}</h3>
                <p>Completed: {todo.Completed}</p>
            </div>
            {/*<h1>List of todos: </h1>*/}
            {/*<ul>*/}
            {/*    {todo.map(todo => <li key={todo.id}>{todo.title}</li>)}*/}
            {/*</ul>*/}
        </div>
    );
}

export default Box;
