import './App.css'
import {useCallback, useMemo, useState} from "react";
import Box from "./components/Box.jsx";
import UserList from "./components/UserList.jsx";

const App = () => {

    const [count, setCount] = useState(0);


    // const sayHelloFromBoxComponent = useCallback(()=> {
    //     console.log("Hello", count)
    // }, [count]);

    // const users = [
    //     {id: 1, username: "Username 1"},
    //     {id: 2, username: "Username 2"},
    //     {id: 3, username: "Username 3"},
    // ]

    // const memoUsers = useMemo(()=> [
    //     {id: 1, username: "Username 1"},
    //     {id: 2, username: "Username 2"},
    //     {id: 3, username: "Username 3"},
    // ], [])

    const users = useMemo(()=> [
        {id: 1, username: "Username 1"},
        {id: 2, username: "Username 2"},
        {id: 3, username: "Username 3"},
    ],[])

    const memoUsers = useMemo(()=>
        users.map(user => user.username.toUpperCase())
        , [users])

    return (
        <div className="main__container">
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>

            <ul>
                {memoUsers.map(user => <li key={user.username}>{user}</li>)}
            </ul>
            <UserList users={memoUsers}/>
        </div>
    );
}
export default App;
