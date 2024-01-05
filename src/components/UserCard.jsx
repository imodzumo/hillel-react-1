import {useContext} from "react";
import {UserContext} from "../context/UserInfoContext.jsx";

const UserCard = ()=> {

    const data = useContext(UserContext);


    return (
        <div>
            <h1>User info</h1>
            <div>Username: {data.name}</div>
        </div>
    );
}

export default UserCard;
