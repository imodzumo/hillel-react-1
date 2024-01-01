import React, { useState, useEffect } from 'react';
import "./styles.css"


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

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

    const toggleUserDetails = (userId) => {
        setSelectedUserId(selectedUserId === userId ? null : userId);
    };

    const toggleCloseUserDetails = () => {
        setSelectedUserId(null)
    }

    return (
        <div className="users-table">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <React.Fragment key={user.id}>
                        <tr onClick={() => toggleUserDetails(user.id)}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                        {selectedUserId === user.id && (
                            <tr className="user-details">
                                <td colSpan="4">
                                    <div onClick={toggleCloseUserDetails} className="details-container">
                                        <div>
                                            <p><b>Name:</b> {user.name}</p>
                                            <p><b>Email:</b> {user.email}</p>
                                            <p><b>Phone:</b> {user.phone}</p>
                                        </div>
                                        <div>
                                            <p><b>Username:</b> {user.username}</p>
                                            <p><b>Website:</b> {user.website}</p>
                                            <p><b>Company:</b> {user.company.name}</p>
                                        </div>
                                        <div>
                                            <p><b>City:</b> {user.address.city}</p>
                                            <p><b>Street:</b> {user.address.street}</p>
                                            <p><b>Suite:</b> {user.address.suite}</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;

