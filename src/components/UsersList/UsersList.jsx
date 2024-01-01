import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async ()=> {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }
                const data = await res.json()
                setUsers(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        getUsers();
    }, []);

    return (
        <div className="users-grid">
            <div className="grid-header">
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Website</div>
            </div>
            {users.map(user => (
                <Link to={`/users/${user.id}`} key={user.id} className="grid-row">
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                    <div>{user.website}</div>
                </Link>
            ))}
        </div>
    );
}

export default UsersList;

