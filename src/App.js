import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import { About } from "./pages/about";
import { Publications } from "./pages/pubs";
import { Misc } from "./pages/misc";
import { Gloaw } from "./pages/subpages/gloaw";
import { Blog } from './pages/blog';
import { OpenGLApps } from './pages/subpages/openglapps';

import './App.css';
import { AndroidApps } from './pages/subpages/androidapps';

class App extends Component {

  render() {
    return (
      <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL} onUpdate={() => window.scrollTo(0, 0)}>
          <Switch>
            <Route path='/publications' component={Publications}/>
            <Route path='/misc/gloaw' component={Gloaw}/>
            <Route path='/misc/openglapps' component={OpenGLApps}/>
            <Route path='/misc/androidapps' component={AndroidApps}/>
            <Route path='/misc' component={Misc}/>
            <Route path='/archive' component={Blog}/>
            <Route path='/' component={About}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
