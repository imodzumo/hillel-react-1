import './styles.css';

function Popup({ name, onClose }) {
    return (
        <div className="popupWrapper"r>
            <p>Hello, {name}!</p>
            <button onClick={onClose} className="close-button">Close</button>
        </div>
    );
}

export default Popup;
