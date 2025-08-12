import React from "react";
import TitleHeader from "./components/TitleHeader.jsx";

export default function App() {
    return (
        <div className="App">
            <TitleHeader />
            <img src={import.meta.env.BASE_URL + "src/assets/images/index_bg.png"} alt="Fox laying down" className="img-index"/>
        </div>
    );
}