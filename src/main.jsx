import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { image } from "./assets/images/index_bg.png"

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
        <img src={image} alt="Fox laying down" className="img-index"/>
    </React.StrictMode>
)
