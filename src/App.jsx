import './App.css'
import {useState} from "react";
// import Card from "./components/Card/Card.jsx";
// import coursesData from "/data.js"
// import Box from "./components/Box/Box.jsx";

const App = () => {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    const handleSubmitForm = (event)=> {
        event.preventDefault()

        const newTodoItem = {
            id: new Date().getTime(),
            title,
        }

        setTodos(prevState => [...prevState, newTodoItem])
        setTitle("")
    }
    const handleChangeValue = (event)=> {
        setTitle(event.target.value)
    }

    return (
        <div className="main__container">
            {/*Hooks и state*/}
            {/*<Box />*/}

            {/*To do list*/}
            <div>
                <form onSubmit={handleSubmitForm}>
                    <input type="text" placeholder="enter todo name" value={title} onChange={handleChangeValue}/>
                    <button type="submit">Create todo</button>
                </form>

                <div>
                    <ul>
                        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default App;
