import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
        <img src={"src/assets/images/index_bg.png"} alt="Fox laying down" className="img-index"/>
    </React.StrictMode>
)
