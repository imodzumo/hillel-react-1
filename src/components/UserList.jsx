import {memo} from 'react'
const UserList = ({users})=> {

    return (
        <div className="homepage-container">
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.username}</li>)}
            </ul>
        </div>
    );
}

export default memo(UserList);
