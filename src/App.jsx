import './App.css'
import Home from "./components/Home.jsx";
import {createContext, useState} from "react";


// export const UserInfoContext = createContext(null);
// export const AuthContext = createContext(null);

const App = () => {
    // const [isAuth, setIsAuth] = useState(true);



    // const isAuthData = {
    //     value: isAuth,
    //     onChange: setIsAuth
    // }

    return (
        <div className="main__container">
            {/*<AuthContext.Provider value={isAuthData}>*/}
            {/*    <UserInfoContext.Provider value={userInfo}>*/}
                    <Home />
                {/*</UserInfoContext.Provider>*/}
            {/*</AuthContext.Provider>*/}
        </div>
    );
}
export default App;
