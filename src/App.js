import logo from './logo.svg';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { About } from "./pages/about";
import { Publications } from "./pages/pubs";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0, 0)}>
          <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/publications' component={Publications}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
