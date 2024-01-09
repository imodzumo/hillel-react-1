import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import TodosInfoContext from "./context/TodosInfoContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodosInfoContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TodosInfoContext>
    </React.StrictMode>
)
