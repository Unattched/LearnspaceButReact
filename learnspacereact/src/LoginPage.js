import React from 'react';
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import "./LoginPage.css"

const LoginPage = () => {
    let history = useHistory();
    let GoogleProvider = new firebase.auth.GoogleAuthProvider();
    return (
        <div className={"Login"}>
            <button id="LoginButton" onClick={() => {
                firebase.auth().signInWithPopup(GoogleProvider)
                    .then(() => {
                        console.log("Kid logged in");
                        history.push("/home");
                        console.log("kid why no work");
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }}>     
                Login
            </button>
        </div>
    );
};

export default LoginPage;
