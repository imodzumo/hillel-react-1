import {useContext} from "react";
import {TodosContext} from "../context/TodosInfoContext.jsx";

const TodoCard = ()=> {

    const data = useContext(TodosContext);


    return (
        <div>
            {data.map((todo) => (
                <ul key={todo.id}>
                    <li className="todo-card">
                        <h3 className="title">{todo.title}</h3>
                        <button className={todo.completed ? "checkbox active" : "checkbox"}>{todo.completed ? "✓" : "-"}</button>
                </li>
                </ul>
            ))}
        </div>
    );
}

export default TodoCard;
