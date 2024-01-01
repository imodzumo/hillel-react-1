import UsersList from "../components/UsersList/UsersList.jsx";
import {Link} from "react-router-dom";
const Users = ()=> {

    return (
        <div className="users-wrapper">
            <UsersList/>
            <Link to="/" className="button-link">Go to Homepage</Link>
        </div>
    );
}

export default Users;
