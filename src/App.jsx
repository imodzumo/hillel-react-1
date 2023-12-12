import './App.css'
import Input from "./components/Input/Input.jsx";
import Popup from "./components/Popup/Popup.jsx";
import {useState} from "react";
import Button from "./components/Button/Button.jsx";
import Card from "./components/Card/Card.jsx";

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

    const userInfo = {
        firstName: 'firstName',
        lastName: 'lastName',
        age: 30,
        skills: [
            {id: 1, title: 'React', level: 1},
            {id: 2, title: 'Ts', level: 2},
            {id: 3, title: 'Redux', level: 3}
        ]
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        console.log(123);
    }

    return (
        <div className="main-container">
            {/*{!isPopupOpen && <Input onNameSubmit={handleNameSubmit} />}*/}
            {/*{isPopupOpen && <Popup name={name} onClose={closePopup} />}*/}
            {/*<Button text="Cancel" placeholder="Button" isLoading={true} count={20}/>*/}
            {/*<Button text="Submit"/>*/}
            {/*<Button/>*/}
            <Card info={userInfo} onSubmitForm={handleSubmitForm}/>
        </div>
    );
}
export default App;
