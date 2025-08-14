import React from "react";
import TitleHeader from "./components/TitleHeader.jsx";
import bgImage from "./assets/images/index_bg.png"

export default function App() {
    return (
        <div className="App">
            <TitleHeader />
            <img src={bgImage} alt="Fox laying down" className="img-index"/>
        </div>
    );
}