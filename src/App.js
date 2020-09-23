import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom"

import logo from './logo.svg';
import "./css/font.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import 'aos/dist/aos.css'
import './App.css';
import Homepage from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
        </BrowserRouter>
        
  );
}

export default App;
