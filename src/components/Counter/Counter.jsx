import { useState } from 'react';
import "./styles.css"

const Counter = ()=> {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter-container">
            <h1 className="count-display">Counter: {count}</h1>
            <div className="buttons-container">
                <button className="button increment" onClick={increment}>Increment</button>
                <button className="button decrement" onClick={decrement}>Decrement</button>
                <button className="button reset" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
