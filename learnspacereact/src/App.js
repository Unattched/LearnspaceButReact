import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import LoginPage from "./LoginPage.js"
import firebase from "firebase";
import HomePage from "./HomePage";
import Form from "./Form";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact={true} path={"/"}><LoginPage/></Route>
                <Route exact={true} path={"/home"}><HomePage/></Route>
                <Route exact={true} path={"/form"}><Form/></Route>
            </Switch>
        </Router>
    </div>
  );
}

const firebaseConfig = {
    apiKey: "AIzaSyBeWfFKSI0NE6i0mgy5tamYgAwVB-rzVK8",
    authDomain: "learnspace-da3e0.firebaseapp.com",
    projectId: "learnspace-da3e0",
    storageBucket: "learnspace-da3e0.appspot.com",
    messagingSenderId: "860452864649",
    appId: "1:860452864649:web:861d1fbff258055aef3c58",
    measurementId: "G-HQ86WRCLLZ"
};

firebase.initializeApp(firebaseConfig);

export default App;
