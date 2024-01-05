import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import UserInfoContext from "./context/UserInfoContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserInfoContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserInfoContext>
    </React.StrictMode>
)
