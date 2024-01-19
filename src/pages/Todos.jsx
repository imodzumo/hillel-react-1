import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch.jsx";

const Todos = ()=> {
	// const [todos, setTodos] = useState([]);

	const {data: todos} = useFetch("https://jsonplaceholder.typicode.com/todos")


	// useEffect(()=> {
	// 	const getTodos = async ()=> {
	// 		const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	// 		const data = await res.json();
	// 		setTodos(data);
	// 	}
	// 	getTodos();
	// }, [])
	return (
		<div>
			<h1>Todos</h1>
			<ul>
				{todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
			</ul>
		</div>
	);
}

export default Todos;
