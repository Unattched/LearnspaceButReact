import React from "react";
import "./HomePage.css";
import {useHistory} from "react-router";
const HomePage = () => {
    let history = useHistory();
    return (
        <div className={"HomePage"}>
            <nav className={"navBar"}>
                <button className={"Account"}>Account</button>
                <button onClick={() => {
                    if(document.getElementById("OptionsContainer").style.visibility === "visible") {
                        document.getElementById("OptionsContainer").style.visibility = "hidden";
                        document.getElementById("OptionsContainer").style.visibility = "hidden";
                    }
                    else {
                        document.getElementById("OptionsContainer").style.visibility= "visible";
                    }
                }} className={"kid1"}>Menu</button>
                <button className={"kid2"}>Classes</button>
                <button className={"kid4"}>Settings</button>
            </nav>
            <div id={"OptionsContainer"}>
                <div id={"OptionsMenu"}>
                    <button onClick={() => {
                        history.push("/kid")
                    }}>Set Work</button>
                    <button>Find Work</button>
                    <button>Test</button>
                    <button>Test</button>
                </div>
            </div>

        </div>
    )
};
export default HomePage;
