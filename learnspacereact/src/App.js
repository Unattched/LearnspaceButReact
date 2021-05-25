import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from "react-router";
import LoginPage from "./LoginPage.js"
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        {/*<Router>*/}
        {/*<Switch>*/}
        {/*  <Route exact={true} path={"/"}>*/}
        {/*      <LoginPage/>*/}
        {/*  </Route>*/}
        {/*</Switch>*/}
        {/*</Router>*/}
      <button onClick={() => {
        let newCount = count + 1
        setCount(newCount)
      }}>Please click me!</button>
      {count}
    </div>
  );
}

export default App;
