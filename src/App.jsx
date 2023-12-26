import './App.css'
import Box from "./components/Box/Box.jsx";
import {useState} from "react";

const App = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="main__container">
            {isVisible && <Box/>}
            {/*<button onClick={() => setIsVisible(!isVisible)}>Toggle visibility</button>*/}
        </div>
    );
}
export default App;
