import {createContext} from "react";
import Home from "../components/Home.jsx";


export const UserContext = createContext(null);
UserContext.displayName = "UserContext"

const UserInfoContext = ({children})=> {

    const userInfo= {
        name: "Username",
        permissions: ["admin"],
    }

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    )
}

export default UserInfoContext
