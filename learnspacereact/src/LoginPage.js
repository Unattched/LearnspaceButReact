import React from 'react';
import {useHistory} from "react-router";
import firebase from "firebase";
import "./LoginPage.css"

const LoginPage = () => {
    let history = useHistory();
    let GoogleProvider = new firebase.auth.GoogleAuthProvider();
    return (
        <div className={"Login"}>
            <button id="LoginButton" onClick={() => {
                firebase.auth().signInWithPopup(GoogleProvider)
                    .then(res => {
                        history.push("/home");
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }}>
                Login
            </button>
        </div>
    );
}

export default LoginPage;
