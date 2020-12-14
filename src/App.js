

import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './Main.scss';
import Header from "./Components/Header/Header"
import "slick-carousel/slick/slick.css";
// import Home from "../Components/Pages/Home"
import Home from "./Pages/Index"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import { auth } from "./firebase/utils"

import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  let authListener = null;
  const [initialValue, setInitialValue] = useState({
    currentUser: null
  })
  useEffect(() => {
    authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) return;
      setInitialValue({
        currentUser: userAuth
      })
    })

    return () => {
      authListener()
    }
  }, [])
  return (
    <div className="main">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} {...initialValue} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route path="*" component={() => <h2>404!</h2>} />


        </Switch>
      </Router>

    </div>
  );
}

export default App;
