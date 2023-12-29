import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UserDetails = ()=> {
    const params = useParams();

    const [user, setUser] = useState({})


    useEffect(()=> {
        if (!params.userId) return;
        const getUser = async ()=> {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
            const data = await res.json()
            setUser(data)
        }
        getUser()
    }, [params.userId])

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Username: {user.username}</h2>
        </div>
    );
}

export default UserDetails;
