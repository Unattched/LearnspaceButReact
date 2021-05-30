import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import LoginPage from "./LoginPage.js"
import {useState} from "react";
import firebase from "firebase";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact={true} path={"/"}><LoginPage/></Route>
                {/*<Route exact path={"/home"}></Route>*/}
            </Switch>
        </Router>
    </div>
  );
}

export default App;
