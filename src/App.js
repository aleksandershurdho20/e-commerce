import logo from './logo.svg';
import './Main.scss';
import Header from "./Components/Header/Header"
import "slick-carousel/slick/slick.css";
// import Home from "../Components/Pages/Home"
import Home from "./Pages/Index"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"


import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="main">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />



        </Switch>
      </Router>

    </div>
  );
}

export default App;
