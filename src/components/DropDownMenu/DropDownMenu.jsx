import React, { useState } from 'react';
import './styles.css';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown">
            <button className="dropButton" onClick={toggleDropdown}>
                Menu
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
