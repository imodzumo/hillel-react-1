import './App.css'
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import PageNotFound from "./pages/PageNotFound.jsx"
import UserPage from "./pages/UserPage.jsx"
import {Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <div className="main__container">
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/users' element={<Users />}></Route>
                <Route path='/users/:userId' element={<UserPage />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    );
}
export default App;
