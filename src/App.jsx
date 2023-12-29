import './App.css'

import {useState} from "react";
import Home from "./pages/Home.jsx";
import Todos from "./pages/Todos.jsx";
import Users from "./pages/Users.jsx";
import PageNotFound from "./pages/PageNotFound.jsx"
import UserDetails from "./pages/UserDetails.jsx"
import {NavLink, Route, Routes} from "react-router-dom";

const App = () => {


    return (
        <div className="main__container">
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/todos">Todos</NavLink>
                    <NavLink to="/users">Users</NavLink>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/todos' element={<Todos />}></Route>
                <Route path='/users' element={<Users />}></Route>
                <Route path='/users/:userId' element={<UserDetails />}></Route>

                {/*<Route path='/products' element={<h1>All products</h1>}></Route>*/}
                {/*<Route path='/products/:id' element={<h1>Products ID 1</h1>}></Route>*/}

                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    );
}
export default App;
