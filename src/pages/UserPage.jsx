import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserPage() {
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchUser();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-wrapper">
            <div className="user-details">
                <p><b>Name:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Website:</b> {user.website}</p>
                <p><b>Company:</b> {user.company.name}</p>
                <p><b>City:</b> {user.address.city}</p>
                <p><b>Street:</b> {user.address.street}</p>
                <p><b>Suite:</b> {user.address.suite}</p>
            </div>
            <Link to="/users" className="button-link">Go back</Link>
        </div>
    );
}

export default UserPage;
