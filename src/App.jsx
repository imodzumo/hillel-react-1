import './App.css'
import {useEffect, useReducer, useState} from "react";
import {Decrement, Increment} from "./actions/actions.js";
import {increment, decrement} from "./actions/actionsCreator.js";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "./redux/slices/authSlice.js";
import {PIZZA_API} from "./constants.js"
import MenuItem from "./components/MenuItem.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Menu from "./pages/Menu.jsx";

const App = () => {

    // const reducer = (state, action)=> {
    //     switch (action.type) {
    //         case Increment:
    //             return {
    //                 ...state,
    //                 value: state.value + 1
    //             };
    //         case Decrement:
    //             return {
    //                 ...state,
    //                 value: state.value - 1
    //             };
    //         default:
    //             return state;
    //     }
    // }
    // const initialState = {
    //     value: 1,
    //     counterId: 10,
    // };
    // const [state, dispatch] = useReducer(reducer, initialState);
    //
    // const handleIncrement = ()=> {
    //     dispatch(increment());
    // }
    // const handleDecrement = ()=> {
    //     dispatch(decrement());
    // }

    // const dispatch = useDispatch();
    // const isAuth = useSelector(state => state.auth.isAuth);
    //
    //
    // const handleLogin = ()=> {
    //     dispatch(login());
    // }
    // const handleLogout = ()=> {
    //     dispatch(logout());
    // }



    return (
        <div>
            {/*<div>*/}
            {/*    <h1>Count: {state.value}</h1>*/}
            {/*    <button onClick={handleIncrement}>Increment</button>*/}
            {/*    <button onClick={handleDecrement}>Decrement</button>*/}
            {/*</div>*/}

            {/*{isAuth ?*/}
            {/*    <button onClick={handleLogout}>Logout</button> :*/}
            {/*    <button onClick={handleLogin}>Login</button>*/}
            {/*}*/}

            <nav>
                <NavLink to="/menu">Menu</NavLink>
                <br/>
                <NavLink to="/cart">Cart</NavLink>
            </nav>

            <Routes>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </div>
    );
}
export default App;
