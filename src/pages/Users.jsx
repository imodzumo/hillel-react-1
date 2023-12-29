import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Users = ()=> {
    const [users, setUsers] = useState([])



    useEffect(()=> {
        const getUsers = async ()=> {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json()
            setUsers(data)
        }
        getUsers()
    }, [])

    return (
        <div>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link to={`${user.id}`}>user.name</Link>
                        <h2>user.username</h2>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Users;
