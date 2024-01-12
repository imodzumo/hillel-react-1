import './App.css'
import {useReducer, useState} from "react";
import {Decrement, Increment} from "./actions/actions.js";
import { increment, decrement } from "./actions/actionCreators.js"

const App = () => {
    //
    // const [count, setCount] = useState(0)
    //
    // const handleIncrement = ()=> {
    //     setCount(count + 1)
    // }
    // const handleDecrement = ()=> {
    //     setCount(count - 1)
    // }

    const reducer = (state, action)=> {
        switch (action.type) {
            case Increment:
                return {
                    ...state,
                    value: state.value + 1
                };
            case Decrement:
                return {
                    ...state,
                    value: state.value - 1
                };
            default:
                return state;
        }
    }
    const initialState = {
        value: 1,
        counterId: 10,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = ()=> {
        dispatch(increment());
    }
    const handleDecrement = ()=> {
        dispatch(decrement());
    }

    return (
        <div className="main__container">
            <div>
                <h1>Count: {state.value}</h1>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
}
export default App;
