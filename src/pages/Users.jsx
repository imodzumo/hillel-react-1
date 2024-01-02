import UsersList from "../components/UsersList/UsersList.jsx";
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';

const Users = ()=> {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = ()=> {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            clearTimeout(timer);
        }

        timer();
    }, []);

    return (
        <div>
            {isLoading ?
                <div className="loading-wrapper">
                    <p>Loading...</p>
                    <div className="loader-container">
                        <div className="loader-bar"></div>
                    </div>
                </div>
             : (
                 <div className="users-wrapper">
                     <UsersList />
                     <Link to="/" className="button-link">Go to Homepage</Link>
                 </div>
            )}
        </div>
    );
}

export default Users;
