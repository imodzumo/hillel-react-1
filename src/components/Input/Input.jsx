import {useState} from "react";
import './styles.css';


function Input({ onNameSubmit }) {
    const [enteredName, setEnteredName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNameSubmit(enteredName);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-field"
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
                placeholder="Enter your name"
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}


export default Input;

