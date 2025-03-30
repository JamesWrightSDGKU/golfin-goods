import { useState } from "react";
import "../styles/About.css";

function About() {
    const [isVisible, setIsVisible] = useState(false);

    function showData() {
        console.log("button clicked");
        setIsVisible(true);
    }

    return (
        <div className="about">
            <h2>James</h2>
            { isVisible ? <h5>james@example.com</h5> : null }
            <button className="btn btn-dark" onClick={showData}>Contact Me</button>
        </div>
    );
}

export default About;