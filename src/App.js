
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import LogIn from './components/LogIn'
import About from './components/Fav'
import Footer from "./components/Footer"
import Results from './components/Results';
import { render } from '@testing-library/react';


function App() {
  var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
              document.getElementById("Nav").style.top = "0";
      } else {
              document.getElementById("Nav").style.top = "-80px";
      }
        prevScrollpos = currentScrollPos;

    }

    


  
  return (
    <Router>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/About" component={About} />
          <Route path="/Results" component={Results} />
        </Switch>
      </div>
    </Router>
  );

}
const Home =()=> {
  return(
    <body>
      <div>
        <Main />
      </div>
      <Footer />
    </body>
    );
}


export default App;
