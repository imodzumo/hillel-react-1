import './App.css'
import Input from "./components/Input/Input.jsx";
import Popup from "./components/Popup/Popup.jsx";
import {useState} from "react";

const App = () => {
    const [name, setName] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleNameSubmit = (enteredName) => {
        setName(enteredName);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="main-container">
            {!isPopupOpen && <Input onNameSubmit={handleNameSubmit} />}
            {isPopupOpen && <Popup name={name} onClose={closePopup} />}
        </div>
    );
}
export default App;
